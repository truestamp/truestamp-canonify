# Truestamp Canonify

## Description

A tiny zero-dependency JSON canonicalization library written in Typescript that supports ES
Modules, IIFE, and CommonJS loaders and runs in Deno, Node.js, and modern browsers.

Canonicalization of JavaScript/TypeScript data structures to a standard and deterministically ordered output can be very useful for hashing and signing complex nested structures where the ordering is unknown.

This library should fully implements the JSON Canonicalization Scheme (JCS) as documented in [RFC8785](https://datatracker.ietf.org/doc/html/rfc8785).

Significant testing was done to ensure the library stays true to `JSON.stringify()` single argument behaviors.

## Usage

Here are some simple usage examples.

There are working code examples for Deno, Node.js, and the Web in the [/examples](/examples) directory. Take a look at the [examples/README.md](examples/README.md) for usage instructions.

### Node.js (CommonJS)

#### Setup Node.js

In your NPM project directory.

```bash
npm install --save @truestamp/canonify
```

Require the `@truestamp/canonify` CommonJS module in your project.

#### Node.js Example

```js
const { canonify } = require('@truestamp/canonify');

const example = {
  big: BigInt(42).toString(),
  f: false,
  fun: () => { },
  n: null,
  num: 42,
  s: "string",
  sym: Symbol("hello"),
  t: true,
  u: undefined,
  a: [
    undefined,
    null,
    true,
    false,
    "foo",
    42,
    BigInt(42).toString(),
    Symbol("hello"),
    () => { },
  ],
}

console.log(canonify(example));
```

### Deno (ES Modules)

[Deno](https://deno.land/) is a simple, modern and secure runtime for JavaScript
and TypeScript that uses V8 and is built in Rust.

#### Setup Deno

Recent versions of `canonify` are published to the official Deno third party modules CDN.

<https://deno.land/x/canonify>

#### Deno Example

```typescript
// IMPORTANT : use the current release version of `canonify`
// in the module URL. Replace `@v1.1.1` with the latest version.
// Versions are tied to GitHub release tags.
import { canonify } from "https://deno.land/x/canonify@v1.1.1/mod.ts";

const example = {
  big: BigInt(42).toString(),
  f: false,
  fun: () => { },
  n: null,
  num: 42,
  s: "string",
  sym: Symbol("hello"),
  t: true,
  u: undefined,
  a: [
    undefined,
    null,
    true,
    false,
    "foo",
    42,
    BigInt(42).toString(),
    Symbol("hello"),
    () => { },
  ],
}

console.log(canonify(example));
```

## API Documentation

The [TypeScript API documentation](https://truestamp.github.io/truestamp-canonify/) for this project is generated and published upon each new release.

## Testing

This library aims to maintain 100% code test coverage and it passes 100% of the test
vectors provided by the [RFC8785](https://datatracker.ietf.org/doc/html/rfc8785)
[testdata](https://github.com/cyberphone/json-canonicalization/tree/master/testdata) vectors.
This should help ensure that its output is consistent with other compliant libraries on other runtimes.

## Thanks

Much of the code is ported to TypeScript from, and was based on, the following excellent examples:

- [https://github.com/cyberphone/json-canonicalization](https://github.com/cyberphone/json-canonicalization)
- [erdtman/canonicalize](https://github.com/erdtman/canonicalize)

Porting to Typescript was necessary for the additional security that strongly typed code provides, as well as for serving as the base for transpilation for use in other runtime contexts.

## Contributing

We'd love you to join our network of contributors. Please read
[CONTRIBUTING.md](CONTRIBUTING.md) for help getting started.

### Releasing

- Commit changes, merge PR's to `main` branch
- Bump `version` field in `package.json`
- Cut a new [release](https://github.com/truestamp/truestamp-canonify/releases)
- New release will trigger workflow to build, test, and publish package to
  [Github Package Registry](https://github.com/truestamp/truestamp-canonify/packages)
  and [NPM.js](https://www.npmjs.com/package/@truestamp/canonify).

## Code of Conduct

We expect all members of the community to respect our
[Code of Conduct](CODE_OF_CONDUCT.md) at all times.

## Legal

Copyright © 2022 Truestamp Inc. All Rights Reserved.
