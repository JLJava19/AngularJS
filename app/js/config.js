
/**
 * Configuracion de las rutas de la App
 * @see components/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })    
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        template: '<componente-tabla></componente-tabla>'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/funcional',{
      templateUrl: 'parciales/prog-funcional.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/crud',{
      templateUrl: 'parciales/crud.html'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/formulario',{
      templateUrl: 'parciales/formulario.html'
    })
    .when('/pokemon',{
      templateUrl: 'parciales/pokemon.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/pokemon-detalle.html',
      controller: 'PokemonDetalleController'
    })
    .when('/e1-ng-model',{
      templateUrl: 'parciales/e1-ng-model.html'
    })
    .when('/e1-pipes',{
        templateUrl: 'parciales/e1-pipes.html'
    })
    .when('/e2-ng-controller',{
      templateUrl: 'parciales/e2-ng-controller.html'
    })
    .when('/e3.1-ng-repeat-filter',{
      templateUrl: 'parciales/e3.1-ng-repeat-filter.html'
    })
    .when('/e3.2-components',{
      templateUrl: 'parciales/e3.2-components.html'
    })
    .when('/e4-http-request',{
      templateUrl: 'parciales/e4-http-request.html'
    })
    .when('/e5-ips-http',{
      templateUrl: 'parciales/e5-ips-http.html'
    })
    .when('/e6-crud-tareas',{
      templateUrl: 'parciales/e6-crud-tareas.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
