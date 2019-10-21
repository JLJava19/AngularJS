(function(){
    "use strict";

    angular.module('angularApp')
        .controller('PokemonController', ['$http', 'pokemonProvider', PokemonController]);

    function PokemonController ($http, pokemonProvider){
        var me = this;

        me.pokemons = {};
        me.detallePokemon = [];

        me.$onInit = function(){
            let promesa = pokemonProvider.listar();

            promesa.then(
                response=>{
                    console.debug('Llamada Rest OK %o', response);
                    me.pokemons = response.data.results;
                    var i=0;
                    for(i=0;i<Object.keys(me.pokemons).length;i++){
                        let promesaDetalle = pokemonProvider.detalle(i);
                        promesaDetalle.then(
                            response=>{
                                //var q = $q.defer();
                                me.detallePokemon.push({
                                                        "id": response.data.id,
                                                        "nombre": response.data.name,
                                                        "url": me.pokemons[response.data.id].url
                                                        });
                                
                                
                            },
                            response=>{
                                console.warn('Llamada Rest ERROR %o', response);
                            }
                
                        );
                    }
                    
                },
                response=>{
                    console.warn('Llamada Rest ERROR %o', response);
                }
    
            );
        }
    }



}());