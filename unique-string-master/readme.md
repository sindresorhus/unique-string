# unique-string [![Build Status](https://travis-ci.org/sindresorhus/unique-string.svg?branch=master)](https://travis-ci.org/sindresorhus/unique-string)

> Generate a unique random string


## Install

```
$ npm install --save unique-string
```


## Usage

```js
const {color, uniqueString} = require('unique-string');

reference();
//=> '85aa70c76619319qu6x1719614'
color();
//=> '#994d6b'
```


## API

### uniqueString()

Returns a 32 character unique string. Matches the length of MD5, which is [unique enough](http://stackoverflow.com/a/2444336/64949) for non-crypto purposes.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
