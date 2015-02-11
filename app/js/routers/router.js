var Backbone      = require('backbone'),
    React = require('react'),
    view = require('../views/procedListView.jsx');
    ProcedModel = require('../models/procedimientos');
    Procedimientos = require('../collections/procedimientos'),
    $             = require('jquery');

module.exports = Backbone.Router.extend({
  routes: {
    "": "index",
    "cursos": "showCursos",
    "procedimientos": "shosProced",
    "aspirantes/nuevo": "nuevoAspirante",
    "album/:name": "album"
  },

  initialize: function () {

    this.$contenedor = $(".main")
   
    Backbone.history.start();
  },

  index: function () {
    
    console.log('index')
  },
  shosProced: function(){
    var procedimiento = new ProcedModel({
      nombre: "procedimiento 1"
    });

    var procedimientos = new Procedimientos();
    procedimientos.add([
      {nombre: "Procedimiento 1"},
      {nombre: "Procedimiento 2"}
    ]);
    // console.log(procedimientos)
    // var that = this;

    //  var Procedimientos = Proced();
    //   React.renderComponent(
    //     <CardComponeProcedimientosnt profile={procedimiento} />,
    //     that.$contenedor
    //   );

    var View = view; 
    console.log($('.ul-lista')) 
    React.renderComponent(<View procedimientos={procedimientos} />, $('.ul-lista')[0]);

  }

  
});