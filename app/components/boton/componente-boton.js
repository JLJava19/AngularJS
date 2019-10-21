(function (){

    "use strict";
    
    angular.module('angularApp'). // Nombre App
    component('componenteBoton', {  // Nombre componente es para usarlo <componente-boton></componente-boton>
      //template: 'Hola, {{$ctrl.user}}!',
      templateUrl: './components/boton/template.html',
      controller: function BotonController() {
          console.trace('BotonController');
          var me = this;
          me.nombre = 'El nombre del boton';
          me.contador = 0;
  
          // funcion
          me.sumar = function(){
              console.trace('funcion sumar');
              me.contador++;  
          };
      } // BotonController
    }); // Fin componenteBoton

}());

