module.exports = function() { 
  var gulp = require('gulp');
  var nconf = require('nconf');
  var requirejs = require('requirejs');
  var glob = require('glob');

  gulp.task('requirejs', ['coffee-build', 'sass-build', 'jade-build', 'copy'], function(cb) { 
    glob("app/modules/**/main.coffee", function(er, files) {
      var modules = [];
      modules = files.map(function(file) {
        return file.replace('.coffee', '').replace('app/', '')
      });
      requirejs.optimize({
        baseUrl: './build',
        dir: './dist',
        skipDirOptimize: true,
        mainConfigFile: './build/common.js',
        paths: {
          'vendor': '../app/vendor' 
        },
        modules: [
          {
            name: 'main',
            include: modules 
          }
        ]
      }, function() {
        cb();
      }, function(err) {
        cb(err);
      });
    });
  });
}
