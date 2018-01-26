## uxcore-cg-text-ellipsis

React cg text ellipsis

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-cg-text-ellipsis.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-cg-text-ellipsis
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-cg-text-ellipsis.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-cg-text-ellipsis
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-cg-text-ellipsis.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-cg-text-ellipsis?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-cg-text-ellipsis.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-cg-text-ellipsis
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-cg-text-ellipsis.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-cg-text-ellipsis#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-cg-text-ellipsis.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-cg-text-ellipsis.svg
[sauce-url]: https://saucelabs.com/u/uxcore-cg-text-ellipsis


### Development

```sh
git clone https://github.com/uxcore/uxcore-cg-text-ellipsis
cd uxcore-cg-text-ellipsis
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-cg-text-ellipsis
cd uxcore-cg-text-ellipsis
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/cg-text-ellipsis

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## Usage
```javascript
<CgTextEllipsis
  line={2}
  tipAlign="right"
  uniqueKey="text-ellipsis-1"
  text={'哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长哈哈哈我很长'}
/>
```

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| line | Number | false | 1 | 最大行数 |
| text | String | true |  | 要显示的文本 |
| uniqueKey | Number / String | true |  | 元素唯一id |
| ellipsisChar | String | false | '…' | 文本超出句末显示的字符串 |
| isTipAlwaysShow | Boolean | false | false | 是否总是显示Tip |
| maxTipWidth | Number | false | 400 | Tip的最大宽度 |
| tipAlign | String | 'left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight' | 'topRight' | Tip显示的位置 |
| tipTextAlign | String | 'left', 'center', 'right' | 'left' | Tip中文本对其方式 |

## Todo
由于代码实现采用的是js递归截取字符串，当文本内容很大，而期望行数较小时，会导致性能不好，需要引入一些算法去优化。

