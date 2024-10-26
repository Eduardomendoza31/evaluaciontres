
document.getElementById('verificarnumero').onclick = function() {
    var num = parseInt(document.getElementById('numero').value); 
    var suma = 0;

    // Calculamos la suma de los divisores, con el fin de saber si es perfecto o no.
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }

    // Mostramos el resultado del número ingresado.
    var resultadoElemento = document.getElementById('resultado');
    if (suma === num) {
        resultadoElemento.textContent = 'El número ' + num + ' es perfecto.';
    } else {
        resultadoElemento.textContent = 'El número ' + num + ' no es perfecto.';
    }
};