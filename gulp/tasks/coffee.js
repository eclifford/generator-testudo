module.exports = function(gulp, plugins) { 
  var nconf = require('nconf');
  var gutil = require('gulp-util');

  gulp.task('coffee', function() {
    gulp.src(nconf.get('coffee').paths, {cwd: './app', base: './app'})
      .pipe(plugins.plumber())
      .pipe(plugins.watch())
      .pipe(plugins.if(nconf.get('coffee').linting, plugins.coffeelint()))
      .pipe(plugins.if(nconf.get('coffee').linting, plugins.coffeelint.reporter()))
      .pipe(plugins.coffee()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
      .pipe(plugins.if(nconf.get('server').livereload, plugins.livereload()));
  });

  gulp.task('coffee-build', function() {
    gulp.src(nconf.get('coffee').paths, {cwd: './app', base: './app'})
      .pipe(plugins.coffee()).on('error', gutil.log)
      .pipe(gulp.dest(nconf.get('app').buildDir))
  });
}

