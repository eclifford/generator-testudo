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
    require: ['sass-globbing'],
    compass: true
  },
  dev: {
    expand: true,
    cwd: nconf.get('app:basePath'),
    src: ['**/*.{scss,sass}'].concat(nconf.get('app:ignoredDirs')),
    dest: nconf.get('app:tempDir'),
    ext: '.css'
  }
};
