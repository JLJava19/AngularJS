app.controller('serviciosController', ['$scope', '$log', 'serviciosConstantes', 'rectanguloService', 
                function($scope, $log, serviciosConstantes, rectanguloService){


    console.trace('serviciosController');
    $log.info("Acabamos de crear el $scope");

    $scope.titulo = "Servicios " + serviciosConstantes.titulo; 
    //rectanguloService.setAncho(2);
    //rectanguloService.setAlto(2);

    $scope.area = rectanguloService.getArea();
}]);
