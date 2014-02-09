module.exports = function(gulp, plugins) { 
  gulp.task('test', function() {
    return gulp.src('./blahblah')
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
    }));
  });
}
