(function(){
    "use strict";

    angular.module('angularApp')
        .controller('PokemonDetalleController', ['$http', '$routeParams', 'pokemonProvider', PokemonDetalleController]);

    function PokemonDetalleController ($http, $routeParams, pokemonProvider){
        var me = this;
        me.param1 = $routeParams.id;
        
        me.pokemon = {};
        me.$onInit = function(){
            let promesa = pokemonProvider.detalle(me.param1);

            promesa.then(
                response=>{
                    console.debug('Llamada Rest OK %o', response);
                    me.pokemon = response.data;
                    
                },
                response=>{
                    console.warn('Llamada Rest ERROR %o', response);
                }
    
            );
        }
        
    }



}());