(function(){
  "use strict";

  angular.module('angularApp'). // Nombre App
  component('saludoUsuario', {  // Nombre componente es para usarlo <saludo-usuario></saludo-usuario>
    template: 'Hola, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'mundo';
    }
  });

} ())

