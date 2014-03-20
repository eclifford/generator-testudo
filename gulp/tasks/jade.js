module.exports = function() { 
  var gulp = require('gulp');
  var nconf = require('nconf');
  var gutil = require('gulp-util');
  var jade = require('gulp-jade');
  var watch = require('gulp-watch');
  var gulpif = require('gulp-if');
  var livereload = require('gulp-livereload');

  gulp.task('jade', function() {
    gulp.src(nconf.get('jade').paths, {cwd: './app', base: './app'})
      .pipe(watch())
      .pipe(jade()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      .pipe(gulpif(nconf.get('server').livereload, livereload()));
  });

  gulp.task('jade-build', function() {
    gulp.src(nconf.get('jade').paths, {cwd: './app', base: './app'})
      .pipe(jade()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}
