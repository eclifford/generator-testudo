'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var TestudoGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Welcome to Testudo'));

    var prompts = [{
      name: 'appName',
      message: 'What is the name of your app?'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  app: function () {
    this.directory('app', 'app');
    this.directory('config', 'config');
    this.directory('grunt', 'grunt');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('.htaccess', '.htaccess');
    this.copy('gitignore', '.gitignore');
    this.copy('.coffeelint.json', '.coffeelint.json');
    this.copy('.bowerrc', '.bowerrc');
    this.copy('robots.txt', 'robots.txt');
    this.copy('Gruntfile.coffee', 'Gruntfile.coffee');
  },

  projectfiles: function () {
    // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = TestudoGenerator
