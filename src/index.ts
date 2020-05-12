import * as NodeHelper from "@robbie-cook/node-helper";
const yargs = require('yargs').argv;

console.log('Pulling in starter...');

const repoAddress = 'https://github.com/Robbie-Cook/typescript-starter';

/**
 * Main function for this library
 */
async function run() {
  console.log(await NodeHelper.execute(`git clone ${repoAddress} ${yargs.outputDir ?? '.'}`));
}

run();
