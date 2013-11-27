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
          Bronson.publish 'map:geoupdate',
            lat: position.coords.latitude
            lng: position.coords.longitude

      GMaps.on 'click', @map.map, (e) ->
        lat = e.latLng.lat()
        lng = e.latLng.lng()

        Bronson.publish 'map:geoupdate',
          lat: lat
          lng: lng

      Bronson.subscribe 'map:instagram:addmarker', (data) =>
        @map.addMarker
          lat: data.photo.get('location').latitude
          lng: data.photo.get('location').longitude
          details:
            id: data.photo.get('id')
          title: 'Marker Test'
          infoWindow:
            content:
              "<img src='#{data.photo.get('images').low_resolution.url}' width='120px' />"
          click: (e) ->
            Bronson.publish 'map:markerselected',
              id: e.details.id
        @map.setCenter data.photo.get('location').latitude,
          data.photo.get('location').longitude

      @map.setOptions
        scrollwheel: false

    onStart: ->

    onStop: ->

    onUnload: ->
