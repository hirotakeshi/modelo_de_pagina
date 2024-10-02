<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['nombre']) &&
        !empty($_POST['telefono']) &&
        !empty($_POST['email']) &&
        !empty($_POST['asunto']) &&
        isset($_POST['consentimiento']) 
    ) {
        $nombre = trim($_POST['nombre']);
        $telefono = trim($_POST['telefono']);
        $email = trim($_POST['email']);
        $asunto = trim($_POST['asunto']);
        // Se permite que el mensaje esté vacío
        $mensaje = trim($_POST['mensaje']); // Puede ser vacío
        $fecha = date("y/m/d");

        // consulta
        $stmt = $conex->prepare("INSERT INTO datos (nombre, telefono, email, asunto, mensaje, fecha) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $nombre, $telefono, $email, $asunto, $mensaje, $fecha);

        if ($stmt->execute()) {
            echo "<h3>¡Formulario enviado con éxito!</h3>";
        } else {
            echo "<h3>Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</h3>";
        }

        // Cerrar la declaración
        $stmt->close();
    } else {
        echo "<h3>Error: Todos los campos son obligatorios y debes aceptar los términos.</h3>";
    }
}
?>
