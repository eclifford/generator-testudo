module.exports = function(gulp, plugins) { 
  var nconf = require('nconf');
  var gutil = require('gulp-util');

  gulp.task('jade', function() {
    gulp.src(nconf.get('jade').paths, {cwd: './app', base: './app'})
      .pipe(plugins.watch())
      .pipe(plugins.jade()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir));
  });
}
