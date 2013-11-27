define [
  'jquery'
  'bronson'
  'vendor/bower_components/gmaps/gmaps'
], ($, Bronson) ->
  class Gmaps extends Bronson.Module
    constructor: (data) ->
      @data = data

    onLoad: ->
      GMaps.geolocate
        success: (position) =>
          @position = position
          @start()
         
    onStart: ->
      map = new GMaps
        div: '#maps'
        lat: @position.coords.latitude
        lng: @position.coords.longitude
        zoom: 13
        scrollwheel: false

      Bronson.publish 'map:geoupdate',
        lat: @position.coords.latitude
        lng: @position.coords.longitude

      GMaps.on 'click', map.map, (e) ->
        lat = e.latLng.lat()
        lng = e.latLng.lng()

        Bronson.publish 'map:geoupdate',
          lat: lat
          lng: lng

      Bronson.subscribe 'map:instagram:markers', (data) =>
        map.removeMarkers()
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
        map.addMarkers markers

      Bronson.subscribe 'map:instagram:selectmarker', (data) =>
        # map.setZoom 17

        # map.addMarker
        #   lat: data.photo.get('location').latitude
        #   lng: data.photo.get('location').longitude
        #   details:
        #     id: data.photo.get('id')
        #   title: 'Marker Test'
        #   infoWindow:
        #     content:
        #       "<img src='#{data.photo.get('images').low_resolution.url}' width='120px' />"
        #   click: (e) ->
        #     Bronson.publish 'map:markerselected',
        #       id: e.details.id
        map.setCenter data.photo.get('location').latitude,
          data.photo.get('location').longitude
    onStop: ->

    onUnload: ->
