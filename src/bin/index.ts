#!/usr/bin/env node

import { generate } from "..";

const args = process.argv;

if (args.length !== 4) {
  console.error("Argument Error.");
  console.error("Execute command below:");
  console.error(
    "generate-riot-ts <export directory path> <kebab-case-component-name>"
  );
  process.exit(-1);
}

const path = args[2];
const name = args[3];

generate(path, name)
  .then(resultPath => {
    console.log(
      'Generate riot component files in "' +
        resultPath +
        '" by generate-riot-ts.'
    );
  })
  .catch(err => {
    console.error(err);
  });
