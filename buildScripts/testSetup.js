// This file isn't transpiled, so CommonJS and ES5 is used

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
