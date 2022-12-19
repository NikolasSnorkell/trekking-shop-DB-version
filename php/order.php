<?php
    $link = mysqli_connect("localhost","root","","trekking");
    //$link = mysqli_connect("localhost","a0716822_trekking","trekking","a0716822_trekking");
    if (mysqli_connect_errno())
    {
        echo "Faild to connect to MySQL:" .mysqli_connect_error();
    }

    

    if(isset($_GET['order'])){
       

       

    $data = $_GET['order'];

   
   
    

    foreach($data as $id){
        
        
        $sql = "SELECT * FROM cart WHERE id=$id";
        
        $result = mysqli_query($link,$sql);
         
        while ($row = mysqli_fetch_array($result)){

            $itemId = (int)$row["itemId"];
            $itemName =$row["name"];
            $itemColor =$row["color"];
            $itemGender =$row["gender"];
            $itemSize =(int)$row["amount"];
            $itemSize =(int)$row["size"];
            $itemPrice =(int)$row["price"];
            $itemUserId =(int)$row["user"];

            $sql2 = "INSERT INTO orders (itemId,name,color,size,price,date,gender,user_id,amount)VALUES ($itemId,'$itemName', '$itemColor', $itemSize, $itemPrice,NOW(),'$itemGender', $itemUserId,1)";

            mysqli_query($link,$sql2) or print_r(mysqli_error($link));

            
            $sql = "DELETE FROM cart WHERE id=$id";

            mysqli_query($link,$sql) or print_r(mysqli_error($link));
      }

        // print_r($id); 


    }

    // print_r();    
    } else if(isset($_GET["order_items"])){


        $userID = $_GET["order_items"];
    
        $sql = "SELECT * FROM orders WHERE user_id=$userID";
    
        if ($link->query($sql)) {
    
            $result = mysqli_query($link,$sql);
            class Ar{
                public $id;
                public $itemId;
                public $name;
                public $color;
                public $size;
                public $price;
                public $gender;
                public $amount;
                public $date;
                public $user;
            }
           
          $obj = new Ar();
          $main = "[";
    
                while ($row = mysqli_fetch_assoc($result)){
    
                 
                 
    
                  $obj->id = $row["id"];
                  $obj->itemId = $row["itemId"];
                  $obj->name = $row["name"];
                  $obj->color = $row["color"];
                  $obj->size = $row["size"];
                  $obj->price = $row["price"];
                  $obj->gender = $row["gender"];
                  $obj->amount = $row["amount"];
                  $obj->date = $row["date"];
                //   $obj->user = $row["user_id"];
                    
                //   $main.=$obj;
    
                  $main.= "{'id':'".$row["id"]."','itemId':'".$row["itemId"]."','name':'".$row["name"]."','color':'".$row["color"]."','size':'".$row["size"]."','price':'".$row["price"]."','gender':'".$row["gender"]."','amount':'".$row["amount"]."','date':'".$row["date"]."'},";
                //    $return[] = $row;
                    $row2 = array($row.",");
                
               
                    // print_r($row["id"].", ".$row["itemId"].", ".$row["name"].", ".$row["color"].", ".$row["size"].", ".$row["price"].", ".$row["gender"].", ".$row["user"]."/");
                }
    
                print_r(json_encode($main)."]");
        } else {
            print_r("Nothing");
        }
    } else if(isset($_POST["manager_items"])){


        
    
        $sql = "SELECT orders.*, users.name as userName, users.sec_name as userSecName FROM orders,users WHERE users.id=orders.user_id ORDER BY date DESC";
    
        if ($link->query($sql)) {
    
            $result = mysqli_query($link,$sql);
            class Ar{
                public $id;
                public $itemId;
                public $name;
                public $color;
                public $size;
                public $price;
                public $gender;
                public $amount;
                public $date;
                public $user;
                public $userName;
                public $userSecName;
            }
           
          $obj = new Ar();
          $main = "[";
    
                while ($row = mysqli_fetch_assoc($result)){
    
                 
                 
    
                  $obj->id = $row["id"];
                  $obj->itemId = $row["itemId"];
                  $obj->name = $row["name"];
                  $obj->color = $row["color"];
                  $obj->size = $row["size"];
                  $obj->price = $row["price"];
                  $obj->gender = $row["gender"];
                  $obj->amount = $row["amount"];
                  $obj->date = $row["date"];
                  $obj->user = $row["user_id"];
                  $obj->userName = $row["userName"];
                  $obj->userSecName = $row["userSecName"];
                    
                //   $main.=$obj;
    
                  $main.= "{'id':'".$row["id"]."','itemId':'".$row["itemId"]."','name':'".$row["name"]."','color':'".$row["color"]."','size':'".$row["size"]."','price':'".$row["price"]."','gender':'".$row["gender"]."','amount':'".$row["amount"]."','date':'".$row["date"]."','user':'".$row["user_id"]."','userName':'".$row["userName"]."','userSecName':'".$row["userSecName"]."'},";
                //    $return[] = $row;
                    $row2 = array($row.",");
                
               
                    // print_r($row["id"].", ".$row["itemId"].", ".$row["name"].", ".$row["color"].", ".$row["size"].", ".$row["price"].", ".$row["gender"].", ".$row["user"]."/");
                }
    
                print_r(json_encode($main)."]");
        } else {
            print_r("Nothing");
        }
    }
    
?>