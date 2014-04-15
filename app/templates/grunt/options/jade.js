//
// Jade Task
// 
// The Copy task moves files that are not compiled into position for 
// builds
//
// More information
// - https://github.com/gruntjs/grunt-contrib-copy
// 
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  dev: {
    expand: true,
    cwd: nconf.get('app:basePath'),
    src: ['**/*.jade'].concat(nconf.get('app:ignoredDirs')),
    dest: nconf.get('app:tempDir'),
    ext: '.html'
  }
};
