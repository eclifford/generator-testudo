//
// Copy Task
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
  assets: {
    expand: true,
    dot: true,
    cwd: nconf.get('app').basePath,
    src: ['**/*', '!{vendor,_*}/**/*', '!**/*.{coffee,scss,sass,feature,md}'],
    dest: nconf.get('app').tempDir
  }
};
