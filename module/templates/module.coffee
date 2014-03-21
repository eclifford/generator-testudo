#
# <%= name %> Module
#
define [
  'jquery'
  'bronson'
], ($, Bronson) ->
  class <%= name %> extends Bronson.Module

    events: {}

    #
    # load the application
    #
    onLoad: (data) ->

    #
    # listen for notifications and prepare view
    #
    onStart: ->

    #
    # stop subscribed notifications
    #
    onStop: ->
      Bronson.unsubscribe '<%= name %>'

    #
    # stop all notifications and unrender the module
    #
    onUnload: ->
