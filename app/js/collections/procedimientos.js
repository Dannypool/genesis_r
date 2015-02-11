var Backbone = require('backbone'),
    procedimiento     = require('../models/procedimientos');

module.exports = Backbone.Collection.extend({
  model: procedimiento
});