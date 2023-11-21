document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces de la barra de navegación
    var links = document.querySelectorAll('nav a');

    // Añade un listener de clic a cada enlace
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        // Obtiene el destino del enlace (p.ej., "#bloque4")
        var targetId = this.getAttribute('href');

        // Obtiene la posición del destino
        var targetElement = document.querySelector(targetId);
        var targetPosition = targetElement.offsetTop;

        // Desplaza suavemente a la posición del destino
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });