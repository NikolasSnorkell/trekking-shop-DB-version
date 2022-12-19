
<?php
$link = mysqli_connect("localhost","root","","trekking");
//$link = mysqli_connect("localhost","a0716822_trekking","trekking","a0716822_trekking");

if (mysqli_connect_errno())
{
    echo "Faild to connect to MySQL:" .mysqli_connect_error();
}


if(isset($_GET["userID"])){


   $userID = $_GET["userID"];
   // $response = (file_get_contents("../json/items.json"));
   // $json = json_decode($response, true);

   $sql = "SELECT COUNT(name) as cart_amount FROM cart WHERE user=$userID";

   if ($link->query($sql)) {
     
      $result = mysqli_query($link,$sql);
            // print_r($result);
      while ($row = mysqli_fetch_array($result)){

          print_r($row["cart_amount"]);
      }
  } else {
   print_r('0');
  }

  

} else if(isset($_GET["name"])){


    $itemId = (int)$_GET["id"];
    $itemName =$_GET["name"];
    $itemColor =$_GET["color"];
    $itemGender =$_GET["gender"];
    $itemSize =(int)$_GET["size"];
    $itemPrice =(int)$_GET["price"];
    $itemUserId =(int)$_GET["userId"];

    // $sql = "INSERT INTO cart (itemId,name,color,size,price,gender,user)VALUES (".htmlspecialchars($itemId).", '".htmlspecialchars($itemName)."', '".htmlspecialchars($itemColor)."', ".htmlspecialchars($itemSize).", ".htmlspecialchars($itemPrice).", '".htmlspecialchars($itemGender)."',".htmlspecialchars($itemUserId)."";


  $sql = "INSERT INTO cart (itemId,name,color,size,price,gender,user)VALUES ($itemId,'$itemName', '$itemColor', $itemSize, $itemPrice,'$itemGender', $itemUserId)";
   
    if ($link->query($sql) === TRUE) {
        print_r('Added');
    } else {
        mysqli_query($link,$sql) or print_r(mysqli_error($link));
        // print_r('Not in cart');
    }
 } else if(isset($_GET["cart"])){


    $userID = $_GET["cart"];

    $sql = "SELECT * FROM cart WHERE user=$userID";

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
              $obj->user = $row["user"];
                
            //   $main.=$obj;

              $main.= "{'id':'".$row["id"]."','itemId':'".$row["itemId"]."','name':'".$row["name"]."','color':'".$row["color"]."','size':'".$row["size"]."','price':'".$row["price"]."','gender':'".$row["gender"]."','user':'".$row["user"]."'},";
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