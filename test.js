'use strict'

var test = require('tape')
var vm = require('vm')
var fs = require('fs')
var path = require('path')

var code = fs.readFileSync(path.resolve(__dirname, 'index.js'))

test('string', function (t) {
  t.plan(2)
  var fail = vm.runInNewContext(code, {
    module: {},
    console: {
      error: function (message) {
        t.equal(message, 'failure message')
      }
    },
    process: {
      exit: function (code) {
        t.equal(code, 1)
      }
    }
  })
  fail('failure message')
})

test('err', function (t) {
  t.plan(2)
  var i = 0
  var err = new Error()
  var fail = vm.runInNewContext(code, {
    module: {},
    console: {
      error: function (message) {
        if (!i) {
          i++
          return t.equal(message, err)
        }
        t.equal(message, err.stack)
      }
    },
    process: {
      exit: function (code) {
        t.equal(code, 1)
      }
    }
  })
  fail(err)
})
