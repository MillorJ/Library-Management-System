<?php
    if($_SERVER['REQUEST_METHOD'] == "POST") {
        include('includes/mysqli_connect.php');

        $title = $_POST['title'];
        $author = $_POST['author'];
        $publisher = $_POST['publisher'];
        $year = $_POST['year'];
        $pages = $_POST['pages'];

        $query = "INSERT INTO books (bookTitle, bookAuthor, bookPublisher, yearPublished, bookPages) VALUES ('$title', '$author', '$publisher', '$year', '$pages')";
        mysqli_query($dbc, $query);
        mysqli_close($dbc);
    }  
?>