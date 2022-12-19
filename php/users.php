<?php
    $link = mysqli_connect("localhost","root","","trekking");
   // $link = mysqli_connect("localhost","a0716822_trekking","trekking","a0716822_trekking");

    if (mysqli_connect_errno())
    {
        echo "Faild to connect to MySQL:" .mysqli_connect_error();
    }

$sql = "";

if(isset($_POST["name_change"])){

    $name_c = $_POST["name_change"];
    $secName_c = $_POST["secName_change"];
    $id_c = (int)$_POST["userID"];

    $sql = "UPDATE users SET name='$name_c',sec_name='$secName_c' WHERE id='$id_c'";
    if ($link->query($sql) === TRUE) {
        $sql = "SELECT name, sec_name FROM users WHERE id=$id_c";
        $result = mysqli_query($link,$sql);
        while ($row = mysqli_fetch_assoc($result)){
            print_r($row['name']."/".$row['sec_name']);
        }
        
    }
}


?>