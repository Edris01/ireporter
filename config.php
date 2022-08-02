<?php 
    // database connection 
    $conn = mysqli_connect('localhost', 'root', '', 'i-reporter');

    // checking connection 
    if(!$conn) {
        die('Database not connected!!!');
    }
?>