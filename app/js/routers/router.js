var Backbone      = require('backbone'),
    Cursos         = require('../collections/cursos'),
    CursosPanelView    = require('../views/cursoPanelView'),
    AspiranteGeneral    = require('../views/aspirantes/datosGeneralesView'),
    $             = require('jquery');

module.exports = Backbone.Router.extend({
  routes: {
    "": "index",
    "cursos": "showCursos",
    "aspirantes/nuevo": "nuevoAspirante",
    "album/:name": "album"
  },

  initialize: function () {
    
    this.$contenedor = $(".main")
    this.cursos = new Cursos();

    this.panelCursosView = new CursosPanelView({ collection: this.cursos });

    this.aspiranteGeneral = new AspiranteGeneral();

    Backbone.history.start();
  },

  index: function () {
    // this.fetchData();
    console.log('index')
  },
  nuevoAspirante: function () {
    this.$contenedor.empty();
    this.aspiranteGeneral.render();
  },
  showCursos: function () {
    console.log('hola')
    this.getCursos();
  	this.panelCursosView.render();
  },
  getCursos: function () {
    var data = [{
      id: 1,
      fechaInicio: '12/12/12',
      fechaTermina: '12/12/13',
      nombre: 'curso 1',
      descripcion: 'descripcion 1',
      status: 'inscripcion'
    },
    {
      id: 2,
      fechaInicio: '12/12/12',
      fechaTermina: '12/12/13',
      nombre: 'curso 2',
      descripcion: 'descripcion 2',
      status: 'inscripcion'
    }];
    this.cursos.reset(data);
  }

  
});