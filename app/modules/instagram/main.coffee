define [
  'jquery'
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/collections/photosCollection'
  'modules/instagram/views/photosView'
  'plugins/jquery.inview'
], ($, _, Backbone, Marionette, PhotosCollection, PhotosView) ->
  class InstagramModule extends Bronson.Module
    constructor: (data) ->
      console.log 'instagram', data
      @data = data

    onLoad: ->
      App = new Marionette.Application()
      @photos = new PhotosCollection()

      @photosGridView = new PhotosView
        el: @data.el
        collection: @photos

      $('.glyphicon-stop').click =>
        @stop()

      $('.glyphicon-play').click =>
        @start()

      Bronson.subscribe 'instagram:map:geoupdate', (data) =>
        @photos.fetch
          data:
            client_id: "b3481714257943a4974e4e7ba99eb357"
            lat: data.lat
            lng: data.lng
            count: 12
          reset: true
          success: =>
            $(@data.el).one 'inview', =>
              @photosGridView.render()

    onStop: ->
      Bronson.unsubscribe 'instagram'

    onUnload: ->
