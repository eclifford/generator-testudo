module.exports = function() { 
  var gulp = require('gulp');
  var child_process = require('child_process');

  gulp.task('cucumber', ['selenium-launcher'], function() {
    var args = [
        './node_modules/.bin/cucumber.js',
        'app/tests/acceptance/features',
        '-r',
        'app/tests/acceptance/step_definitions',
        '-f',
        'pretty'];
    // selenium is running
    cucumber = child_process.spawn('node', args)
        .on('exit', function() {
          console.log('exited');
        });
    cucumber.stdout.on('data', function(d) {
      console.log(String(d));
    });
    cucumber.stderr.on('data', function(d) {
      console.log(String(d));
    });
  });
}
