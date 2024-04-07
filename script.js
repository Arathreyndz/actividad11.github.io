document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".slider-dots");

    // Genera los indicadores de posición
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-slide-index", index);
        dotsContainer.appendChild(dot);
    });

    // Cambia el estilo del indicador de posición cuando cambia el slide
    function updateDots() {
        const currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlideIndex].classList.add("active");
    }

    // Evento para cambiar el slide cuando se hace clic en un indicador de posición
    dotsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("dot")) {
            const slideIndex = parseInt(event.target.getAttribute("data-slide-index"));
            showSlide(slideIndex);
        }
    });

    // Cambia el slide actual y actualiza los indicadores de posición
    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
        updateDots();
    }

    // Función para cambiar el slide automáticamente cada 5 segundos
    function nextSlide() {
        const currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
        const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextSlideIndex);
    }

    setInterval(nextSlide, 2000); // Cambia de slide cada 5 segundos (5000 milisegundos)

    // Muestra el primer slide al cargar la página
    showSlide(0);


});
    // Agregar una línea para imprimir el valor de newSize en la consola del navegador
    console.log("Tamano de la flor2:", newSize);

    // Cambiar la imagen cuando alcance cierto tamaño
    if (newSize >= 300) {
        flower.style.backgroundImage = "url('../images/flower.jpg')";
    }
}
