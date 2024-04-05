function growFlower() {
    var flower = document.getElementById('flower');
    var sizeIndicator = document.getElementById('sizeIndicator');
    var currentSize = flower.offsetWidth;

    // Incrementar el tama�o de la flor
    var newSize = currentSize + 20;
    flower.style.width = newSize + 'px';
    flower.style.height = newSize + 'px';

    // Actualizar el indicador de tama�o
    sizeIndicator.innerHTML = 'Tama�o de la flor: ' + newSize + 'px';

    // Agregar una l�nea para imprimir el valor de newSize en la consola del navegador
    console.log("Tamano de la flor:", newSize);

    // Cambiar la imagen cuando alcance cierto tama�o
    if (newSize >= 300) {
        flower.style.backgroundImage = "url('../images/flower.jpg')";
    }
}
