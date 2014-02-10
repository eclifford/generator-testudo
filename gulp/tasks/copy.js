module.exports = function(gulp, plugins) { 
  gulp.task('copy', function() {
    gulp.src('./app/**/*.tmpl', {base: './app'})
      .pipe(gulp.dest('./build'))
  });
}
