// Usage:
// $ cd examples/nodejs
// $ npm install
// $ node index.ts

const canonify = require('../../dist/index.js');

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
