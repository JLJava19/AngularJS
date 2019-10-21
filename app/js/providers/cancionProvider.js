/**
   * Providers
   */
  
  function CancionProvider($http){
    console.log("CancionProvider");
    const ENDPOINT = "http://localhost:8080/cancion";
    

    this.listar = function(){
      console.log("CancionProvider listar" + ENDPOINT);
      return $http.get(ENDPOINT);
    }; // listar

    
    this.detalle = function( idCancion ){
      let url = ENDPOINT+ '/' + idCancion;
      console.log("CancionProvider detalle" + url);
      return $http.get(url);
    }; // detalle  

    
    this.crear = function( nombreCancion ){
      console.log("CancionProvider crear" + ENDPOINT);
      let cancion = {"nombre": nombreCancion};
      return $http.post(ENDPOINT + '/', cancion);
    }; // crear  
    
    this.eliminar = function( idCancion ){
      let url = ENDPOINT+ '/' + idCancion;
      console.log("CancionProvider eliminar" + url);
      return $http.delete(url);
    }; // eliminar  

    this.modificar = function( idCancion, nombreCancion ){
      let url = ENDPOINT+ '/' + idCancion;
      let cancion={
                    "id":idCancion,
                    "nombre":nombreCancion
                  };
      console.log("CancionProvider modificar" + url);
      return $http.put(url, cancion);
    }; // modificar 
    
  }