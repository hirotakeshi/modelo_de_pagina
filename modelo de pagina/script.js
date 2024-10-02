document.getElementById('contacform').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validación de campos
    var nombre = document.getElementById('nombre').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();
    var asunto = document.getElementById('asunto').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var consentimiento = document.querySelector('input[name="consentimiento"]').checked;

   
    if (nombre === '' || telefono === '' || email === '' || asunto === '' || !consentimiento) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Preparar datos para enviar
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('telefono', telefono);
    formData.append('email', email);
    formData.append('asunto', asunto);
    formData.append('mensaje', mensaje); 
    formData.append('consentimiento', consentimiento);

    // Enviar datos
    fetch('send.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Mostrar mensaje de envío
        var formMessage = document.getElementById('formMessage');
        formMessage.innerHTML = data;
        formMessage.style.display = 'block';

        // Reiniciar el formulario
        document.getElementById('contacform').reset();

        // Tiempo para ocultar el mensaje
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 3000);
    })
    .catch(error => console.error('Error:', error));
});
