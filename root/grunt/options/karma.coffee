#
# grunt-contrib-requirejs
# https://github.com/gruntjs/grunt-contrib-requirejs
#
module.exports =
  options:
    files: [
      "#{process.env.GRUNT_TEMP_PATH}/common.js"
      "#{process.env.GRUNT_TEMP_PATH}/tests/unit/runner.js"
      {pattern: "#{process.env.GRUNT_TEMP_PATH}/**/*.{js,tmpl,json,html}", included: false}
    ]
    exclude: [
      "#{process.env.GRUNT_TEMP_PATH}/vendor/**/*"
    ]

    frameworks: [
      'requirejs'
      'mocha'
      'chai-jquery'
      'sinon-chai'
    ]

    reporters: [
      'progress'
      # 'coverage'
    ]

    # preprocessors:
    #   '<%= grunt.settings.paths.tempDir %>/scripts/**/*.js': ['coverage']

    coverageReporter:
      type: 'html'
      dir: "#{process.env.GRUNT_TEMP_PATH}/tests/coverage/"

    port: 9999

  unit:
    autoWatch: true
    browsers: [process.env.TESTING_UNIT_BROWSERS]

  single:
    browsers: process.env.TESTING_UNIT_BROWSERS
