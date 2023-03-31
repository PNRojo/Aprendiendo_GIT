function viajar(destino){
    if (destino === "Brasil"){
        console.log("Gire a la IZQ");
    } else if (destino === "Argentina"){
        console.log("Gire a la DER");
    } else {
        console.log("Nos Perdimos");
    }
}

viajar("China");

function mayoria(edad){
    if (edad >= 18){
        console.log(true);
    }else {
        console.log(false);
    }
}

mayoria(19);
mayoria(17);
mayoria(18);