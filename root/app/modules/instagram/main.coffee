#
# Instagram Module
#
# Sample Bronson Instagram module
#
define [
  'jquery'
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/collections/photosCollection'
  'modules/instagram/views/photosView'
], ($, _, Backbone, Marionette, PhotosCollection, PhotosView) ->
  class InstagramModule extends Bronson.Module

    events:
      'instagram:stop': 'stop'
      'instagram:start': 'start'
      'map:geoupdate': 'update'

    #
    # load the application
    #
    onLoad: (data) ->
      @data = data
      App = new Marionette.Application()

    #
    # listen for notifications and prepare view
    #
    onStart: ->
      @photos = new PhotosCollection()

      @photosGridView = new PhotosView
        el: @data.el
        collection: @photos

    #
    # stop subscribed notifications
    #
    onStop: ->
      Bronson.unsubscribe 'instagram:map:geoupdate'

    #
    # stop all notifications and unrender the module
    #
    onUnload: ->

    #
    # on position change fetch new photos
    #
    update: (data) ->
      @photos.fetch
        data:
          client_id: "b3481714257943a4974e4e7ba99eb357"
          lat: data.lat
          lng: data.lng
          count: 12
        reset: true
        success: =>
          @photosGridView.render()
