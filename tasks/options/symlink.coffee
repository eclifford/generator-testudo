#
# grunt-contrib-symlink
# https://github.com/gruntjs/grunt-contrib-symlink
#
# @author Eric Clifford
#
module.exports = 
  expanded: 
    files: [
      expand: true
      cwd: 'app/vendor/bower_components'
      src: ['*']
      dest: '.tmp/vendor/bower_components'
    ]
