#
# grunt-contrib-sass
# https://github.com/gruntjs/grunt-contrib-sass
#
module.exports = 
  dev:
    options:
      require: ['sass-globbing']
    files: [
      expand: true
      cwd: process.env.GRUNT_BASE_PATH
      src: ["**/*.{scss,sass}", "!**/vendor/**/*.{scss,sass}"]
      dest: process.env.GRUNT_TEMP_PATH
      ext: ".css"
    ]
