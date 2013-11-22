define [
  'marionette'
  'tpl!modules/instagram/templates/photoTemplate.html'
], (Marionette, PhotoTemplate) ->
  class PhotoView extends Marionette.ItemView
    template: PhotoTemplate
