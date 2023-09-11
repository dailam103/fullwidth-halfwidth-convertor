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
const { halfToFull, fullToHalf } = require('fullwidth-halfwidth-convertor');

console.log(fullToHalf('フール'));

console.log(halfToFull('ﾌｰﾙ'));

```

`Modulejs or Typescript`
```TS
import { halfToFull, fullToHalf } from 'fullwidth-halfwidth-convertor';

console.log(fullToHalf('フール'));

console.log(halfToFull('ﾌｰﾙ'));
```

[coverage-result-link]: https://coveralls.io/repos/github/dailam103/fullwidth-halfwidth-convertor/badge.svg
[coverage-link]: https://coveralls.io/github/dailam103/fullwidth-halfwidth-convertor