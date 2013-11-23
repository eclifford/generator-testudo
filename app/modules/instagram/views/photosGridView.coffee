define [
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/views/photosGridRowView'
], (_, Backbone, Marionette, PhotosGridRowView) ->
  class PhotosGridView extends Marionette.CollectionView
    itemView: PhotosGridRowView
    className: 'grid'

    onBeforeRender: ->
      console.log 'grid', @collection
      grid = @collection.groupBy (list, iterator) ->
        return Math.floor(iterator / 4)

      @collection = @collection(_.toArray(grid))

    onRender: ->
      console.log 'render called'

