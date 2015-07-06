# cli-fail [![Build Status](https://travis-ci.org/bendrucker/cli-fail.svg?branch=master)](https://travis-ci.org/bendrucker/cli-fail)

> Fail with an error message and a correct exit code


## Install

```
$ npm install --save cli-fail
```


## Usage

```js
var fail = require('cli-fail')

fail('it broke')
//=> prints "it broke" to console.error and exits with code 1

fail(new Error())
//=> prints err to console.error, then stack, then exits with code 1
```

## API

#### `fail(err)`

##### err

*Required*  
Type: `string` / `error`

An error message or full error object to log.

## License

MIT © [Ben Drucker](http://bendrucker.me)
