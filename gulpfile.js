var gulp = require("gulp");
var glob = require("glob");
var plugins = require("gulp-load-plugins")();

require('./app/common/manager.js')();

require('./gulp/tasks/clean')(gulp, plugins);
require('./gulp/tasks/coffee')(gulp, plugins);
require('./gulp/tasks/sass')(gulp, plugins);
require('./gulp/tasks/connect')(gulp, plugins);
require('./gulp/tasks/jade')(gulp, plugins);
require('./gulp/tasks/karma')(gulp, plugins);
require('./gulp/tasks/cucumber')(gulp, plugins);
require('./gulp/tasks/selenium-launcher')(gulp, plugins);

gulp.task('default', ['coffee', 'sass', 'jade', 'connect']);
gulp.task('test:acceptance', ['connect', 'selenium-launcher', 'cucumber']);
gulp.task('build', ['coffee']);
