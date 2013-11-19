#
# grunt-contrib-copy
# https://github.com/gruntjs/grunt-contrib-copy
#
# @author Eric Clifford
#
module.exports = 
  dist: 
    files: [
      expand: true
      dot: true
      cwd: '<%= options.basePath %>'
      dest: '<%= options.buildDir %>'
      src: [
        '*.{ico,png,txt,html}'
        '.htaccess'
        'images/{,*/}*.{webp,gif}'
        'styles/fonts/{,*/}*.*'
      ]
    ]
    
  styles: 
    expand: true
    dot: true
    cwd: '<%= options.tempDir %>/styles'
    dest: '<%= options.buildDir %>/styles/'
    src: '{,*/}*.css'
