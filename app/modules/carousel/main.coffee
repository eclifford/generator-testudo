define [
  'jquery'
  'underscore'
  'backbone'
  'marionette'
  'modules/carousel/collections/photosCollection'
  'modules/carousel/views/carouselView'
  'inview'
], ($, _, Backbone, Marionette, PhotosCollection, CarouselView) ->
  class CarouselModule extends Bronson.Module
    constructor: (data) ->
      @data = data

    onLoad: ->
      App = new Marionette.Application()
      @photos = new PhotosCollection()

      @carouselView = new CarouselView
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
          $('#carousel').one 'inview', =>
            @start()
        

    onStart: ->
      @carouselView.render()

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
