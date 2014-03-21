#
# Karma Task
# 
# The Karma task configures the Karma Runner for running unit tests.
#
# More information
# - https://github.com/karma-runner/karma
# - https://github.com/karma-runner/grunt-karma
# 
# @author Eric Clifford
#
nconf = require('nconf')

module.exports =
  options:
    files: [
      "#{nconf.get('app').tempDir}/common.js"
      "#{nconf.get('app').tempDir}/tests/unit/runner.js"
      {pattern: "#{nconf.get('app').tempDir}/**/*.{js,tmpl,json,html}", included: false}
    ]
    exclude: [
      "#{nconf.get('app').tempDir}/vendor/**/*"
    ]

    frameworks: [
      'requirejs'
      'chai-sinon'
      'chai-jquery'
      'chai'
      'mocha'
      'jquery-1.8.3'
    ]

    reporters: [
      'progress'
      # 'coverage'
    ]

    # preprocessors:
    #   '<%= grunt.settings.paths.tempDir %>/scripts/**/*.js': ['coverage']

    coverageReporter:
      type: 'html'
      dir: "#{nconf.get('app').tempDir}/tests/coverage/"

    port: 9999

  unit:
    autoWatch: true
    browsers: nconf.get('testing').unitBrowsers 

  single:
    browsers: nconf.get('testing').unitBrowsers
