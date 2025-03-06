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

document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();

    document.getElementById('form-inscripcion').addEventListener('submit', function (event) {
        let nombre = document.getElementById('nombre').value.trim();
        let email = document.getElementById('email').value.trim();
        let check = document.getElementById('check').checked;

        if (nombre === '' || email === '' || !check) {
            event.preventDefault();
            alert('Por favor, complete todos los campos y acepte la política de privacidad.');
        }
    });
});