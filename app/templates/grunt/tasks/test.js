//
// Test task
// 
// Test task with targets for starting unit or acceptance test
// 
// @author Eric Clifford
//
module.exports = function(grunt) {
  return grunt.registerTask('test', function(target) {
    if (target === 'unit') {
      return grunt.task.run(['karma:unit']);
    } else if (target === 'acceptance') {
      grunt.config(["connect", "dev", "options", "open"], false);
      return grunt.task.run(['selenium-launch', 'connect:dev', 'cukejs']);
    }
  });
};
