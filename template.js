'use strict';

exports.description = "Create a Testudo template";
exports.notes = "";

exports.after = "after";

exports.warnOn = "*";

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt("name"),
    init.prompt("description"),
    init.prompt("version"),
    init.prompt("repository"),
    init.prompt("homepage"),
    init.prompt("bugs"),
    init.prompt("author_name"),
    init.prompt("demo"),
    init.prompt("licenses")
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

    done();

  });
};