/**
 * Filtro personalizado para Capitalizar la primera letra de un string
 * @param {*} valor 
 */


app.filter("capitalizar",function () {
  return function (cadena) {
    if (cadena != undefined && typeof (cadena)==="string") {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    } else {
      return "";
    }
  }
});

app.filter("capitalizarCacho",function () {
  return function (cadena, inicio, final) {
    if (cadena != undefined && typeof (cadena)==="string" && inicio>0 && final<cadena.length) {

      var cadenaModificada = cadena.substring(0, inicio-1) + cadena.substring(inicio - 1, final - 1).toUpperCase() + cadena.slice(final - 1);
      
      return cadenaModificada;

    } else {
      return "";
    }
  }
});