define [
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/views/photoView'
], (_, Backbone, Marionette, PhotoView) ->
  class PhotosGridRowView extends Marionette.CollectionView
    itemView: PhotoView
    className: 'row'

    onBeforeRender: ->
      console.log 'model', @model
      @collection = new Backbone.Collection(_.toArray(@model.attributes))
