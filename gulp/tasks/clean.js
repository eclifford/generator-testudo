module.exports = function() { 
  var gulp = require('gulp');
  var nconf = require('nconf');
  var clean = require('gulp-rimraf');

  gulp.task('clean', function() {
    gulp.src(nconf.get('app').buildDir, {read: false})
      .pipe(clean({force: true}));
  });
}
