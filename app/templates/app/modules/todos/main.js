/*global require*/
'use strict';

define([
  'jquery',
  'bronson',
  'backbone',
  'modules/todos/views/app',
  'modules/todos/routers/router'
], function($, Bronson, Backbone, AppView, Router) {
  var Todos = Bronson.Module.extend({
    events: {},

    onLoad: function (data) {
      new Router();

      Backbone.history.start();

      // Initialize the application view
      new AppView();
    },
    onStart: function() {
    },
    onStop: function() {
    },
    onUnload: function() {
    }
  });
  return Todos;
});
