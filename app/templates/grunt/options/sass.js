//
// SASS Task
//
// More information
// - https://github.com/gruntjs/grunt-contrib-sass
// 
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  options: {
    require: ['sass-globbing']
  },
  dev: {
    expand: true,
    cwd: nconf.get('app').basePath,
    src: ['**/*.{scss,sass}', '!{vendor,_*}/**/*'],
    dest: nconf.get('app').tempDir,
    ext: '.css'
  }
};