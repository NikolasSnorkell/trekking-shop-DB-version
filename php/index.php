<?php

$file = "../json/items.json";

$newImageName='';


// function removeElementWithValue($array, $key, $value){
//     foreach($array as $subKey => $subArray){
//          if($subArray[$key] == $value){
//               unset($array[$subKey]);
//          }
//     }
//     return $array;
// }





if(isset($_GET["aim"])){
    if($_GET["aim"]=="getItems"){
        $response = file_get_contents("../json/items.json");
        $json = json_decode($response, true);

        print_r ($response);
    }



} else if(isset($_POST["delete_this"])){
    $delete_id = $_POST["delete_this"];

    $response = file_get_contents("../json/items.json");
    $json = json_decode($response, true);

    // $json = removeElementWithValue($json, "id", $_POST["delete_this"]);
    // $json = json_encode($json);
    // file_put_contents("../json/items.json", $json);

    for($i=0;$i<count($json);$i++){

        if($json[$i]['id']==$delete_id){

            // unset($json[$it]);
            array_splice($json,$i,1);
            // unset($json[array_search($it, $json)]);
           
            file_put_contents("../json/items.json", json_encode($json));
            echo 'Deleted';
        }

       

    }

     



} else if(isset($_POST["edit_this"])){

    $edit_obj = $_POST["edit_this"];

    $response = file_get_contents("../json/items.json");
    $json = json_decode($response, true);

    // $json = removeElementWithValue($json, "id", $_POST["delete_this"]);
    // $json = json_encode($json);
    // file_put_contents("../json/items.json", $json);

    for($i=0;$i<count($json);$i++){

        if($json[$i]['id']==$edit_obj['id']){

            rename("../img/".$json[$i]['name']."_".$json[$i]['gender'].".png","../img/".$edit_obj['name']."_".$edit_obj['gender'].".png");


            $json[$i]['name'] = $edit_obj['name'];
            $json[$i]['gender'] = $edit_obj['gender'];
            $json[$i]['price'] = $edit_obj['price'];
            $json[$i]['colors'] = $edit_obj['colors'];
            $json[$i]['sizes'] = $edit_obj['sizes'];
           
            $newImageName= $json[$i]['name']."_". $json[$i]['gender'].".png";

            file_put_contents("../json/items.json", json_encode($json));
            echo 'Edited';
        }

       

    }

     



} else if(isset($_POST["edit_image"])){
    $newImageName=$_POST["newImageName"];
    $uploaddir = '../img/';
    $files = $_FILES; 

    $done_files = array();

	// переместим файлы из временной директории в указанную
	foreach( $files as $file ){
		$file_name = $file['name'];

        rename("$uploaddir/$file_name","../img/".$edit_obj['name']."_".$edit_obj['gender'].".png");
        $file_name = $newImageName;

		if( move_uploaded_file( $file['tmp_name'], "$uploaddir/$file_name" ) ){
			$done_files[] = realpath( "$uploaddir/$file_name" );
		}
	}
    
    

	$data = $done_files ? array('files' => $done_files ) : array('error' => 'Ошибка загрузки файлов.');

	die( json_encode( $data ) );

   
        
   

} else if(isset($_POST["add_this"])){

    $add_obj = $_POST["add_this"];

    $response = file_get_contents("../json/items.json");
    $json = json_decode($response, true);

    // $json = removeElementWithValue($json, "id", $_POST["delete_this"]);
    // $json = json_encode($json);
    // file_put_contents("../json/items.json", $json);
    class Ar{
        public $id;
        public $name;
        public $colors;
        public $sizes;
        public $price;
        public $gender;
    }
    
            $obj = new Ar();
       
            $obj->id = $add_obj['id'];
            $obj->name = $add_obj['name'];
            $obj->colors = $add_obj['colors'];
            $obj->sizes = $add_obj['sizes'];
            $obj->gender = $add_obj['gender'];
            $obj->price = $add_obj['price'];
            

            array_push($json,$obj);
       
           
           

            file_put_contents("../json/items.json", json_encode($json));
            echo 'Added';
     

       

 

     



} else if(isset($_POST["add_image"])){
    $newImageName=$_POST["newImageName"];
    $uploaddir = '../img/';
    $files = $_FILES; 

    $done_files = array();

	// переместим файлы из временной директории в указанную
	foreach( $files as $file ){
		$file_name = $file['name'];

        rename("$uploaddir/$file_name","../img/".$add_obj['name']."_".$add_obj['gender'].".png");
        $file_name = $newImageName;

		if( move_uploaded_file( $file['tmp_name'], "$uploaddir/$file_name" ) ){
			$done_files[] = realpath( "$uploaddir/$file_name" );
		}
	}
    
    

	$data = $done_files ? array('files' => $done_files ) : array('error' => 'Ошибка загрузки файлов.');

	die( json_encode( $data ) );

   
        
   

}









?>