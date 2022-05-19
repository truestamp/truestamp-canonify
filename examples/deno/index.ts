// A simplistic Deno example of using the functions of the Canonify client.

// Usage:
//   npm run build (in the root of the repository)
//   deno run examples/deno/index.ts

// Load from local lib in development
// import { canonify } from "../../lib/index.mjs"
import { canonify } from "../../mod.ts"

// OK : load latest ES Module from SkyPack. You should really use a pinned URL!
// See : https://docs.skypack.dev/skypack-cdn/code/optimize-for-production
// import { canonify } from "https://cdn.skypack.dev/@truestamp/canonify@1.1.1?dts";

// OK : load latest ES Module from esm.sh.
// See : https://esm.sh/
// See : https://esm.sh/@truestamp/tree
// import { canonify } from "https://esm.sh/@truestamp/canonify?target=deno"

// OK : Load the module from deno.land/x/canonify
// import { canonify } from "https://deno.land/x/canonify@v1.1.1/mod.ts";

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
