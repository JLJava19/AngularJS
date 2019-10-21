(function(){

    "use strict";

    app.controller("ProfesorHttpCtrl", ['$http', '$timeout', ProfesorHttpCtrl]);
    
    

    function ProfesorHttpCtrl($http,$timeout){

        var me = this;
        me.profesores = {};
        me.ocultar=false;

        // Peticion httpRequest mediante ajax, es ASINCRONA!!!
        console.debug('llamada asincrona');

        $timeout(function() {
            $http.get('json/profesores.json').then(function(data){
                console.trace('response OK %o', data);
                me.profesores = data;
                me.ocultar=true;
            });
        },3000);

        

        console.debug('seguimos ejecuntando otras sentencias');
    };    
        

 

})();
