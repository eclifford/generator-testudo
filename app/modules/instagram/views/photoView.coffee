define [
  'marionette'
  'text!modules/instagram/templates/photoTemplate.html'
], (Marionette, PhotoTemplate) ->
  class PhotoView extends Marionette.ItemView
    className: 'col-md-3 photo-item'
    template: _.template(PhotoTemplate)

    events:
      "click": "photoSelected"

    photoSelected: ->
      Bronson.publish 'instagram:addmarker',
        lat: @model.get('location').latitude
        lng: @model.get('location').longitude
