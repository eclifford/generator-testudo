module.exports = function(gulp, plugins) { 
  var nconf = require('nconf');

  gulp.task('clean', function() {
    gulp.src(nconf.get('app').buildDir, {read: false})
      .pipe(plugins.clean());
  });
}
