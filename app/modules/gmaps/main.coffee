define [
  'jquery'
  'bronson'
  'vendor/bower_components/gmaps/gmaps'
], ($, Bronson) ->
  class Gmaps extends Bronson.Module
    constructor: (data) ->
      @data = data

    onLoad: ->
      @map = new GMaps
        div: '#maps'
        lat: -12.043333
        lng: -77.028333

      GMaps.geolocate
        success: (position) =>
          @map.setCenter position.coords.latitude, position.coords.longitude

      GMaps.on 'click', @map.map, (e) ->
        lat = e.latLng.lat()
        lng = e.latLng.lng()

        Bronson.publish 'map:geoupdate',
          lat: lat
          lng: lng

      Bronson.subscribe 'map:instagram:addmarker', (data) =>
        @map.addMarker
          lat: data.lat
          lng: data.lng
          title: 'Marker Test'
        @map.setCenter data.lat, data.lng

      @map.setOptions
        scrollwheel: false

    onStart: ->

    onStop: ->

    onUnload: ->
