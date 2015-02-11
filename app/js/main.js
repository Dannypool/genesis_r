// require('node-jsx').install({extension: '.jsx'});
var Backbone    = require('backbone'),
    Router      = require('./routers/router'),
    $           = require('jquery')
    Backbone.$  = $;

$(function () {
  Backbone.app = new Router();
});
// var React = require('react');

// var view = require('./views/view.jsx'); // need to specify the jsx extension
// React.renderComponent(view(), document.body);