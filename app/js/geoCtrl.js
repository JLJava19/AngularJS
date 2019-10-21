(function(){

    "use strict";
    
  
    app.controller('GeoCtrl', ['$http', '$sce', GeoCtrl]);
      
      function GeoCtrl($http, $sce){
        var me = this;
        //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
        me.geo = {};
        me.mostrar = false;
        
  
        me.mostrarGeo = function( ){
          var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts"
          var trustedUrl = $sce.trustAsResourceUrl('http://www.geoplugin.net/json.gp');
          console.log('click mostrarGeo');
          $http.jsonp(trustedUrl, {jsonpCallbackParam: 'jsoncallback'}).then(function (data){
            me.geo = data;
            me.mostrar = true;
          });
              
        }
      };
    
  })();
  