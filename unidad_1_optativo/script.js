function elegir(){
    var tipoSeguro = document.getElementById("tipo-seguro");
    var tipoSeguroValor = tipoSeguro.options[tipoSeguro.selectedIndex].value;
    document.getElementById("tipo-seguro-valor").value = tipoSeguroValor;
}

function saludar(){
    alert("Muchas gracias por confiar en nostros!!!");
}