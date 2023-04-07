var suma1 = 0;
var suma2 = 0;
var suma3 = 0;
// Forma manual de hacer el bucle:
// suma = suma + 1; la variable suma pasa de valer 0 a valer 1
// suma = suma + 2; la variable suma pasa de valer 1 a valer 3 (1+2)
// suma = suma + 3; la variable suma pasa de valer 3 a valer 6 (3+3)
// suma = suma + 4; la variable suma pasa de valer 6 a valer 10 (6+4)

//FOR. Sintaxis: for (variableDeIteración ; condiciónDeCumplimiento ; acciónDeVariableLuegoDeCadaCiclo)
for (var e=0 ; e<5 ; e++){ // con e++ le decimos que la variable E se incremente en +1 c/ciclo.
    suma1 = suma1 +2; //este es el código que queremos que se repita. Puede ser cualquier cosa.
//    console.log("Resultado de suma1 ", suma1);
}
// Acá podemos ver como trabaja FOR.
for (var i=0 ; i<5 ; i++){
    suma2 = suma2 + i;//si en vez de sumar un mismo numero, sumamos la variable i que cambia en c/ciclo.
//    console.log ("Valor de Iteracion ", i);//vemos como el valor de i va de 0 a 4 y se detiene.
}
//console.log ("Resultado de suma2 ", suma2)

// WHILE Sintaxis: while (condiciónDeCumplimiento) En este caso debe ser una condición logica que pueda ser true o false.
while (suma3 < 3){
    suma3 = suma3 + 1;
    console.log(suma3);
}