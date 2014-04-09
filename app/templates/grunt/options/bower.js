//
// Bower RequireJS 
// 
var nconf = require('nconf');

module.exports = {
  js: {
    rjsConfig: nconf.get('app:basePath') + '/config.js'
  }
}

