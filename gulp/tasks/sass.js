module.exports = function() { 
  var gulp = require('gulp');
  var plumber = require('gulp-plumber');
  var watch = require('gulp-watch');
  var sass = require('gulp-sass');
  var nconf = require('nconf');
  var gutil = require('gulp-util');
  var gulpif = require('gulp-if');
  var livereload = require('gulp-livereload');

  gulp.task('sass', function() {
    gulp.src(nconf.get('sass').paths, {cwd: './app', base: './app'})
      .pipe(plumber())
      .pipe(watch())
      .pipe(sass()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      .pipe(gulpif(nconf.get('server').livereload, livereload()));
  });

  gulp.task('sass-build', function() {
    gulp.src(nconf.get('sass').paths, {cwd: './app', base: './app'})
      .pipe(sass()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}
