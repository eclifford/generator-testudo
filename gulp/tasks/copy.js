module.exports = function() { 
  var gulp = require('gulp');
  
  gulp.task('copy', function() {
    gulp.src('./app/**/*.tmpl', {base: './app'})
      .pipe(gulp.dest('./build'))
  });
}
