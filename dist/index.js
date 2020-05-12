"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const NodeHelper = tslib_1.__importStar(require("@robbie-cook/node-helper"));
const path = require('path');
const yargs = require('yargs').argv;
const repoAddress = 'https://github.com/Robbie-Cook/typescript-starter';
/**
 * Main function for this library
 */
async function run() {
    var _a;
    console.log('Pulling in starter...');
    const outputDir = (_a = yargs.outputDir) !== null && _a !== void 0 ? _a : '.';
    const tempOutputDir = path.resolve(outputDir, 'temp');
    console.log(await NodeHelper.execute(`git clone ${repoAddress} ${tempOutputDir !== null && tempOutputDir !== void 0 ? tempOutputDir : '.'}`));
    console.log('Removing git info...');
    console.log(await NodeHelper.execute(`rm -rf ${path.resolve(tempOutputDir, '.git')}`));
    console.log(`Moving files from temp to ${outputDir}`);
    console.log(await NodeHelper.execute(`mv ${tempOutputDir}/* ${outputDir}`));
    console.log(await NodeHelper.execute(`rm -rf ${tempOutputDir}`));
    console.log(`Done!`);
}
run();
//# sourceMappingURL=index.js.map