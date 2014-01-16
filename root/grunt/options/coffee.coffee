#
# grunt-contrib-coffee
# https://github.com/gruntjs/grunt-contrib-coffee
#
module.exports =
  dev:
    expand: true
    cwd: process.env.GRUNT_BASE_PATH
    src: [
      "**/*.coffee"
      "!vendor/**/*.coffee"
    ]
    dest: process.env.GRUNT_TEMP_PATH
    ext: ".js"
