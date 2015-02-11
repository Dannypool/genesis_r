/** @jsx React.dom */
var React = require('react');

module.exports =return function(
	<p class="li-p">{this.props.procedimiento.get("nombre")}</p>
	<small>Hola</small>
	<div class="ocultar pos-abajo pos-derecha">
		<button class="btn btn-danger btn-xs btn-cancelar" id="btn_eliminar_usr">
		<span class="glyphicon glyphicon-trash"> </span>
		</button>
		<button class="ladda-button btn btn-xs btn-cancelar" id="btn_modificar_usr" data-style="zoom-in" data-size="xs">
		<span class="glyphicon glyphicon-edit"> </span>
		</button>
	</div>
	);