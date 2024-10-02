<?php

$conex = mysqli_connect("localhost", "root", "", "form");

if (!$conex) {
    die("Error en la conexión: " . mysqli_connect_error());
}

?>
