module.exports = function(gulp, plugins) { 
  gulp.task('connect', plugins.connect.server({
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
