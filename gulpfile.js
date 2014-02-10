var gulp = require("gulp");
var glob = require("glob");
var plugins = require("gulp-load-plugins")();

require('./app/common/manager.js')();

// Load all the custom task files
var files = glob.sync("./gulp/tasks/*.js").forEach(function(file) {
  require(file)(gulp, plugins);
});

gulp.task('default', ['clean'], function() {
  gulp.start('coffee', 'sass', 'jade', 'connect'); 
});

// gulp.task('watch', function() {
  // gulp.watch('app/modules/**/*.coffee', ['coffee-build']);
// });

gulp.task('build', function() {
  gulp.start('requirejs');
});

gulp.task('test:acceptance', ['connect', 'selenium-launcher', 'cucumber']);

