// Manejar la navegación entre páginas
$(document).ready(function() {
    // Agregar evento de clic a los enlaces del menú
    $('.navmenu a').click(function(e) {
        var href = $(this).attr('href');
        
        // Si el enlace tiene un #, es una sección dentro de la misma página
        if (href.startsWith('#')) {
            e.preventDefault();
            // Hacer scroll suave a la sección
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 1000);
        }
    });

    // Actualizar el menú activo basado en la página actual
    var currentPage = window.location.pathname.split('/').pop();
    $('.navmenu a').each(function() {
        var linkPage = $(this).attr('href').split('/').pop();
        if (linkPage === currentPage) {
            $(this).addClass('active');
        }
    });
});
