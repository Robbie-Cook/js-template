"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeHelper = require("@robbie-cook/node-helper");
const path_1 = require("path");
const yargs = require('yargs').argv;
const repoAddress = 'https://github.com/Robbie-Cook/typescript-starter';
/**
 * Main function for this library
 */
async function run() {
    var _a;
    console.log('Pulling in starter...');
    const outputDir = (_a = yargs.outputDir) !== null && _a !== void 0 ? _a : ".";
    const tempOutputDir = path_1.default.resolve(outputDir, 'temp');
    console.log(await NodeHelper.execute(`git clone ${repoAddress} ${tempOutputDir !== null && tempOutputDir !== void 0 ? tempOutputDir : '.'}`));
    console.log('Removing git info...');
    console.log(await NodeHelper.execute(`rm -rf ${path_1.default.resolve(tempOutputDir, ".git")}`));
    console.log(`Moving files from temp to ${outputDir}`);
    console.log(await NodeHelper.execute(`mv -r ${tempOutputDir}/ ${outputDir}`));
}
run();
//# sourceMappingURL=index.js.map