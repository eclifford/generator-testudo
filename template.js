/*
 * testudo
 * https://github.com/ecliffords/testudo
 *
 */

'use strict';

// Description as it shows up in the available templates in `grunt-init`
exports.description = 'Create a Testudo project.';

// Optional project notes
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_ and _bower install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about the available grunt commands refer to documentation below. ' +
  '\n\n' +
  'https://github.com/eclifford/testudo';

exports.warnOn = "*";

exports.template = function(grunt, init, done) {

  // Helper to create a "yes/no" question.
  function yn(o) {
    o = grunt.util._.defaults({}, o, {
      default: true,
      warning: 'You must answer [y]es or [n]o.',
    });
    var defaultYes = o.default === true || String(o.default).toLowerCase() === 'y' || String(o.default)[0] === 'Y';
    o.default = defaultYes ? 'Y/n' : 'y/N';
    o.sanitize = function(value, data, done) {
      data[o.name] = defaultYes ? /y/i.test(value) : !/n/i.test(value);
      done();
    };
    return o;
  }

  init.process({}, [
    init.prompt("name", "testudo"),
    init.prompt("description", "the best testudo project ever."),
    init.prompt("version"),
    init.prompt("repository"),
    init.prompt("homepage"),
    init.prompt("author_name"),

    yn({
      'name': 'include_demo_files',
      'message': 'Do you want to include demo files? If yes then please accept all default library selections.',
      'default': true
    }),

    yn({
      'name': 'include_bronson',
      'message': 'Do you want to include BronsonJS?',
      'default': true
    }),

    yn({
      'name': 'include_backbone',
      'message': 'Do you want to include AMD Backbone and Underscore?',
      'default': true
    }),

    yn({
      'name': 'include_marionette',
      'message': 'Do you want to include AMD Marionette?',
      'default': true
    }),

    init.prompt("licenses", "MIT")
  ], function(err, props) {

    props.keywords = [];

    props.devDependencies = {
      "grunt": "~0.4.1",
      "grunt-contrib-copy": "~0.4.1",
      "grunt-contrib-connect": "~0.5.0",
      "grunt-contrib-clean": "~0.5.0",
      "grunt-contrib-requirejs": "~0.4.1",
      "grunt-contrib-watch": "~0.5.2",
      "grunt-contrib-coffee": "~0.7.0",
      "karma": "~0.10.4",
      "karma-script-launcher": "~0.1.0",
      "karma-chrome-launcher": "~0.1.0",
      "karma-firefox-launcher": "~0.1.0",
      "karma-html2js-preprocessor": "~0.1.0",
      "karma-requirejs": "~0.1.0",
      "karma-coffee-preprocessor": "~0.1.0",
      "karma-phantomjs-launcher": "~0.1.0",
      "karma-coverage": "~0.1.1",
      "karma-mocha": "~0.1.0",
      "grunt-env": "~0.4.0",
      "grunt-karma": "~0.6.2",
      "grunt-bower-requirejs": "~0.7.0",
      "grunt-concurrent": "~0.3.0",
      "load-grunt-tasks": "~0.1.0",
      "glob": "~3.2.6",
      "grunt-coffeelint": "0.0.7",
      "karma-sinon-chai": "~0.1.1",
      "karma-chai-jquery": "~0.1.0",
      "grunt-contrib-symlink": "~0.2.0",
      "grunt-contrib-sass": "~0.5.0",
      "grunt-include-replace": "~1.1.3"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);
    init.copyAndProcess(files, props);
    init.writePackageJSON('package.json', props);


    var bowerDevDependencies = {
      "jquery": "~1.10.2",
      "modernizr": "~2.6.2",
      "requirejs": "~2.1.9",
      "requirejs-tpl": "latest",
      "sass-bootstrap": "~3.0.0"
    };

    if (props.include_demo_files) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        'gmaps': '~0.4.8'
      });
    }

    if (props.include_bronson) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        'bronson': '~2.0.12'
      });
    }

    if (props.include_backbone) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        "backbone-amd": "~1.1.0",
        "underscore-amd": "~1.5.2"
      });
    }

    if (props.include_marionette) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        "marionette": "~1.2.3",
        "backbone.wreqr": "~0.2.0",
        "backbone.babysitter": "~0.0.6"
      });
    }

    init.writePackageJSON('bower.json', {
      name: props.name,
      version: '0.0.0',
      devDependencies: bowerDevDependencies
    });

    done();

  });
};