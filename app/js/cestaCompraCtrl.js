/**
 * Controlador pare gestionar la cesta de compra de las frutas
 * 
 */
(function(){
    "use strict";
    angular.module("angularApp")
    .controller('CestaCompraController',       // Nombre del controlador
                CestaCompraController);        // la programacion de controlador
                             
    function CestaCompraController(){
        var me = this;
        me.columna;
        me.orden=false;

        me.ordenNombre=true;
        me.ordenFlechaNombre=true;
        me.ordenPrecio=true;
        me.ordenFlechaPrecio=true;

        me.precioTotalResultado=0;
        me.precioTotal=0;
        me.frutaSeleccionada = "";
        me.frutasJson={"fruta":[
                            {
                                "imagen": "manzana.jpg",
                                "nombre":"Manzana",
                                "color":"roja",
                                "precio": 13, 
                                "cantidad": 0
                            },
                            {
                                "imagen": "fresa.jpg",
                                "nombre":"Maracuya",
                                "color":"lila",
                                "precio": 5,
                                "cantidad": 0
                            },
                            {
                                "imagen": "pera.jpg",
                                "nombre":"pera",
                                "color":"verde",
                                "precio": 4,
                                "cantidad": 0
                            }
                        ]};

        me.seleccionado = function( fruta ){
            console.log('click seleccionado' + fruta);
            me.frutaSeleccionada = fruta;  

        }
                          
        me.sumarCantidad = function( fruta ){
            console.log('click sumarCantidad' + fruta);
            me.frutaSeleccionada = fruta; 
            me.frutaSeleccionada.cantidad++;      
        }

        me.restarCantidad = function( fruta ){
            console.log('click restarCantidad' + fruta);
            me.frutaSeleccionada = fruta; 
            if(me.frutaSeleccionada.cantidad>0){
                me.frutaSeleccionada.cantidad--;
            }
                    
        }
        
        me.calcularPrecioTotal = function( fruta ){
            /*
            console.log('click calcularPrecioTotal' + fruta);
            me.frutaSeleccionada = fruta;
            me.precioTotal = me.precioTotal + me.frutaSeleccionada.precio * me.frutaSeleccionada.cantidad;
            me.precioTotalResultado= me.precioTotal;
            me.precioTotal = 0;
            */
            console.log('click ordenar %o' + fruta);
            var i = 0;
            

            // TODO
            for(i=0;i<Object.keys(me.frutasJson.fruta).length;i++){
                me.frutaSeleccionada = fruta;
                me.precioTotal = me.precioTotal + me.frutaSeleccionada.precio * me.frutaSeleccionada.cantidad;
                me.precioTotalResultado= me.precioTotal;
                me.precioTotal = 0;
            }
                
        }

        me.ordenar = function( column ){
            console.log('click ordenar');

            me.columna=column;
            if(column=='nombre'){
                me.ordenNombre=!me.ordenNombre;
                me.orden=!me.ordenNombre;
            }else{
                me.ordenPrecio=!me.ordenPrecio;
                me.orden=!$me.ordenPrecio;
            }

        }
    };

} ());


// Fin cestaCompraController