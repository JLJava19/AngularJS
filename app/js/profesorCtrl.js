/* Controlador ProfesorController */

(function (){
    "use strict";

    angular.module("angularApp")
        .controller("ProfesorController",  ProfesorController);

    function ProfesorController(){   
        // la programacion de controlador
        var me = this;

        // Propiedades del modelo
        me.profesorData = {
            nombre: "Juan Carlos Pineda",
            bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
            edad: 47,
            foto: "img/juancarlos.jpg"
        }
        me.editando={};
        me.mostrarMenu=false;
        me.animacion="animated flipInX";
        // funciones
        me.editar = function(){
            console.trace('click para editar');
            angular.copy(me.profesorData, me.editando);
            me.mostrarMenu=true;
        };

        me.cancelar = function(){
            console.trace('click para cancelar');
            me.editando={};
            me.animacion="animated fadeOutUpBig"
            //$scope.mostrarMenu=false;
        };

        me.guardar = function(){
            console.trace('click para cancelar');
            angular.copy( me.editando, me.profesorData );
            me.mostrarMenu=false;
        };
    }
    // Fin ProfesorController

} ());



