var gulp = require("gulp");
var glob = require("glob");

require('./app/common/manager.js')();

// Load all the custom task files
var files = glob.sync("./gulp/tasks/*.js").forEach(function(file) {
  require(file)();
});

gulp.task('default', ['clean'], function() {
  gulp.start('coffee', 'sass');
});

gulp.task('build', function() {
  gulp.start('requirejs');
});

gulp.task('test:acceptance', ['connect', 'selenium-launcher', 'cucumber']);

