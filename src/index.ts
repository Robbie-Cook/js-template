import * as NodeHelper from "@robbie-cook/node-helper";
const path = require("path");
const yargs = require('yargs').argv;


const repoAddress = 'https://github.com/Robbie-Cook/typescript-starter';

/**
 * Main function for this library
 */
async function run() {
  console.log('Pulling in starter...');
  const outputDir = yargs.outputDir ?? ".";

  const tempOutputDir = path.resolve(outputDir, 'temp');

  console.log(await NodeHelper.execute(`git clone ${repoAddress} ${tempOutputDir ?? '.'}`));

  console.log('Removing git info...')
  console.log(await NodeHelper.execute(`rm -rf ${path.resolve(tempOutputDir, ".git")}`));

  console.log(`Moving files from temp to ${outputDir}`);
  console.log(await NodeHelper.execute(`mv -r ${tempOutputDir}/ ${outputDir}`));
}

run();
