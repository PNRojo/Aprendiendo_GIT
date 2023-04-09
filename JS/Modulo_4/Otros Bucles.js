// DO...WHILE. Crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa.
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
//   console.log (i);
// } while (i < 5);

// console.log(result);

//SWITCH. Evalúa una expresión, comparando ese valor con un "case", y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen más abajo.
var verdura = 'tomate'
switch (verdura) {
  case "lechuga":
    console.log ("esto es lechuga");
  case "apio":
    console.log ("esto es apio");
  case "zanahora":
    console.log ("esto es zanahoria");
  case "tomate":
    console.log ("esto es tomate");
    break; //cuando se usa break, deja de ejecutar el resto de case.
  case "alcaucil":
    console.log ("esto es alcaucil");
  default:
    console.log ("No hay verduras") //Si no hay case que coincida con la expresión, de devuelve el valor de "default".
}
