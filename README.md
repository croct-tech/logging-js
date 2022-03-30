<p align="center">
    <a href="https://croct.com">
        <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Logging</strong>
    <br />
     An interoperability layer for logging libraries.
</p>
<p align="center">
        <a href="https://www.npmjs.com/package/@croct/logging"><img alt="Version" src="https://img.shields.io/npm/v/@croct/logging"/></a>
    <a href="https://github.com/croct-tech/logging-js/actions/workflows/validate-branch.yaml"><img alt="Build" src="https://github.com/croct-tech/logging-js/actions/workflows/validate-branch.yaml/badge.svg" /></a>
    <a href="https://codeclimate.com/repos/624482b6bb490c6b2e01b791/test_coverage"><img src="https://api.codeclimate.com/v1/badges/bd8d36b9036794211e7a/test_coverage" /></a>
    <a href="https://codeclimate.com/repos/624482b6bb490c6b2e01b791/maintainability"><img src="https://api.codeclimate.com/v1/badges/bd8d36b9036794211e7a/maintainability" /></a>
    <br />
    <br />
    <a href="https://github.com/croct-tech/logging-js/releases">📦 Releases</a>
    ·
    <a href="https://github.com/croct-tech/logging-js/issues/new?labels=bug&template=bug-report.md">🐞 Report Bug</a>
    ·
    <a href="https://github.com/croct-tech/logging-js/issues/new?labels=enhancement&template=feature-request.md">✨ Request Feature</a>
</p>

## Installation

We recommend using [NPM](https://www.npmjs.com) to install the package:

```sh
npm install @croct/logging
```

## Basic usage

The following example shows how to log a message using the [`ConsoleLogger`](src/consoleLogger.ts):

```ts
import {ConsoleLogger, LogLevel} from '@croct/logging';

const logger = new ConsoleLogger();

logger.log({
    level: LogLevel.ERROR,
    message: 'Unable to load data',
    details: { 
        cause: 'The request failed',
        status: 500,
    },
});
```

## Implementations

This package provides the following implementations:

- [SuppressedLogger](src/suppressedLogger.ts)  
  A logger that does not log anything, but can be used to suppress logging where desired.
- [ConsoleLogger](src/consoleLogger.ts)  
  A logger that writes to the console using the appropriate console API semantics.
- [PrefixedLogger](src/prefixedLogger.ts)  
  A logger that prepends a prefix to all log messages.

## Utilities

Because JavaScript allows throwing pretty much anything, proving more information about the error 
often requires a lot of boilerplate. 

This package provides a few utilities to make it easier to log errors:

- [extractErrorMessage](src/utilities.ts)  
  Extracts the error message from an unknown caught error.
- [formatErrorMessage](src/utilities.ts)  
  Formats an error message for use as the main message, falling back to a default message when 
  no message is available.
- [formatErrorCause](src/utilities.ts)
  formats an error message for use as a complement to the main message, falling back to a 
  default message when no message is available.

## Contributing

Contributions to the package are always welcome!

- Report any bugs or issues on the [issue tracker](https://github.com/croct-tech/logging-js/issues).
- For major changes, please [open an issue](https://github.com/croct-tech/logging-js/issues) first to discuss what you would like to change.
- Please make sure to update tests as appropriate.

## Testing

Before running the test suites, the development dependencies must be installed:

```sh
npm install
```

Then, to run all tests:

```sh
npm run test
```

Run the following command to check the code against the style guide:

```sh
npm run lint
```

## Building

Before building the project, the dependencies must be installed:

```sh
npm install
```

Then, to build the CommonJS module:

```sh
npm run build
```

## License

Copyright © 2015-2022 Croct Limited, All Rights Reserved.

All information contained herein is, and remains the property of Croct Limited. The intellectual, design and technical concepts contained herein are proprietary to Croct Limited s and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from Croct Limited.
