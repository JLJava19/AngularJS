angular.
module('angularApp'). // Nombre App
component('listadoTareas', { // Nombre componente es para usarlo <saludo-usuario></saludo-usuario>
    //template: 'Hola, {{$ctrl.user}}!',
    templateUrl: './components/lista-tareas/template.lista-tareas.html',
    controller: function ListadoTareasController($scope, $http) {

        console.trace('ListadoTareasController');

        /* *********************************************************************************************** */
        // propiedades
        /* *********************************************************************************************** */

        $scope.titulo = "Listado Tareas"
        $scope.mostrar = false;
        $scope.mensajeValidacion = "";
        $scope.descripcion = "";
        $scope.tareas = [];
        $scope.ENDPOINT = "http://localhost:3000/tareas/";

        /* *********************************************************************************************** */
        //eventos
        /* *********************************************************************************************** */

        this.$onInit = function(){

            console.trace('$onInit');
          
            $http({
                method: 'GET',
                url: $scope.ENDPOINT
              }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.trace('peticion GET %s data %o', $scope.ENDPOINT, response);
                    $scope.tareas=response.data;
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn('tenemos un ERROR response %o', response);

                });



        }

        /* *********************************************************************************************** */
        //funciones
        /* *********************************************************************************************** */


        $scope.crearTarea = function(){
            console.trace('click crearTarea ' +  $scope.descripcion);
            $scope.mensajeValidacion = "";

            let desc = $scope.descripcion.trim();
            if(desc.length < 3){
                $scope.mensajeValidacion = "Por favor, escribe una descripcion mas larga";
            }else{
                console.trace('llamada post');
                
                let datos = {
                    "completada": false,
                    "descripcion": desc
                };

                $http({
                    method: 'POST',
                    url: $scope.ENDPOINT,
                    data: datos
                  }).then(function successCallback(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        console.trace('peticion POST %s data %o', $scope.ENDPOINT, response);
                        $scope.tareas=response.data;
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.warn('tenemos un ERROR response %o', response);
    
                    });
    
            }
        } // crearTarea
        
        $scope.eliminarTarea = function(tarea){
            console.trace('eliminarTarea %o', tarea);

            $http({
                method: 'DELETE',
                url: $scope.ENDPOINT + tarea.id
              }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.trace('peticion POST %s data %o', $scope.ENDPOINT, response);
                    $scope.tareas=response.data;
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn('tenemos un ERROR response %o', response);

                });

        }   // eliminarTarea

        $scope.completarTarea = function(tarea){
            console.trace('eliminarTarea %o', tarea);

            tarea.completada = !tarea.completada;

            $http({
                method: 'PATCH',
                url: $scope.ENDPOINT + tarea.id,
                data: tarea
              }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.trace('peticion POST %s data %o', $scope.ENDPOINT, response);
                    $scope.tareas=response.data;
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn('tenemos un ERROR response %o', response);

                });

        }   // completarTarea

        $scope.editarTarea = function(tarea){
            console.trace('editarTarea %o', tarea);

            tarea.completada = !tarea.completada;

            $http({
                method: 'PATCH',
                url: $scope.ENDPOINT + tarea.id,
                data: tarea
              }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.trace('peticion POST %s data %o', $scope.ENDPOINT, response);
                    $scope.tareas=response.data;
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn('tenemos un ERROR response %o', response);

                });

        }   // editarTarea

    },
    bindings: {
        pmateria: '@', pnota: '@'
    }
});