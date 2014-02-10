module.exports = function() { 
  var gulp = require('gulp');
  var nconf = require('nconf');
  var gutil = require('gulp-util');
  var jade = require('gulp-jade');
  var watch = require('gulp-watch');

  gulp.task('jade', ['clean'], function() {
    gulp.src(nconf.get('jade').paths, {cwd: './app', base: './app'})
      .pipe(watch())
      .pipe(jade()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      // .pipe(plugins.if(nconf.get('server').livereload, plugins.livereload()));
  });

  gulp.task('jade-build', function() {
    gulp.src(nconf.get('jade').paths, {cwd: './app', base: './app'})
      .pipe(jade()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}
