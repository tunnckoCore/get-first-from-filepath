/**
 * get-first-from-filepath <https://github.com/tunnckoCore/get-first-from-filepath>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var startsWith = require('starts-with');
var eachIndex = require('each-string-index');

module.exports = function getFirstFromFilepath(fp) {
  if (!fp || typeof fp !== 'string') {
    return '';
  }

  var filepath = '';
  var indices = eachIndex('/', fp);

  if (startsWith(fp, './') || startsWith(fp, '/')) {
    return fp.slice(indices[0] + 1, indices[1]);
  }

  if (fp.charAt(2) === '/') {
    return '..' + fp.slice(indices[0], indices[1]);
  }

  return fp.slice(0, indices[0]);
};
