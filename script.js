function growFlower() {
    var flower = document.getElementById('flower');
    var sizeIndicator = document.getElementById('sizeIndicator');
    var currentSize = flower.offsetWidth;

    // Incrementar el tamaño de la flor
    var newSize = currentSize + 20;
    flower.style.width = newSize + 'px';
    flower.style.height = newSize + 'px';

    // Actualizar el indicador de tamaño
    sizeIndicator.innerHTML = 'Tamaño de la flor: ' + newSize + 'px';

    // Agregar una línea para imprimir el valor de newSize en la consola del navegador
    console.log("Tamano de la flor2:", newSize);

    // Cambiar la imagen cuando alcance cierto tamaño
    if (newSize >= 300) {
        flower.style.backgroundImage = "url('../images/flower.jpg')";
    }
}
