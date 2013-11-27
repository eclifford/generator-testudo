module.exports =
  dev:
    src: ['app/**/*.ejs', '!app/partials/**/*']
    dest: 'dist/'
    expand: true
    ext: '.html'
