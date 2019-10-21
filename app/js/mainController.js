

/**
 * Controlador principal
 */
app.controller('mainCtrl', ['$scope','$http', 'serviciosConstantes','pokemonProvider',
                           function($scope,$http, serviciosConstantes, pokemonProvider){

    this.$onInit = function(){
  
      $scope.constantes = serviciosConstantes;
      console.log('onInit mainCtrl');
      
      $scope.alerta = {
        "texto" : "Ongi Etorri",
        "clase" : "primary"
      };
  
      
      console.trace("pedimos a la API todos los pokemos");
      $scope.pokemons = {};
      pokemonProvider.listarPokemon().then( data => $scope.pokemons = data );
      
      // check para saber si esta el servicio rest levantado
      let url = 'http://localhost:3000/frutas';
      $http.get(url).then(function (result) {
          console.trace('servicio rest funcionando %o', result);
          $scope.alerta = {
            "texto" : "<strong>Yujuuuuu</strong> Esta funcionando Servicio Rest",
            "clase" : "success"
          };
  
  
      }).catch(function (response) {
          console.warn('servicio rest fallando %o', response);
          $scope.alerta = {
            "texto" : "<strong>Upssssss</strong> Servicio Rest parado",
            "clase" : "danger"
          };
      });
  
      
  
    }//onInit


  }]);