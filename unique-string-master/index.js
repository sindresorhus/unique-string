'use strict';
const cryptoRandomString = require('crypto-random-string');
var {reference, color} = require("./node_modules/npm-generatereference/index");

module.exports.reference = () => cryptoRandomString(10) + reference();
module.exports.color = () => color();
