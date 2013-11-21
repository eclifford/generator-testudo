define [
  'marionette'
  'text!modules/instagram/templates/photoTemplate.tmpl'
], (Marionette, PhotoTemplate) ->
  class PhotoView extends Marionette.ItemView
    template: PhotoTemplate

    onRender: ->
      console.log @model
