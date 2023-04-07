//AND &&
function mayorYMenor(num){
    if(num > 5 && num < 10 && num %2===0)console.log(true);
    else console.log (false);
}
//mayorYMenor(7)
//mayorYMenor(8)

//OR ||
function operadorOR(str){
    if (str==="Henry" || str.length<2)console.log(true);
    else console.log (false)
}
//operadorOR("Henry")
//operadorOR("javascript")
//operadorOR("g")

//NOT !
function operadorNot(permiso){
    if (!permiso)console.log ("Tiene permiso");// En este caso, que uso if seguido del argumento/parámetro, sirve 
    else console.log("No lo tiene")//para invocar con true o false la función y que me devuelva el resultado.
}//                                 es decir, es igual que poner if (permiso === true) y para la negación (permiso !== true).
//operadorNot(true)
//operadorNot(false)

//CONDICION COMPLEJA
function condicionCompleja(num){
    if (num>9 && num%2===0 || num===3) console.log(true);
    else console.log(false);
}
condicionCompleja(10)
condicionCompleja(6)
condicionCompleja(3)
condicionCompleja(5)