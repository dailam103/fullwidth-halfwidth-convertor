# `Fullwidth Halfwidth Convertor v.1.0.2`

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