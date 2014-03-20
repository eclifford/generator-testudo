module.exports = function() { 
  var gulp = require('gulp');
  var nconf = require('nconf');
  var gutil = require('gulp-util');
  var coffee = require('gulp-coffee');
  var watch = require('gulp-watch');
  var gulpif = require('gulp-if');
  var coffeelint = require('gulp-coffeelint');
  var livereload = require('gulp-livereload');

  gulp.task('coffee', function() {
    gulp.src(nconf.get('coffee').paths, {cwd: './app', base: './app'})
      .pipe(watch({glob: './app/modules/**/*.coffee'}))
      // .pipe(gulpif(nconf.get('coffee').linting, coffeelint()))
      // .pipe(gulpif(nconf.get('coffee').linting, coffeelint.reporter()))
      .pipe(coffee()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      // .pipe(gulpif(nconf.get('server').livereload, livereload()));
  });

  gulp.task('coffee-build', function() {
    gulp.src(nconf.get('coffee').paths, {cwd: './app', base: './app'})
      .pipe(coffee()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}

