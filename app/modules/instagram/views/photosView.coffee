define [
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/views/photoView'
], (_, Backbone, Marionette, PhotoView) ->
  class PhotosGridView extends Marionette.CollectionView
    itemView: PhotoView

    appendHtml: (collectionView, itemView, index) ->

      template = itemView.el.outerHTML
      console.log index, index % 4
      if (index % 4) is 0
        template = "<div class='row'>" + template
      else if (index % 4) is 3
        template = template + "</div>"

      console.log template

      collectionView.$el.append(template)


