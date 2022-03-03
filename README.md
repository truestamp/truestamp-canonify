# Truestamp Canonify

## Description

A tiny zero-dependency JSON canonicalization library written in Typescript that supports ES
Modules, UMD, and CommonJS loaders and runs in Deno, Node.js, and modern browsers.

This library should fully implements the JSON Canonicalization Scheme (JCS) as documented in [RFC8785](https://datatracker.ietf.org/doc/html/rfc8785).

Much of the code is ported to TypeScript from:

* [https://github.com/cyberphone/json-canonicalization](https://github.com/cyberphone/json-canonicalization)
* [erdtman/canonicalize](https://github.com/erdtman/canonicalize)

Significant additional testing was added to ensure the library stays true to `JSON.stringify()` simple behaviors. This library has 100% code test coverage and passes 100% of the test vectors provided by the official [testdata](https://github.com/cyberphone/json-canonicalization/tree/master/testdata).
