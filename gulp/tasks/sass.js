module.exports = function(gulp, plugins) { 
  var nconf = require('nconf');
  var gutil = require('gulp-util');

  gulp.task('sass', function() {
    gulp.src(nconf.get('sass').paths, {cwd: './app', base: './app'})
      .pipe(plugins.watch())
      .pipe(plugins.sass()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      .pipe(plugins.if(nconf.get('server').livereload, plugins.livereload()));
  });

  gulp.task('sass-build', function() {
    gulp.src(nconf.get('sass').paths, {cwd: './app', base: './app'})
      .pipe(plugins.sass()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}
