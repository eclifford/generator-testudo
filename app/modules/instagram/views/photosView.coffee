define [
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/views/photoView'
], (_, Backbone, Marionette, PhotoView) ->
  class PhotosView extends Marionette.CollectionView
    itemView: PhotoView
