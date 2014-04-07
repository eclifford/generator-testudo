//
// Build Task
// 
// The build task constructs a production quality build and places 
// it into the configured distribution folder.
// 
// @author Eric Clifford
//
module.exports = function(grunt) {
  return grunt.registerTask('build', ['clean:dist', 'concurrent:dev', 'copy', 'requirejs']);
};
