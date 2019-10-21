// Clase Rectangulo
function Rectangulo(tamanyoInicial) {
    this.ancho=tamanyoInicial.ancho;
    this.alto=tamanyoInicial.alto;
    
    this.setAncho=function(ancho) {
      this.ancho=ancho;
    }
    
    this.setAlto=function(alto) {
      this.alto=alto;
    }  
    
    this.getArea=function() {
      return this.ancho * this.alto;
    }
  }