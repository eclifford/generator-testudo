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
      photos = new PhotosCollection()

      photosView = new PhotosView
        collection: photos

      photos.fetch
        data:
          client_id: "b3481714257943a4974e4e7ba99eb357"
          lat: "37.788086"
          lng: "-122.401111"
        silent: true
        success: =>
          console.log 'done'
          $('#photos').append photosView.render().el

      console.log(photos)
   
        
    onStart: ->
   

    onStop: ->
     

    onUnload: ->
