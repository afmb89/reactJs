let inputs = document.querySelectorAll('input');
let operador1= document.getElementById("operador1");
let operador2= document.getElementById("operador2");
let resultado= document.getElementById("resultado");


function borrar(){
    inputs.forEach(input => input.value='');
    return input.value;
}

function sumar(a, b){
    a = operador1.value;
    b = operador2.value;
    resultado.value = (a + b);
    return resultado.value;
}

function resta(a, b){
    a = operador1.value;
    b = operador2.value;
    resultado.value = (a - b);    
    return resultado.value;
}

function multiplicar(a, b){
    a = operador1.value;
    b = operador2.value;
    resultado.value = (a * b);
    return resultado.value;
}

function dividir(a, b){
    a = operador1.value;
    b = operador2.value;

    if (b == 0){
        alert("No se puede dividir por 0, por favor revise");
    }else{
        resultado.value = (a / b);
    }
    return resultado.value;
}