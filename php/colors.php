<?php

 $link = mysqli_connect("localhost","root","","trekking");
 //$link = mysqli_connect("localhost","a0716822_trekking","trekking","a0716822_trekking");

if (mysqli_connect_errno())
{
    echo "Faild to connect to MySQL:" .mysqli_connect_error();
}

if(isset($_POST['getColors'])){


    $sql = "SELECT * FROM colors";
        
    $result = mysqli_query($link,$sql);
     
    while ($row = mysqli_fetch_array($result)){
        print_r($row['name'].";");
    }

      



}






?>