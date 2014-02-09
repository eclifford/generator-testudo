module.exports = function(gulp, plugins) { 
  var seleniumLauncher = require('selenium-launcher');

  gulp.task('selenium-launcher', function(cb) {
    seleniumLauncher(function(err, selenium) {
      process.env.SELENIUM_HUB = "http://localhost:" + selenium.port + "/wd/hub";
      cb(err);
    });
  });
}
