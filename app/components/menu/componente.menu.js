angular.
  module('angularApp').  
  component('componenteMenu', {   
    templateUrl: './components/menu/template.menu.html',
    controller: function MenuController($scope) {

      console.trace('MenuController');  
     
      $scope.rutas = [
        {
          "nombre": "Inicio",
          "url": "#!/",
          "active": false,
          "icono": "fas fa-home"
        },
        {
          "nombre": "Frutas",
          "url": "#!/frutas",
          "active": true,
          "icono": "fas fa-carrot"
        },
        {
          "nombre": "Componentes",
          "url": "#!/componente1",
          "active": false,
          "icono": "fas fa-window-restore"
        },       
        {
          "nombre": "Prg. Funcional",
          "url": "#!/funcional",
          "active": false,
          "icono": "fas fa-filter"
        },
        {
          "nombre": "Promesas",
          "url": "#!/promesas",
          "active": false,
          "icono": "fas fa-pray"
        },
        {
          "nombre": "Servicios",
          "url": "#!/servicios",
          "active": false,
          "icono": "fas fa-server"
        },
        {
          "nombre": "Crud",
          "url": "#!/crud",
          "active": false,
          "icono": "fas fa-crutch"
        },
        {
          "nombre": "Formulario",
          "url": "#!/formulario",
          "active": false,
          "icono": "fas fa-align-justify"
        },
        {
          "nombre": "Pokemon",
          "url": "#!/pokemon",
          "active": false,
          "icono": "fas fa-dragon"
        },
        {
          "nombre": "Creditos",
          "url": "#!/creditos",
          "active": false,
          "icono": "fab fa-creative-commons"
        }
        
      ];
      
      $scope.rutasEjerciciosBasicos = [
        {
          "nombre": "E1.1.- ng-model",
          "url": "#!/e1-ng-model",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E1.2.- Basics, pipes",
          "url": "#!/e1-pipes",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E2.- Forms, ng-controller",
          "url": "#!/e2-ng-controller",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E3.1.- ng-repeat, filter",
          "url": "#!/e3.1-ng-repeat-filter",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E3.2.- components",
          "url": "#!/e3.2-components",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E4.- http-request",
          "url": "#!/e4-http-request",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E5.- Ips",
          "url": "#!/e5-ips-http",
          "active": false,
          "icono": "fas fa-sticky-note"
        },
        {
          "nombre": "E6.- CRUD Tareas",
          "url": "#!/e6-crud-tareas",
          "active": false,
          "icono": "fas fa-sticky-note"
        }
        
      ];

    
      $scope.cambiarActivo = function( ruta ){
        console.trace('click cambiarActivo %o', ruta);

        //desactivar activo a todas las rutas
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        //activar solo sobre la hemos hecho click
        ruta.active = true;

      }//cambiarActivo



    }// controlador

  });