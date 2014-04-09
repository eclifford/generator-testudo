//
// Default Task
// 
// The default 'grunt' task starts resets the working directory starts
// the watchers and connect server.
// 
// @author Eric Clifford
//
module.exports = function(grunt) {
  return grunt.registerTask('default', ['clean', 'concurrent:dev', 'connect:dev', 'karma:unit:start', 'watch']);
};
