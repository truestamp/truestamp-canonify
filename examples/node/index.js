// Usage:
// $ cd examples/nodejs
// $ npm install
// $ node index.ts

// Use Local version (dev)
// const canonify = require('../../dist/canonify.cjs');

// Use Published version
const canonify = require('@truestamp/canonify');

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
