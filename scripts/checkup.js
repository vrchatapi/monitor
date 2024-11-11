import fs from "node:fs/promises";

import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import beautify from "js-beautify";
import UserAgent from "user-agents";
import { SystemApi } from "vrchat";

const protocols = ["http:", "https:", "ws:", "wss:", "vrchat:"];
const cdnUrl = "https://dtuitjyhwcl5y.cloudfront.net";

const userAgent = new UserAgent();

const system = new SystemApi({
	basePath: "https://vrchat.com/api/1",
	baseOptions: {
		headers: {
			"User-Agent": userAgent.toString()
		}
	}
});

function trim(value) {
	if (!value || typeof value !== "string")
		return value;

	return value.replaceAll(/(^\s+|\s+$)/g, "");
}

function parseChunk(source) {
	const identifiers = new Set();
	const literals = new Set();
	const probableChunks = new Map();

	source = source.replaceAll(/(For license information please see) "(.+)"/gi, "$1 <unstable>");

	try {
		const ast = parse(source, {});
		traverse.default(ast, {
			enter(path) {
				if (path.isIdentifier())
					identifiers.add(trim(path.node.name));

				if (path.isLiteral())
					literals.add(trim(path.node.value));

				if (path.isObjectProperty()
					&& path.node.key.type === "NumericLiteral"
					&& path.node.value.type === "StringLiteral"
					&& path.node.value.value.length === 64)
					probableChunks.set(path.node.key.value, path.node.value.value);
			},
		});
	}

	catch (reason) {
		console.warn("failed to parse chunk", reason);
	}

	const pretty = beautify.js(source, { unescape_strings: true });
	return { source, pretty, identifiers, literals, probableChunks };
}

async function getLicense(pathname) {
	const url = `${cdnUrl}/${pathname}.LICENSE.txt`;
	console.log("fetching license", url);

	const response = await fetch(url).catch(() => null);
	if (!response || !response.ok) return null;

	const text = await response.text();
	return text;
}

(async () => {
	await fs.rm("./dist/chunks", { recursive: true }).catch(() => { });
	await fs.mkdir("./dist/chunks");

	await fs.rm("./dist/raw/chunks", { recursive: true }).catch(() => { });
	// await fs.mkdir("./dist/raw/chunks");

	// Fetch and beautify the JavaScript bundle
	const { data: jsRaw, request } = await system.getJavaScript("public", "main");
	const license = await getLicense(request.path);

	const { source, identifiers: _identifiers, literals: _literals, probableChunks, pretty } = parseChunk(jsRaw);

	// await fs.writeFile("./dist/raw/app.js", source);
	await fs.writeFile("./dist/app.js", pretty);
	if (license) await fs.writeFile("./dist/app.js.LICENSE.txt", license);

	console.log(probableChunks);

	const chunks = (await Promise.all([...probableChunks.entries()].map(async ([id, hash]) => {
		try {
			const pathname = `${hash}.js`;
			const [response, license] = await Promise.all([
				fetch(`${cdnUrl}/${pathname}`),
				getLicense(pathname)
			]);

			const source = await response.text();

			const chunk = parseChunk(source);
			// await fs.writeFile(`./dist/raw/chunks/${id}.js`, source);
			await fs.writeFile(`./dist/chunks/${id}.js`, chunk.pretty);
			if (license) await fs.writeFile(`./dist/chunks/${id}.js.LICENSE.txt`, license);

			return chunk;
		}
		catch (reason) {
			console.warn("failed to get chunk", id, reason);
			return null;
		}
	}))).filter(Boolean);

	let { identifiers, literals } = chunks.reduce((accumulator, chunk) => {
		chunk.identifiers.forEach((value) => accumulator.identifiers.add(value));
		chunk.literals.forEach((value) => accumulator.literals.add(value));
		return accumulator;
	}, { identifiers: _identifiers, literals: _literals });

	identifiers = [..._identifiers].sort();
	literals = [..._literals].sort();

	const urls = literals.map((literal) => {
		if (typeof literal !== "string") return null;

		try {
			const url = new URL(literal);
			if (protocols.includes(url.protocol))
				return url.href;

			return null;
		}
		// eslint-disable-next-line unused-imports/no-unused-vars
		catch (reason) {
			const matches = [...literal.matchAll(/\bhttps?:\/\/[^\s'"]+/gi)]
				.map((match) => trim(match[0]))
				.filter(Boolean);

			if (matches.length > 0)
				return matches;

			return null;
		}
	}).flat().filter(Boolean);

	await fs.writeFile(`./dist/identifiers.json`, JSON.stringify(identifiers, null, 2));
	await fs.writeFile(`./dist/literals.json`, JSON.stringify(literals.sort(), null, 2));
	await fs.writeFile(`./dist/urls.json`, JSON.stringify(urls.sort(), null, 2));

	// Fetch and beautify the CSS bundle
	const { data: cssRaw } = await system.getCSS();
	// await fs.writeFile("./dist/raw/app.css", cssRaw);

	const cssPretty = beautify.css(cssRaw, {});
	await fs.writeFile("./dist/app.css", cssPretty);
})();
