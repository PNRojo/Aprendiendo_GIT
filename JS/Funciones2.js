
//Diferencia entre console.log() y return.
//console.log se usa para dar una ayuda visual para saber el valor de una variable o el de una linea de código.
//Se usa cuando se está programando. Pero al momento de compilar, hay que eliminarlo de la app real.
var animal = "perro";
console.log(animal);
//return se usa para dar la instrucción a la función de cuál valor nos tiene que devolver:
function funcion1(x) {
    console.log(x);
    return x;
}
//si luego invocamos la función función1 con el argumento "valordeX", nos devuelve
//tanto el log (que nos escribe cual sería el resultado) como el valor en sí (un string "valordeX").
    //> funcion1("valordeX")
    //valordeX
    //'valordeX'
    //> 

//Si no agregamos return, el motor de JS nos devolverá un valor undefined luego del log:
function funcion2(y) {
    console.log(y);
}
    //> funcion2("valordeY")
    //valordeY
    //undefined
    //> 

//Ahora repetimos la función, pero utilizamos una nueva función como argumento, incluyendo un return
function funcion2(y) {
    console.log(y);
}
function funcion3() {
    return ("el nombre devuelto por la funcion2 es: " + funcion2("valordeZ"));
}
//Al invocar funcion3(), vemos que nos devuelve el console log con el argumento "valordeZ" pero
//el return sigue indefinido.
    //> funcion3()
    //valordeZ
    //'el nombre devuelto por la funcion2 es: undefined'
    //>
//Para corregirlo, agregamos un return a la funcion2.
function funcion2(y) {
    console.log(y);
    return (y)
}
function funcion3() {
    return ("el nombre devuelto por la funcion2 es: " + funcion2("valordeZ"));
}
    //> funcion3()
    //valordeZ
    //'el nombre devuelto por la funcion2 es: valordeZ'
    //> 

//Al ejecutar un return dentro de una función, el código se detiene, ignorando
//las lineas que tenga por debajo.
function funcion1(x) {
    return x
    console.log(x)
}