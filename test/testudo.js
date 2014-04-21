/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('testudo generators', function () {

  beforeEach(function(done) {
    // TODO: without timeout .yc-json throws ENOTEMPTY error as it's being created/deleted at same time
    setTimeout(function() {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }
        done();
      });
    }, 100);
  });

  describe("testudo:app", function() {
    var files = [
      'app/assets/',
      'app/modules/',
      'app/views/',
      'config/',
      'grunt/',
      'test/',
      '.bowerrc',
      'bower.json',
      'package.json',
      '.gitignore',
      'app/.htaccess',
      'app/robots.txt',
      'app/config.js',
      'app/index.jade'
    ];

    beforeEach(function () {
      this.webapp = helpers.createGenerator('testudo:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      this.webapp.options['skip-install'] = true;
    });

    it('the generator can be required without throwing', function () {
      // not testing the actual run of generators yet
      this.app = require('../app');
    });

    it('creates expected files in Coffee + SASS', function (done) {
      var expected = files.concat([
        'app/main.coffee',
        'app/main.scss',
        'Gemfile',
        '.coffeelint'
      ]);

      helpers.mockPrompt(this.webapp, {
        preprocessor: ['includeSASS'],
        coffeescript: true
      });

      this.webapp.run({}, function () {
        helpers.assertFiles(expected);
        done();
      });
    });

    it('creates expected files in JavaScript + SASS', function (done) {
      var expected = files.concat([
        'app/main.js',
        'app/main.scss',
        '.jshintrc'
      ]);

      helpers.mockPrompt(this.webapp, {
        preprocessor: ['includeSASS'],
        coffeescript: false
      });

      this.webapp.run({}, function () {
        helpers.assertFiles(expected);
        done();
      });
    });

    it('creates expected files in CoffeScript + Stylus', function (done) {
      var expected = files.concat([
        'app/main.coffee',
        'app/main.styl',
        '.coffeelint'
      ]);

      helpers.mockPrompt(this.webapp, {
        preprocessor: ['includeStylus'],
        coffeescript: true
      });

      this.webapp.run({}, function () {
        helpers.assertFiles(expected);
        done();
      });
    });

    it('creates expected files in JavaScript + Stylus', function (done) {
      var expected = files.concat([
        'app/main.js',
        'app/main.styl',
        '.jshintrc'
      ]);

      helpers.mockPrompt(this.webapp, {
        preprocessor: ['includeStylus'],
        coffeescript: false
      });

      this.webapp.run({}, function () {
        helpers.assertFiles(expected);
        done();
      });
    });

  });
  describe("testudo:module", function() {
    beforeEach(function() {
      this.module = helpers.createGenerator('testudo:module', ['../../module'], ['foo']);
    });

    it("should generate module in CoffeeScript and SASS", function(done) {
      this.module.config.set('coffee', true);
      this.module.config.set('sass', true);

      this.module.run({}, function() {
        helpers.assertFiles([
          'app/modules/Foo/main.coffee',
          'app/modules/Foo/main.scss'
        ]);
        done();
      });
    });

    it("should generate module in CoffeeScript and Stylus", function(done) {
      this.module.config.set('coffee', true);
      this.module.config.set('stylus', true);

      this.module.run({}, function() {
        helpers.assertFiles([
          'app/modules/Foo/main.coffee',
          'app/modules/Foo/main.styl'
        ]);
        done();
      });
    });
    
    it("should generate module in JavaScript and SASS", function(done) {
      this.module.config.set('coffee', false);
      this.module.config.set('sass', true);

      this.module.run({}, function() {
        helpers.assertFiles([
          'app/modules/Foo/main.js',
          'app/modules/Foo/main.scss'
        ]);
        done();
      });
    });

    it("should generate module in JavaScript and Stylus", function(done) {
      this.module.config.set('coffee', false);
      this.module.config.set('stylus', true);

      this.module.run({}, function() {
        helpers.assertFiles([
          'app/modules/Foo/main.js',
          'app/modules/Foo/main.styl'
        ]);
        done();
      });
    });

  });
});
