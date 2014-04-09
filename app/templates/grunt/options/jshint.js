//
// JSHint Task
// 
//
var nconf = require('nconf');

module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  js: {
    files: {
      src: [
        nconf.get('app').basePath + '/modules/**/*.js',
        nconf.get('app').basePath + '/*.js'
      ]
    }
  }
};
