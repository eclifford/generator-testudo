var gulp = require("gulp");
var glob = require("glob");
var runSequence = require('run-sequence');

// Load settings
require('./app/common/manager.js')();

// Load all the custom task files
var files = glob.sync("./gulp/tasks/*.js").forEach(function(file) {
  require(file)();
});

gulp.task('default', function(cb) {
  runSequence('clean', ['coffee', 'jade', 'sass', 'connect'], function() {
    cb();
  });
});

gulp.task('build', function(cb) {
  runSequence('clean', ['sass-build', 'jade-build', 'coffee-build', 'copy'], 'requirejs', function() {
    cb();
  });
});

// gulp.task('watch', function() {
  // gulp.watch('./app/modules/**/*.coffee', ['coffee']);
// });

gulp.task('test:acceptance', ['connect', 'selenium-launcher', 'cucumber']);

