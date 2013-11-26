define [
  'jquery'
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/collections/photosCollection'
  'modules/instagram/views/photosView'
  'inview'
], ($, _, Backbone, Marionette, PhotosCollection, PhotosView) ->
  class InstagramModule extends Bronson.Module
    constructor: (data) ->
      @data = data

    onLoad: ->
      App = new Marionette.Application()
      @photos = new PhotosCollection()

      @photosGridView = new PhotosView
        el: @data.el
        collection: @photos

      @photos.fetch
        data:
          client_id: "b3481714257943a4974e4e7ba99eb357"
          lat: "37.788086"
          lng: "-122.401111"
          count: 8
        silent: true
        success: =>
          $('#instagram').one 'inview', =>
            @start()
        

    onStart: ->
      @photosGridView.render()

      Bronson.subscribe 'instagram:map:geoupdate', (data) =>
        @photos.fetch
          data:
            client_id: "b3481714257943a4974e4e7ba99eb357"
            lat: data.lat
            lng: data.lng
            count: 8
          silent: false

    onStop: ->


    onUnload: ->
