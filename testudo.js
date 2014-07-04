#!/usr/bin/env node

var program = require('commander')
    , child_process = require('child_process')
    , package = require('../package.json');

program
  .version(package.version, '-v, --version')

program
  .command('module <cmd>')
  .description('scaffold a module')
  .action(function(cmd, options) {
    child_process.spawn('yo', ['testudo:module', cmd], { stdio: 'inherit'});
  });

program
  .command('*')
  .description('run grunt commands')
  .action(function(env, options) {
    child_process.spawn('grunt', [env], { stdio: 'inherit'});
  });

program.parse(process.argv);

if(program.args.length === 0) {
  child_process.spawn('grunt', ['default'], { stdio: 'inherit'});
}
