
var app = angular.module('angularApp',['ngRoute','ngSanitize']);

  /**
   * Constantes
   */

  app.constant("serviciosConstantes", {
                                          "titulo": "Angular Js",
                                          "version": "1.0",
                                          "autor": "Jose Luis del Hierro",
                                          "email": "jlhm2077@gmail.com",
                                          "github": "https://github.com/JLJava19/AngularJS"

                                        });

  
  app.service("cancionProvider", CancionProvider);

  app.service("pokemonProvider", PokemonProvider);

  /**
   * Ejemplo sercicio de una clase
   * 
   */

  app.value("tamanyoInicialRectangulo",{
    ancho:2,
    alto:3
  });

    //app.value("rectangulo",new Rectangulo('tamanyoInicialRectangulo'));

  // Definir un servicio
  app.service("rectanguloService",['tamanyoInicialRectangulo', Rectangulo]);

/*
  $scope.formData;

  $scope.guardarDatos=function(validacion){

    if( validacion ){
      console.debug('validado');
    }else{
      console.warn('NO validado');
    }

  }

*/


