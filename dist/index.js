"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require('yargs').argv;
console.log('Pulling in starter...');
const repoAddress = 'https://github.com/Robbie-Cook/typescript-starter';
/**
 * Main function for this library
 */
async function run() {
    // console.log(await NodeHelper.execute(`git clone ${repoAddress} ${yarg}`));
    console.log(yargs._[0]);
}
run();
//# sourceMappingURL=index.js.map