var React = require('react');
var _ = require('underscore');
var view = require('../views/view.jsx');

var MyView = React.createClass({
  	render: function() {
  		var View = view; 
  		console.log(this.props.procedimientos)
        var listElements = this.props.procedimientos.map(function(procedimiento) {
        	console.log(procedimiento)
            return (<View procedimiento={procedimiento} />);
        });
        return (
            <ul className="ul-lista">
                { listElements }
            </ul>
        );
    }
  
});
module.exports = MyView;