#
# Sample Module
#
# @author Eric Clifford
#
define [
  'jquery'
  'bronson'
  'modules/moduleA/views/mainView'
], ($, Bronson, MainView) ->
  class ModuleA extends Bronson.Module
    constructor: (data) ->
      this.data = data

    onLoad: ->
      @view = new MainView()
      $(@data.el).append(@view.render())

    onStart: ->
      @view.$el.addClass('started')

    onStop: ->
      console.log('stop')

    onUnload: ->
      console.log('unload')

    add: (n1, n2) ->
      return n1 + n2




