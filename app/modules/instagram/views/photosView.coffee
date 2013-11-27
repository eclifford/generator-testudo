define [
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/views/photoView'
], (_, Backbone, Marionette, PhotoView) ->
  class PhotosGridView extends Marionette.CollectionView
    itemView: PhotoView

    onRender: ->
      console.log 'render'
      Bronson.publish 'instagram:markers',
        markers: @collection

      Bronson.subscribe 'instagram:map:markerselected', (data) =>
        $('.photo-item', @$el).removeClass('active')
        $("##{data.id}").addClass('active')

      $children = @$el.find('.photo-item')
      i = 0
      l = $children.length

      while i < l
        $children.slice(i, i + 4).wrapAll "<div class='row'></div>"
        i += 4


