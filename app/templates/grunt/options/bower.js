//
// Bower RequireJS
// 
// Automatically wire-up installed bower components to r.js config
//
// More information
// - https://github.com/yeoman/grunt-bower-requirejs/
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  js: {
    rjsConfig: nconf.get('app:basePath') + '/config.js'
  }
};
