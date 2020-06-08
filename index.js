'use strict';
module.exports = () => require('crypto').randomBytes(32).toString("hex");
