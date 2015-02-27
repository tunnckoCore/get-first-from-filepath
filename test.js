/**
 * get-first-from-filepath <https://github.com/tunnckoCore/get-first-from-filepath>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var getFirstFromFilepath = require('./index');

describe('get-first-from-filepath:', function() {
  it('should return empty string if not string given', function(done) {
    assert.strictEqual(getFirstFromFilepath(), '');
    assert.strictEqual(typeof getFirstFromFilepath(), 'string');
    assert.strictEqual(typeof getFirstFromFilepath({a: 'b'}), 'string');
    assert.strictEqual(typeof getFirstFromFilepath([1,2,3]), 'string');
    assert.strictEqual(typeof getFirstFromFilepath(function(){}), 'string');
    assert.strictEqual(typeof getFirstFromFilepath(123), 'string');
    done();
  });
  it('should return only name of the first from filepath', function(done) {
    assert.strictEqual(getFirstFromFilepath('foo/bar/baz'), 'foo');
    assert.strictEqual(getFirstFromFilepath('/foo/bar/baz'), 'foo');
    assert.strictEqual(getFirstFromFilepath('./foo/bar/baz'), 'foo');
    assert.strictEqual(getFirstFromFilepath('../foo/bar/baz'), '../foo');
    assert.strictEqual(getFirstFromFilepath('..foo/bar/baz'), '..foo');
    assert.strictEqual(typeof getFirstFromFilepath('foo/bar/baz'), 'string');
    done();
  });
  it('should return `../foo` if `../foo/bar/baz`', function(done) {
    assert.strictEqual(getFirstFromFilepath('../foo/bar/baz'), '../foo');
    assert.strictEqual(typeof getFirstFromFilepath('../foo/bar/baz'), 'string');
    done();
  });
});
