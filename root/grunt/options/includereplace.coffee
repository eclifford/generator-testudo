#
# grunt-include-replace
# https://github.com/alanshaw/grunt-include-replace
#
module.exports =
  options:
    includesDir: "#{process.env.GRUNT_BASE_PATH}/pages/_partials"
  dev:
    expand: true
    cwd: process.env.GRUNT_BASE_PATH
    src: ['index.html', 'pages/**/*.html']
    dest: process.env.GRUNT_TEMP_PATH
