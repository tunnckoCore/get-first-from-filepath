## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get the very first directory name from file path `./foo/bar/baz` -> `foo` or `../a/b/c` -> `../a`

## Install
```
npm i --save get-first-from-filepath
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var getFirstFromFilepath = require('get-first-from-filepath');

getFirstFromFilepath('foo/bar/baz');
//=> 'foo'

getFirstFromFilepath('/foo/bar/baz');
//=> 'foo'

getFirstFromFilepath('./foo/bar/baz');
//=> 'foo'

getFirstFromFilepath('../foo/bar/baz');
//=> '../foo'

getFirstFromFilepath('..foo/bar/baz');
//=> '..foo'
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/get-first-from-filepath
[npmjs-img]: https://img.shields.io/npm/v/get-first-from-filepath.svg?style=flat&label=get-first-from-filepath

[coveralls-url]: https://coveralls.io/r/tunnckoCore/get-first-from-filepath?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/get-first-from-filepath.svg?style=flat

[license-url]: https://github.com/tunnckoCore/get-first-from-filepath/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/get-first-from-filepath
[travis-img]: https://img.shields.io/travis/tunnckoCore/get-first-from-filepath.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/get-first-from-filepath
[daviddm-img]: https://img.shields.io/david/tunnckoCore/get-first-from-filepath.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/get-first-from-filepath/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 27, 2015_