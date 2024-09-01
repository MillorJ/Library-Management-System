<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        include("includes/mysqli_connect.php");

        $id = $_POST["id"];

        $query = "DELETE FROM books WHERE bookID = '$id'";
        mysqli_query($dbc, $query);
        mysqli_close($dbc);
    }
?>