/**
 * Controlador pare gestionar listado de frutas
 * 
 */
(function () {
    "use strict";
    angular.module("angularApp")
    .controller('FrutasController',       // Nombre del controlador
                FrutasController)             // la programacion de controlador
        
        function FrutasController(){
            var me = this;
            me.frutas = ["Pera", "Manzana", "Kiwi", "naranja"];

            me.frutasJson={"fruta":[
                {
                    "nombre":"Manzana",
                    "color":"red"
                },
                {
                    "nombre":"Maracuya",
                    "color":"yellow"
                },
                {
                    "nombre":"kiwi",
                    "color":"green"
                }
            ]};


            me.activar = function(fruta, event) {
        
            console.trace('fruta = ' + fruta);
            //event.target.addClass('activar') ;
            event.target.style.backgroundColor = fruta.color;   //'yellow';
            }

        }


} ());



// Fin frutasController