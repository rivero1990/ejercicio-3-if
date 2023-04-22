let numAdmitidoUno = prompt("Ingrese primer numero");
let numAdmitidoDos = prompt("Ingrese segundo numero");
let numAdmitidoTres = prompt("Ingrese tercer numero");

if ((numAdmitidoUno == numAdmitidoDos) && (numAdmitidoUno == numAdmitidoTres)) {
    document.write("Premio mayor : 500000 dolares");
} else if ((numAdmitidoUno == numAdmitidoDos) || (numAdmitidoUno == numAdmitidoTres) || (numAdmitidoDos == numAdmitidoTres)) {
    document.write("Premio segundo : 150000 dolares");
} else {
    document.write("Ganaste un helado");
}