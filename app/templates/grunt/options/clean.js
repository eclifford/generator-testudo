//
// Clean Task
// 
// The clean task is used to delete files and folders.
//
// More information
// - https://github.com/gruntjs/grunt-contrib-clean
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  options: {
    force: true
  },
  dist: [nconf.get('app:tempDir'), nconf.get('app:buildDir')],
  dev: [nconf.get('app:tempDir')]
};
