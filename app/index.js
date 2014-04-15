'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var TestudoGenerator = module.exports = function TestudoGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  this.coffee = options.coffee;
  this.pkg = require('../package.json');
};

util.inherits(TestudoGenerator, yeoman.generators.Base);

TestudoGenerator.prototype.init = function init() {
  this.on('end', function () {
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  });
};

TestudoGenerator.prototype.questions = function() {
  var done = this.async();

  // replace it with a short and sweet description of your generator
  this.log(chalk.magenta('Welcome to Testudo'));

  var prompts = [{
    name: 'appName',
    message: 'What is the name of your app?',
    default: 'myTestudoProject'
  },
  {
    type: 'confirm',
    name: 'coffeescript',
    message: 'Would you like to use CoffeeScript?',
    default: false
  },
  {
    type: 'list',
    name: 'preprocessor',
    message: 'Choose your CSS preprocessor',
    choices: [{
      name: 'Stylus',
      value: 'includeStylus',
      checked: true
    },
    {
      name: 'SASS',
      value: 'includeSASS',
      checked: false
    }]
  }];

  this.prompt(prompts, function (answers) {
    var features = answers.preprocessor;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }

    this.appName = answers.appName;
    this.coffee = answers.coffeescript;
    this.includeStylus = hasFeature('includeStylus');
    this.includeSASS = hasFeature('includeSASS');

    this.config.set('stylus', this.includeStylus);
    this.config.set('sass', this.includeSASS);
    this.config.set('coffee', this.coffee);

    done();
  }.bind(this));
};

TestudoGenerator.prototype.app = function() {
  this.mkdir('app');
  this.directory('app/assets');
  this.directory('app/modules');
  this.mkdir('app/views');
  this.mkdir('test');
  this.directory('app/vendor', 'app/vendor');
  this.directory('grunt', 'grunt');
  this.directory('config', 'config');

  this.template('grunt/options/concurrent.js', 'grunt/options/concurrent.js');
  this.template('grunt/options/watch.js', 'grunt/options/watch.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('.htaccess', '.htaccess');
  this.copy('gitignore', '.gitignore');
  this.copy('.bowerrc', '.bowerrc');
  this.copy('robots.txt', 'robot.txt');
};
  
TestudoGenerator.prototype.documentation = function() {
  this.copy('app/assets/README.md', 'app/assets/README.md');
  this.copy('app/modules/README.md', 'app/modules/README.md');
  this.copy('app/views/README.md', 'app/views/README.md');
};

TestudoGenerator.prototype.markup = function() {
  this.copy('app/index.jade', 'app/index.jade');
  this.copy('app/views/_partials/menu.jade', 'app/views/_partials/menu.jade');
};

TestudoGenerator.prototype.stylesheets = function() {
  if(this.includeStylus) {
    this.copy('app/main.styl', 'app/main.styl');
  } else if(this.includeSASS) {
    this.copy('app/main.scss', 'app/main.scss');
    this.copy('_Gemfile', 'Gemfile');
  }
};

TestudoGenerator.prototype.scripts = function() {
  if(this.coffee) {
    this.copy('app/main.coffee', 'app/main.coffee');
    this.copy('.coffeelint', '.coffeelint');
  } else {
    this.copy('app/main.js', 'app/main.js');
    this.copy('.jshintrc', '.jshintrc');
  }
  this.copy('app/config.js', 'app/config.js');
  this.copy('Gruntfile.js', 'Gruntfile.js');
};

TestudoGenerator.prototype.tests = function() {
  if(this.coffee) {
    this.copy('test/acceptance/support/world.coffee', 'test/acceptance/support/world.coffee');
    this.copy('test/unit/runner.coffee', 'test/unit/runner.coffee');
  } else {
    this.copy('test/acceptance/support/world.js', 'test/acceptance/support/world.js');
    this.copy('test/unit/runner.js', 'test/unit/runner.js');
  }
  this.directory('test/unit/specs/todos');
  this.directory('test/acceptance/step_definitions/todos');
  this.copy('test/acceptance/features/todos.feature', 'test/acceptance/features/todos.feature');
};

TestudoGenerator.prototype.module = function() {
  // this.invoke("testudo:module", {args: ["Sample"]});
};
