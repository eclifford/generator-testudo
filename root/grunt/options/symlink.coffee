#
# grunt-contrib-symlink
# https://github.com/gruntjs/grunt-contrib-symlink
#
module.exports =
  options:
    force: true
    overwrite: true

  expanded:
    files: [
      expand: true
      cwd: "#{process.env.GRUNT_BASE_PATH}/vendor/bower_components"
      src: ['*']
      dest: "#{process.env.GRUNT_TEMP_PATH}/vendor/bower_components"
    ]
