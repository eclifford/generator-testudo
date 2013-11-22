define [
  'marionette'
  'text!modules/instagram/templates/photoTemplate.html'
], (Marionette, PhotoTemplate) ->
  class PhotoView extends Marionette.ItemView
    template: _.template(PhotoTemplate)

    onRender: ->
      console.log @model
