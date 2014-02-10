module.exports = function() { 
  var gulp = require('gulp');
  var plumber = require('gulp-plumber');
  var watch = require('gulp-watch');
  var sass = require('gulp-sass');
  var nconf = require('nconf');
  var gutil = require('gulp-util');

  gulp.task('sass', function() {
    gulp.src(nconf.get('sass').paths, {cwd: './app', base: './app'})
      .pipe(plumber())
      .pipe(watch())
      .pipe(sass()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      // .pipe(plugins.if(nconf.get('server').livereload, plugins.livereload()));
  });

  gulp.task('sass-build', function() {
    gulp.src(nconf.get('sass').paths, {cwd: './app', base: './app'})
      .pipe(sass()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}
