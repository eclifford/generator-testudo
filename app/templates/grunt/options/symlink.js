//
// Symlink Task
// 
// To avoid the moving of all files in bower_components around all the time and
// the overhead of adding file watchers to that folder we symlink it into our
// working diretory (.tmp).
//
// More information
// - https://github.com/gruntjs/grunt-contrib-symlink
//
// @author Eric Clifford
//
var nconf = require('nconf');

module.exports = {
  options: {
    force: true,
    overwrite: true
  },
  expanded: {
    files: [
      {
        expand: true,
        cwd: "" + (nconf.get('app:basePath')) + "/vendor/bower_components",
        src: ['*'],
        dest: "" + (nconf.get('app:tempDir')) + "/vendor/bower_components"
      }
    ]
  }
};
