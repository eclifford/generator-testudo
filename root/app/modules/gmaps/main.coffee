#
# Maps Module
#
# Sample Google maps module
#
define [
  'jquery'
  'bronson'
  'vendor/bower_components/gmaps/gmaps'
], ($, Bronson) ->
  class Gmaps extends Bronson.Module

    # Module subscriptions
    events:
      'instagram:update': 'update'
      'instagram:imageselected': 'centerMap'

    #
    # get current users geolocation and start the module
    #
    onLoad: (data) ->
      # Bronson.publish 'map:geoupdate',
      #   lat: 50.455755
      #   lng: 30.511565

      # @position = position
      @start()



      # GMaps.geolocate
      #   success: (position) =>
      #     # notify subscribers of geo position
      #     Bronson.publish 'map:geoupdate',
      #       lat: position.coords.latitude
      #       lng: position.coords.longitude

      #     @position = position
      #     @start()

    #
    # render the map and wire up events
    #
    onStart: ->
      # create a new instance of gmaps
      @map = new GMaps
        div: '#maps'
        lat: 37.7749295
        lng: -122.4194155
        zoom: 13
        scrollwheel: false
        click: (e) ->
          # notify subscribers of new click position
          Bronson.publish 'map:geoupdate',
            lat: e.latLng.lat()
            lng: e.latLng.lng()
        dragend: (e) ->
          # notify subscribers of new dragged position
          Bronson.publish 'map:geoupdate',
            lat: e.center.ob
            lng: e.center.pb

    #
    # fired when module is stopped
    #
    onStop: ->

    #
    # unsubscribe all events and unrender view
    #
    onUnload: ->
      Bronson.unsubscribe 'map'

    #
    # center map on images
    #
    centerMap: (data) ->
      map.setCenter data.photo.get('location').latitude,
        data.photo.get('location').longitude

    #
    # update map with new markers
    #
    update: (data) ->
      @map.removeMarkers()
      markers = []
      data.markers.forEach (item) ->
        markers.push
          lat: item.get('location').latitude
          lng: item.get('location').longitude
          details:
            id: item.get('id')
          click: (e) ->
            Bronson.publish 'map:markerselected',
            id: e.details.id
      @map.addMarkers markers
