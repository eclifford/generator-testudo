module.exports = function() { 
  var gulp = require('gulp');
  var nconf = require('nconf');
  var gutil = require('gulp-util');
  var coffee = require('gulp-coffee');
  var watch = require('gulp-watch');
  var gulpif = require('gulp-if');
  var coffeelint = require('gulp-coffeelint');

  gulp.task('coffee', function() {
    gulp.src(nconf.get('coffee').paths, {cwd: './app', base: './app'})
      .pipe(watch())
      .pipe(gulpif(nconf.get('coffee').linting, coffeelint()))
      .pipe(gulpif(nconf.get('coffee').linting, coffeelint.reporter()))
      .pipe(coffee()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      // .pipe(plugins.if(nconf.get('server').livereload, plugins.livereload()));
  });

  gulp.task('coffee-build', function() {
    gulp.src(nconf.get('coffee').paths, {cwd: './app', base: './app'})
      .pipe(coffee()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}

