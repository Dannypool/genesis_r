var React = require('react');

var MyView = React.createClass({
  render: function(){
  	console.log(this)
    return (
    	<li className="li-lista">
			<p className="li-p">{this.props.procedimiento.get("nombre")}</p>
			<div className="ocultar pos-abajo pos-derecha">
			  <button className="btn btn-danger btn-xs btn-cancelar" id="btn_eliminar_usr">
			  <span className="glyphicon glyphicon-trash"> </span>
			  </button>
			  <button className="ladda-button btn btn-xs btn-cancelar" id="btn_modificar_usr" data-style="zoom-in" data-size="xs">
			  <span className="glyphicon glyphicon-edit"> </span>
			  </button>
			</div>
    	</li>
    );
  }
  
});
module.exports = MyView;