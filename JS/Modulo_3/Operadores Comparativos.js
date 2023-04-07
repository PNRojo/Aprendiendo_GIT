console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7);

// hay que diferencias = de == y de ===. El primero es un operador de asignación de funciones.
// operadores de igualdad == (igualdad simple - solo del valor aunque distinto tipo de dato)
// y === (igualdad estricta de tipo de dato y valor)

// 3 == 3;
// 3 === 3;
console.log (3 == '3');
console.log (3 === '3');

// Asociatividad

var a = 1;
var b = 2;
console.log(a);
console.log(b);
var c = a = b; //a partir de acá hacemos que "a" pase a valer igual que "b" y que "c" sea igual que "a". 
// ante un mismo orden de precedencia, hay reglas de asociatividad para resolver.
// en este caso es desde la derecha. Se ejecuta primero a=b y despues c=a, osea c = (a = b)
console.log(a);
console.log(b);
console.log(c);

// Por ejemplo la división tiene asociatividad desde izquierda.
console.log (40/2/4);