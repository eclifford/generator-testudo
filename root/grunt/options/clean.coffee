#
# grunt-contrib-clean
# https://github.com/gruntjs/grunt-contrib-clean
#
module.exports = 
  options:
    force: true # watch yourself there be dragons

  # prepare dist folder for clean build
  dist: [
    process.env.GRUNT_TEMP_PATH
    process.env.GRUNT_DIST_PATH
  ]

  # prepare dev folder for build
  dev: [
    process.env.GRUNT_TEMP_PATH
  ]
