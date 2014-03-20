module.exports = function() { 
  var gulp    = require('gulp'),
      nconf   = require('nconf'),
      rimraf  = require('rimraf');

  gulp.task('clean', function(cb) {
    rimraf(nconf.get('app').buildDir, function() {
      cb();
    });
  });;
}
