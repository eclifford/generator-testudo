define [
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/views/photoView'
], (_, Backbone, Marionette, PhotoView) ->
  class PhotosGridView extends Marionette.CollectionView
    itemView: PhotoView

    onRender: ->
      Bronson.subscribe 'instagram:map:markerselected', (data) ->
        console.log data.id
        $("##{data.id}").addClass('active')

      $children = @$el.find('.photo-item')
      i = 0
      l = $children.length

      while i < l
        $children.slice(i, i + 4).wrapAll "<div class='row'></div>"
        i += 4


