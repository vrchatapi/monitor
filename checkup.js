import fs from "fs/promises";

/* import { SystemApi } from "vrchat"; */
import fetch from "node-fetch";
import beautify from "js-beautify";

const VRCHAT_API_URL = "https://vrchat.com/api/1"

const fetchJs = () => fetch(`${VRCHAT_API_URL}/js/app.js`).then(r => r.text());
const fetchCss = () => fetch(`${VRCHAT_API_URL}/css/app.css`).then(r => r.text());

(async () => {
    /* Fetch and beautify the current javascript bundle. */
    const jsRaw = await fetchJs();
    await fs.writeFile("./dist/raw/app.js", jsRaw);

    const jsPretty = beautify.js(jsRaw, { unescape_strings: true });
    await fs.writeFile("./dist/app.js", jsPretty);

    /* Fetch and beautify the current css bundle. */
    const cssRaw = await fetchCss();
    await fs.writeFile("./dist/raw/app.css", cssRaw);

    const cssPretty = beautify.css(cssRaw, {});
    await fs.writeFile("./dist/app.css", cssPretty);
})()