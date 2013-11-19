#
# Sample Module
#
# @author Eric Clifford
#
define ['jquery', 'bronson'], ($, Bronson) ->
  class ModuleA extends Bronson.Module
    constructor: (data) ->
      this.data = data

    onLoad: ->
      console.log('load')
      $('h1').text("ModuleA Loaded")

    onStart: ->
      $("h1").text("ModuleA Started")

    onStop: ->
      console.log('stop')

    onUnload: ->
      console.log('unload')

    add: (n1, n2) ->
      return n1 + n2




