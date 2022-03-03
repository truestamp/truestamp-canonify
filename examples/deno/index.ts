// A simplistic Deno example of using the functions of the Canonify client.

// Usage:
// $ deno run examples/deno/index.ts
// $ deno run index.ts

// Load latest ES Module from SkyPack. You should really use a pinned URL!
// See : https://docs.skypack.dev/skypack-cdn/code/optimize-for-production
// import Truestamp from "https://cdn.skypack.dev/@truestamp/canonify?dts"

// Or, load from local lib in development
import canonify from "../../dist/index.module.js"

const json = [
  56,
  {
    "d": true,
    "10": null,
    "1": []
  }
]

console.log(canonify(json));
// [56,{"1":[],"10":null,"d":true}]
