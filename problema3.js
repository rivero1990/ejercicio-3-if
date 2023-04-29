const numAdmitidoUno = document.querySelector("#numero-1");
const numAdmitidoDos = document.querySelector("#numero-2");
const numAdmitidoTres = document.querySelector("#numero-3");
const resultadoPremio = document.querySelector("#premio");


function confirmacionPremio() {

    let num1 = numAdmitidoUno.value;
    let num2 = numAdmitidoDos.value;
    let num3 = numAdmitidoTres.value;

    if ((num1 == num2) && (num1 == num3)) {
        resultadoPremio.innerHTML = ("Premio mayor : 500000 dolares");
    } else if ((num1 == num2) || (num1 == num3) || (num2 == num3)) {
        resultadoPremio.innerHTML = ("Premio segundo : 150000 dolares");
    } else {
        resultadoPremio.innerHTML = ("Ganaste un helado");
    }
}
