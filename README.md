# generate-riot-ts

Script generating riot.js template files with typescript.

## Installation

Install with npm.

```
$ npm i -D generate-riot-ts
```

## Usage

### CLI

Call this script with 2 arguments, relative or absolute path you want to export files and the component's name as kebab-case.

```
$ generate-riot-ts ./export/path component-name
```

As result with above example, you will get 2 files.

```
+ ./export/path
    + component-name
        - component-name.riot
        - types.ts
```

### API

Also you can use this script as node module.
Call `generate()` with 2 arguments as same as CLI one.

```example.ts

import { generate } from 'generate-riot-ts'

// Please give relative path from process.cwd.
// of course you can use absolute path too.
const exportDirPath: string = './example/path';

// Give the component's name as kebab-case!
const name: string = 'component-name';

generate(exportDirPath, name)
  .then((absoluteExportPath: string) => {
      console.log(absoluteExportPath);
      // Output absolute path exported 2 files.
  });

```

However, API usage is not main purpose definitely.
This makes easier and faster your development using riot.js with typescript.

## Contribute

Sorry for my laziness, This project has no test ever.

But I'm really welcome to get any pull requests. Feel free to be better this script :)

## License

MIT License
