(function (){

    "use strict";

    angular.module('angularApp'). // Nombre App componentesApp
        component('componenteCalificacion', { // Nombre componente es para usarlo <componente-calificacion></componente-calificacion>
        templateUrl: './components/boton-calificacion/template.html',
        controller: function BotonController() {
            console.trace('BotonCalificacionController');

            var me = this; 
            const NOTA_MIN = 0;
            const NOTA_MAX = 10;

            me.calificacion = 'Suficiente';
            me.nota = 5;
            me.materia = '';

            // Evento para cuando se inicia el controlador
            me.$onInit = function(){
                me.nota = parseInt(me.pnota);   // Sin parsear no funciona mostrarCalificacion()
                // me.nota = +me.pnota;
                me.materia = me.pmateria;
                me.mostrarCalificacion();
            }

            // funcion sumar
            me.sumar = function () {
                console.trace('funcion sumar');
                if (me.nota < NOTA_MAX) {
                    me.nota++;
                }
                me.mostrarCalificacion();

            };

            // funcion restar
            me.restar = function () {
                console.trace('funcion restar');
                if (me.nota > NOTA_MIN) {
                    me.nota--;
                }
                me.mostrarCalificacion();
            };

            // funcion restar
            me.mostrarCalificacion = function () {
                console.trace('funcion mostrarCalificacion');
                switch (me.nota) {
                    case 0:
                        me.calificacion = 'Suspenso ----';
                        break;
                    case 1:
                        me.calificacion = 'Suspenso ---';
                        break;
                    case 2:
                        me.calificacion = 'Suspenso --';
                        break;
                    case 3:
                        me.calificacion = 'Suspenso -';
                        break;
                    case 4:
                        me.calificacion = 'Suspenso';
                        break;
                    case 5:
                        me.calificacion = 'Suficiente';
                        break;
                    case 6:
                        me.calificacion = 'Bien';
                        break;
                    case 7:
                        me.calificacion = 'Notable';
                        break;
                    case 8:
                        me.calificacion = 'Notable alto';
                        break;
                    case 9:
                        me.calificacion = 'Sobresaliente';
                        break;
                    case 10:
                        me.calificacion = 'Sobresaliente ++';
                        break;
                    default:
                        me.calificacion = 'Suficiente';
                }

            };

        },
        bindings: {
            pmateria: '@', pnota: '@'   // Los parametros que recibe el componente
        }
    });

} ());


