# Truestamp Canonify Examples

Simple examples demonstrating usage in Node.js, Deno, and browsers.

## Deno

The `deno/index.ts` file demonstrates simple usage. The source code can be modified to `import` the library from a local build or from a CDN.

You'll need to first install [Deno](https://deno.land/)

```sh
cd examples/deno
deno run index.ts
```

## Node.js

The `node/index.js` file demonstrates some simple usage. The source code can be modified to `require` the library from a local build or from [npmjs.com/package/@truestamp/canonify](https://www.npmjs.com/package/@truestamp/canonify).

```sh
cd examples/node
npm install
node index.js
```

## Browser

To test out the browser examples locally you'll need a simple HTTP server that supports CORS. An easy local server to try without any installation is '[serve](https://github.com/vercel/serve)'. You can try it out by running `npm run serve` from the root directory of this repository (not the examples/ directory).

Once the server is running open [http://127.0.0.1:8080/examples/web](http://127.0.0.1:8080/examples/web) in your browser. This example code implements a demo app the utilizes [alpine.js](https://github.com/alpinejs/alpine/) and the IIFE build to provide some interactivity, and a simpler example using ES Modules.
