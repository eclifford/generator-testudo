#
# Sample Module
#
define [
  'jquery'
  'bronson'
], ($, Bronson) ->
  class Sample extends Bronson.Module

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
      Bronson.unsubscribe 'sample'

    #
    # stop all notifications and unrender the module
    #
    onUnload: ->
