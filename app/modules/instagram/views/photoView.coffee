define [
  'marionette'
  'text!modules/instagram/templates/photoTemplate.html'
], (Marionette, PhotoTemplate) ->
  class PhotoView extends Marionette.ItemView
    className: 'col-sm-3 col-xs-3 photo-item'
    template: _.template(PhotoTemplate)

    events:
      "click": "photoSelected"

    onRender: ->
      @$el.attr 'id', @model.get('id')

    photoSelected: (e) ->
      $('.photo-item').removeClass 'active'
      @$el.addClass 'active'
      Bronson.publish 'instagram:selectmarker',
        photo: @model
