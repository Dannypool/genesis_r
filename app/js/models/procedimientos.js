var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	idAttribute: 'id',
	defaults: {
		id: null,
		nombre: null
	}
});