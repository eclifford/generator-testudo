#
# grunt-contrib-copy
# https://github.com/gruntjs/grunt-contrib-copy
#
module.exports = 
  assets:
    expand: true
    dot: true
    cwd: process.env.GRUNT_BASE_PATH
    src: [
      '**/*'
      '!{vendor,_*}/**/*'
      '!**/*.{coffee,scss,sass,feature,md}'
    ]
    dest: process.env.GRUNT_TEMP_PATH
