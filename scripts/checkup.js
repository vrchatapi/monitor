import fs from "fs/promises";

import { SystemApi } from "vrchat";
import beautify from "js-beautify";

const system = new SystemApi({
    basePath: "https://vrchat.com/api/1",
    baseOptions: {
        headers: {
            "User-Agent": "vrchat-monitor/1 vrchatapi.lpv0t@aries.fyi"
        }
    }
});

function findIntersection(arr) {
    if (arr.length === 0) {
      return {};
    }
    let intersection = {...arr[0]};
    for (let i = 1; i < arr.length; i++) {
      for (let key in intersection) {
        if (!(key in arr[i])) {
          delete intersection[key];
        }
      }
    }
    return intersection;
  }


(async () => {
    // Fetch and beautify the JavaScript bundle
    const { data: jsRaw } = await system.getJavaScript("public", "main")
    await fs.writeFile("./dist/raw/app.js", jsRaw);

    const jsPretty = beautify.js(jsRaw, { unescape_strings: true });
    await fs.writeFile("./dist/app.js", jsPretty);

    const uniqueStrings = [...new Set([...jsPretty.matchAll(/(['"`])(.*?)(?<!\\)\1/gi)].map((match) => match[2].trim()))].sort()
    await fs.writeFile("./dist/app.strings.json", JSON.stringify(uniqueStrings, null, 4));

    const uniqueKeys = [...new Set([...jsPretty.matchAll(/\b\w+\b(?!\s*\()/gi)].map((match) => match[0].trim()))].sort()
    await fs.writeFile("./dist/app.keys.json", JSON.stringify(uniqueKeys, null, 4));

    const uniqueUrls = [...new Set([...jsPretty.matchAll(/\b((?:\w+:)?\/\/(?:[\w-]+\.)+[a-z]{2,}(?:[\w\/+=%&_\.~?\-]*)\b)/gi)].map((match) => match[0].trim()))].sort()
    await fs.writeFile("./dist/app.urls.json", JSON.stringify(uniqueUrls, null, 4));

    // Fetch and beautify the CSS bundle
    const { data: cssRaw } = await system.getCSS()
    await fs.writeFile("./dist/raw/app.css", cssRaw);

    const cssPretty = beautify.css(cssRaw, {});
    await fs.writeFile("./dist/app.css", cssPretty);
})()
