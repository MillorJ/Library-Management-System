<?php
    if($_SERVER["REQUEST_METHOD"] == "GET") {
        header('Content-type: application/json');
        
        include("includes/mysqli_connect.php");

        $data = array();

        $query = "SELECT * FROM books";
        if($r = mysqli_query($dbc, $query)) {
            if(mysqli_num_rows($r) > 0) {
                while($row = mysqli_fetch_array($r)) {
                    $data[] = $row;
                }
            }
        }

        mysqli_free_result($r);
        mysqli_close($dbc);

        echo json_encode($data);
    }
?>
