define [
  'jquery'
  'bronson'
  'vendor/bower_components/gmaps/gmaps'
], ($, Bronson) ->
  class Gmaps extends Bronson.Module
    constructor: (data) ->
      @data = data

    onLoad: ->
      map = new GMaps
        div: '#maps'
        lat: -12.043333
        lng: -77.028333

    onStart: ->

    onStop: ->

    onUnload: ->
