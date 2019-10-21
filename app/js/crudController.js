app.controller('crudController', ['$scope', '$http', 'cancionProvider',  function($scope, $http, cancionProvider){

    console.trace('crudController');  

    // variables del scope del controlador
    $scope.titulo = "ejercicio CRUD contra Servicio Rest en Java";
    $scope.canciones = [];
    $scope.infoError = "";

    // Eventos
    this.$onInit = function(){
        let promesa = cancionProvider.listar();
        //let promesa = cancionProvider.detalle("2");
        //let promesa = cancionProvider.crear({nombre:"cancion pepe"});
        /*
        let promesa = cancionProvider.modificar({
                                                    id:12,
                                                    nombre:"cancion pepe2"
                                                });
        */
        
       //let promesa = cancionProvider.eliminar("12");

        promesa.then(
            response=>{
                console.debug('Llamada Rest OK %o', response);
                $scope.canciones = response.data;
                
            },
            response=>{
                console.warn('Llamada Rest ERROR %o', response);
            }

        );

    };


    $scope.deshabilitarBoton = function(){

    };

    $scope.actualizar = function(prom){
        prom.then(
            response=>{
                console.debug('Llamada Rest OK %o', response);
                $scope.canciones = response.data;
                $scope.mostrarInformacion(response.data.info);
                $scope.nombre = "";
                let p = cancionProvider.listar();
                p.then(
                    response=>{
                        console.debug('Llamada Rest OK %o', response);
                        $scope.canciones = response.data.results;
                    },
                    response=>{
                        console.warn('Llamada Rest ERROR %o', response);
                        $scope.mostrarInformacion(response.data.info);
                    }
        
                );
            },
            response=>{
                console.warn('Llamada Rest ERROR %o', response);
                console.warn('Mensaje Rest ERROR %s', response.data.info);
                $scope.mostrarInformacion(response.data.info);
                
            }

        );
    }

    $scope.mostrarInformacion = function(datos){

        $scope.infoError = datos;
        
    }

    $scope.eliminarCancion = function (idCancion){
        let promesa = cancionProvider.eliminar(idCancion);
        $scope.actualizar(promesa);
    };

    $scope.insertarCancion = function (cancion){
        let promesa = cancionProvider.crear(cancion);
        $scope.actualizar(promesa);
    };

    $scope.modificarCancion = function(id, nombre){
        $scope.idModificar = id;
        $scope.nombreModificar = nombre;
    };

    $scope.modificarCancionRest = function(idModificar, nombreModificar){
        let promesa = cancionProvider.modificar(idModificar, nombreModificar);
        $scope.actualizar(promesa);
    }

    

    
 
}]);
