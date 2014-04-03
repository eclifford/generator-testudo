//
// Server Task
// 
// Start a server without starting watchers or compiling
// 
// @author Eric Clifford
//
module.exports = function(grunt, target) {
  return grunt.registerTask("server", function(target) {
    if (target === "dist") {
      return grunt.task.run(["build", "connect:dist:keepalive"]);
    } else {
      return grunt.task.run(["clean:dev", "concurrent:dev", "includereplace", "connect:dev"]);
    }
  });
};
