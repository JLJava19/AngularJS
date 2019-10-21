
(function(){
    "use strict";
    angular.module("angularApp")
        .controller('YoutubeController',             // Nombre del controlador
                    YoutubeController);             // la programacion de controlador
        
        function YoutubeController($timeout){

            var me = this;

            me.animacionYoutube = "";

            me.videoData = {
                id: 3,
                nombre: "Micro turbina EN GARAJE - la batalla por el empuje de chorro",
                codigo: "UGn27IkWOqU",
                likes: 310000,
                descripcion: "¡Incluya subtítulos en su idioma en la configuración del video y disfrute viendo!",
                categoria:{
                    nombre: "DIY",
                    id: 12
                },
                usuario:{
                    nombre: "Игорь Негода",
                    id: 23
                }   
            }

            //iframe TODO
            //$scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject.url);

            
            me.sumarLike = function(){
                
                me.animacionYoutube = "animated pulse";
                me.videoData.likes++;
                $timeout(function(){
                    console.trace('Sumar likes');
                    me.animacionYoutube = "";
                }, 1000);
            }

        }

        
        
    

    // Fin VideoController

}) ();

