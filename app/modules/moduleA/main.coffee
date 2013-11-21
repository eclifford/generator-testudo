#
# Sample Module
#
# @author Eric Clifford
#
define [
  'jquery'
  'bronson'
], ($, Bronson, MainView) ->
  class ModuleA extends Bronson.Module
    constructor: (data) ->
      @data = data

    onLoad: ->
      $(@data.el).append(
        "<div class='panel panel-default'>
          <div class='panel-body'>
            ModuleA loaded
          </div>
        </div>"
      )

    onStart: ->
      $('.panel-body', @data.el).html('ModuleA started')

    onStop: ->
      $('.panel-body', @data.el).html('ModuleA stopped')

    onUnload: ->
      $('.panel-body', @data.el).empty()
