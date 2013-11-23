define [
  'jquery'
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/collections/photosCollection'
  'modules/instagram/views/photosView'
], ($, _, Backbone, Marionette, PhotosCollection, PhotosView) ->
  class InstagramModule extends Bronson.Module
    constructor: (data) ->
      # @data = data.el

    onLoad: ->
      App = new Marionette.Application()
      @photos = new PhotosCollection()

      @photosGridView = new PhotosView
        el: '#photos'
        collection: @photos

      @photos.fetch
        data:
          client_id: "b3481714257943a4974e4e7ba99eb357"
          lat: "37.788086"
          lng: "-122.401111"
        silent: true
        success: =>
          @photosGridView.render()

    onStart: ->

      Bronson.subscribe 'instagram:map:geoupdate', (data) =>
        console.log 'fetching', data
        @photos.fetch
          data:
            client_id: "b3481714257943a4974e4e7ba99eb357"
            lat: data.lat
            lng: data.lng
          silent: false
          success: =>
            # @photosGridView.render()



    onStop: ->


    onUnload: ->
