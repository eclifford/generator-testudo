#
# Sample Module
#
# @author Eric Clifford
#
define [
  'jquery'
  'bronson'
  'vendor/gmaps/gmaps'
], ($, Bronson) ->
  class Map extends Bronson.Module
    constructor: (data) ->
      this.data = data

    onLoad: ->

    onStart: ->
      map = new GMaps
        div: '#map'
        lat: -12.043333
        lng: -77.028333

      GMaps.geolocate
        success: (position) ->
          map.setCenter(position.coords.latitude, position.coords.longitude)

    onStop: ->

    onUnload: ->


