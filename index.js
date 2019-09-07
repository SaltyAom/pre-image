"use strict";

if (process.env.NODE_ENV === "production") {
	module.exports = require("./preImage.prod.js");
} else {
	module.exports = require("./preImage.dev.js");
}