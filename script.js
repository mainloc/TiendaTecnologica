document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    
    // Manejo de navegación
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.getAttribute('href') === '#') {
                event.preventDefault();
                alert('Sitio en construcción...!!');
            }
        });
    });
});