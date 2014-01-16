#
# grunt-contrib-connect
# https://github.com/gruntjs/grunt-contrib-connect
#
module.exports = 
  options:
    port: process.env.SERVER_PORT
    livereload: Boolean(process.env.SERVER_LIVERELOAD_PORT)
    hostname: process.env_SERVER_HOSTNAME 

  dev:
    options:
      open: Boolean(process.env.SERVER_OPEN_ENABLED)
      base: [
        process.env.GRUNT_TEMP_PATH,
        process.env.GRUNT_BASE_PATH
      ]

  dist:
    options:
      open: Boolean(process.env.SERVER_OPEN_ENABLED)
      base: process.env.GRUNT_DIST_PATH
