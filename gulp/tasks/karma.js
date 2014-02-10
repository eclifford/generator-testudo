module.exports = function() { 
  var gulp = require('gulp');
  var karma = require('gulp-karma');

  gulp.task('test', function() {
    return gulp.src('./blahblah')
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
    }));
  });
}
