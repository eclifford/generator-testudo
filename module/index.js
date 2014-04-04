'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the module subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.createFiles = function() {
  var moduleName = this._.classify(this.name);
  this.mkdir('app/modules/' + moduleName);

  if(this.config.get('coffee')) {
    this.copy('module.coffee', 'app/modules/' + moduleName + '/main.coffee');
  } else {
    this.copy('module.js', 'app/modules/' + moduleName + '/main.js');
  }

  if(this.config.get('stylus')) {
    this.copy('module.styl', 'app/modules/' + moduleName + '/main.styl');
  } else {
    this.copy('module.scss', 'app/modules/' + moduleName + '/main.scss');
  }
};
