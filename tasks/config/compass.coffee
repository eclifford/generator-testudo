#
# grunt-contrib-compass
# https://github.com/gruntjs/grunt-contrib-compass
#
# @author Eric Clifford
#
module.exports = 
  options: 
    sassDir: '<%= options.basePath %>'
    cssDir: '<%= options.tempDir %>'
    generatedImagesDir: '<%= options.tempDir %>/images/generated'
    imagesDir: '<%= options.basePath %>/images'
    javascriptsDir: '<%= options.basePath %>/scripts'
    fontsDir: '<%= options.basePath %>/styles/fonts'
    importPath: '<%= options.basePath %>'
    httpImagesPath: '/images'
    httpGeneratedImagesPath: '/images/generated'
    httpFontsPath: '/styles/fonts'
    relativeAssets: false
    assetCacheBuster: false

  dist: 
    options: 
      generatedImagesDir: '<%= options.buildDir %>'

  server: 
    options:
      debugInfo: true