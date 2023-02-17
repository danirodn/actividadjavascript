// EJERCICIO 1:
//Se desea realizar una estadistica de los pesos de los alumnos de un colegio
//Menos de 40, 40 a 50, mas de 50 menos de 60, mas o igual a 60
//Daniel Rodriguez C.I: 27435373
let pesos = [];
let menosDe40 = 0;
let entre40y50 = 0;
let entre50y60 = 0;
let masOigual60 = 0;
let contador = 0;
let porcen = 0;
// Recolectar los pesos de los alumnos
while (true) {
    let peso = parseInt(prompt("Ingresar peso del alumno (0 para salir)"));
    
    if (peso < 0) {
        alert("Por favor ingrese un valor mayor positivo, el numero 0 para salir");
        continue;
    }


    if (peso === 0) {
        break;
    }
    pesos.push(peso);
}
 
// Realizar una estadística de los pesos
for (let i = 0; i < pesos.length; i++) {
    let peso = pesos[i];
    
    if (peso < 40 && peso >= 1) {
        menosDe40++;
        contador++;
    } else if (peso >= 40 && peso < 50) {
        entre40y50++;
        contador++;
    } else if (peso >= 50 && peso < 60) {
        entre50y60++;
        contador++;
    } else if (peso >= 60) {
        masOigual60++;
        contador++;

    }
     

    
}
 
// Imprimir la estadística
document.write(`<br>Menos de 40 kg: ${menosDe40}`);
document.write(`<br>Entre 40 y menos de 50 kg: ${entre40y50}`);
document.write(`<br>Entre 50 y menos de 60 kg: ${entre50y60}`);
document.write(`<br>Más o igual a 60 kg: ${masOigual60}`);

document.write('<br><br>Estadística:<br>');
if(menosDe40>0){
    document.write("<br>Menos de 40kg: " + (menosDe40/ contador * 100).toFixed(2) + "%");
}

if(entre40y50>0){
    document.write("<br>Entre 40 y menos de 50kg: " + (entre40y50/ contador * 100).toFixed(2) + "%");
}

if(entre50y60>0){
    document.write("<br>Entre 50 y menos de 60kg: " + (entre50y60/ contador * 100).toFixed(2) + "%");

}

if(masOigual60>0){
    document.write("<br>Más o igual a 60kg: " + (masOigual60 / contador * 100).toFixed(2) + "%");

}


