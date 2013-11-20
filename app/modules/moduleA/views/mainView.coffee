define [
  'jquery'
  'backbone'
  'text!modules/moduleA/templates/mainTemplate.html'
], ($, Backbone, Template) ->
  class MainView extends Backbone.View

    initialize: ->
      _.bindAll @, 'render'

    render: ->
      $(@el).html(_.template(Template))

