module.exports = function() { 
  var gulp = require('gulp');
  var connect = require('gulp-connect');
  
  gulp.task('connect', connect.server({
    port: 1337,
    livereload: false,
    middleware: function(connect, options) {
      return [
        connect.static('./build'),
        connect.static('./app')
      ]
    }
  }));
}

