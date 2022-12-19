<?php
    $link = mysqli_connect("localhost","root","","trekking");
    //$link = mysqli_connect("localhost","a0716822_trekking","trekking","a0716822_trekking");

    if (mysqli_connect_errno())
    {
        echo "Faild to connect to MySQL:" .mysqli_connect_error();
    }

$sql = "";

 if(isset($_POST["type"])){

    if($_POST["type"]=='registr'){

        $mail = $_POST["mail"];
        $login = $_POST["login"];
        $password = $_POST["pass"];

        $sql = "SELECT login FROM users WHERE login=$login";

        if ($link->query($sql) === FALSE) {
                $sql = "INSERT INTO users (name, sec_name,login,password,theme,mail,isAdmin)VALUES ('New','Buyer', '".htmlspecialchars($login)."', '".htmlspecialchars($password)."','L','".htmlspecialchars($mail)."','F')";

                if ($link->query($sql) === TRUE) {
                    print_r('Success');
                }

    } else {
        print_r('Exist');
    }

    } else  if($_POST["type"]=='login'){

        $login = $_POST["login"];
        $password = $_POST["pass"];

        // $sql = "SELECT * FROM users WHERE login=$login and password=$password";

        if($link){
            $result = mysqli_query($link,"SELECT * FROM users WHERE login= '".htmlspecialchars($login)."' and password = '".htmlspecialchars($password)."'");
            
            while ($row = mysqli_fetch_array($result)){

                if($row["isAdmin"]=="T"){
                    print_r($row["name"].";".$row["sec_name"].";".$row["address"].";".$row["mail"].";".$row["theme"].";".$row["isAdmin"].";".$row["id"].";<p id='devider' class='forAdmin'></p><p id='manager' class='forAdmin'>Manager</p>");
                } else {
                    print_r($row["name"].";".$row["sec_name"].";".$row["address"].";".$row["mail"].";".$row["theme"].";".$row["isAdmin"].";".$row["id"]);
                }

              
            }

        }
       
        
    }

   
 }

?>