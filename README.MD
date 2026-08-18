# `Fullwidth Halfwidth Convertor v1.0.3`

[![Coverage Status][coverage-result-link]][coverage-link]

## Installation
Using npm:
```
$ npm i -g npm
$ npm i --save fullwidth-halfwidth-convertor
```

### In Node.js
`Commonjs`
```JS
const { halfToFull, fullToHalf, isFullwidthCodePoint } = require('fullwidth-halfwidth-convertor');

console.log(fullToHalf('フール'));

console.log(halfToFull('ﾌｰﾙ'));

console.log(isFullwidthCodePoint('フ'.codePointAt(0))); // true

```

`Modulejs or Typescript`
```TS
import { halfToFull, fullToHalf, isFullwidthCodePoint } from 'fullwidth-halfwidth-convertor';

console.log(fullToHalf('フール'));

console.log(halfToFull('ﾌｰﾙ'));

console.log(isFullwidthCodePoint('フ'.codePointAt(0)!)); // true
```

[coverage-result-link]: https://coveralls.io/repos/github/dailam103/fullwidth-halfwidth-convertor/badge.svg
[coverage-link]: https://coveralls.io/github/dailam103/fullwidth-halfwidth-convertor