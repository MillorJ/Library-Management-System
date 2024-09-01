<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        include("includes/mysqli_connect.php");

        $id = $_POST['id'];
        $title = $_POST['title'];
        $author = $_POST['author'];
        $publisher = $_POST['publisher'];
        $year = $_POST['year'];
        $pages = $_POST['pages'];

        $query = "UPDATE books SET bookTitle = '$title', bookAuthor = '$author', bookPublisher = '$publisher', yearPublished = '$year', bookPages = '$pages' WHERE bookID = '$id'";
        mysqli_query($dbc, $query);
        mysqli_close($dbc);

    }
?>