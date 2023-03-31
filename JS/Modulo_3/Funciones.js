// Función de x, es decir f(x). Permite hacer expresiones con x y reemplazarlo por el valor dado.
function sumaDos(x) {
    console.log(x+2);
}
sumaDos(5);

// Hay tres maneras de declarar una función. Primer manera:
//function nombredelafunción(argumentooparámetro){
//      cuerpodelafunción
//}
//invocar nombredelafunción(dar el argumentooparametro)
function sumaTres(y){
    return y+3; //return en este caso reemplaza a console.log. En vez de imprimirlo solo lo devuelve.
}
//Segunda manera. Guardar la función dentro de una variable.
var sumaTres = function (z){
    return z+4;
}
//Tercer manera. Usando la funcón de flecha (=>).
var sumaTres = (w)=>{
    return w+5;
}