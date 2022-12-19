
$(document).ready(function () {

  // Получение списка товаров из json и распределение их по блокам

  $.get("php/index.php", { "aim": "getItems" }, function (result) {

    // console.log(result);
    let array = jQuery.parseJSON(result);
    // console.log(array);

    $('.products_cards_men').html('');
    $('.products_cards_women').html('');
    $('.products_cards_children').html('');

    let sizes_string = '';
    let colors_string = '';

    for (let i = 0; i < array.length; i++) {

      let sizes_items = array[i].sizes;
      let colors_items = array[i].colors;
      sizes_string = '';
      colors_string = '';

      if (array[i].gender == "man") {





        for (let k = 0; k < sizes_items.length; k++) {
          sizes_string += '<span class="sizes" value="' + sizes_items[k] + '">' + sizes_items[k] + '</span>'
        }

        for (let k = 0; k < colors_items.length; k++) {
          colors_string += '<span class="colors" style="background: ' + colors_items[k] + '" value="' + colors_items[k] + '"></span>'
        }


        $('.products_cards_men').html($('.products_cards_men').html() + '<div class="card"><div class= "card_top" ><div class="card_size_cont"><div class="card_sizes_block">' + sizes_string + '</div><p>size</p><img src="img/card-angle-down.png" alt="" class="size_btn"></div><div class="card_colors_cont">' + colors_string + '</div></div><div class="card_mid"><img src="img/' + array[i].name + '_' + array[i].gender + '.png" alt=""></div><div class="card_bottom"><p class="card_products_name">' + array[i].name + '</p><p class="card_products_price">' + array[i].price + ',00 € </p></div>   <div class="card_forms"><input type="text" name="color" class="inpColor" value hidden><input type="text" name="size" class="inpSize" value hidden><input type="text" name="price" class="inpPrice" value="' + array[i].price + '" hidden><input type="text" name="name" class="inpName" value="' + array[i].name + '" hidden><input type="text" name="id" class="inpId" value="' + array[i].id + '" hidden><input type="text" name="gender" class="inpGender" value="' + array[i].gender + '" hidden><input type="text" name="userId" class="userId" value="" hidden><button onclick="addToCart(this)" class="add_to_cart">Add to cart</button></div></div > ');



      } else if (array[i].gender == "woman") {



        for (let k = 0; k < sizes_items.length; k++) {
          sizes_string += '<span class="sizes" value="' + sizes_items[k] + '">' + sizes_items[k] + '</span>'
        }

        for (let k = 0; k < colors_items.length; k++) {
          colors_string += '<span class="colors" style="background: ' + colors_items[k] + '" value="' + colors_items[k] + '"></span>'
        }


        $('.products_cards_women').html($('.products_cards_women').html() + '<div class="card"><div class= "card_top" ><div class="card_size_cont"><div class="card_sizes_block">' + sizes_string + '</div><p>size</p><img src="img/card-angle-down.png" alt="" class="size_btn"></div><div class="card_colors_cont">' + colors_string + '</div></div><div class="card_mid"><img src="img/' + array[i].name + '_' + array[i].gender + '.png" alt=""></div><div class="card_bottom"><p class="card_products_name">' + array[i].name + '</p><p class="card_products_price">' + array[i].price + ',00 € </p></div>   <div class="card_forms"><input type="text" name="color" class="inpColor" value hidden><input type="text" name="size" class="inpSize" value hidden><input type="text" name="price" class="inpPrice" value="' + array[i].price + '" hidden><input type="text" name="name" class="inpName" value="' + array[i].name + '" hidden><input type="text" name="id" class="inpId" value="' + array[i].id + '" hidden><input type="text" name="gender" class="inpGender" value="' + array[i].gender + '" hidden><input type="text" name="userId" class="userId" value="" hidden><button onclick="addToCart(this)" class="add_to_cart">Add to cart</button></div></div > ');



      } else {





        for (let k = 0; k < sizes_items.length; k++) {
          sizes_string += '<span class="sizes" value="' + sizes_items[k] + '">' + sizes_items[k] + '</span>'
        }

        for (let k = 0; k < colors_items.length; k++) {
          colors_string += '<span class="colors" style="background: ' + colors_items[k] + '" value="' + colors_items[k] + '"></span>'
        }


        $('.products_cards_children').html($('.products_cards_children').html() + '<div class="card"><div class= "card_top" ><div class="card_size_cont"><div class="card_sizes_block">' + sizes_string + '</div><p>size</p><img src="img/card-angle-down.png" alt="" class="size_btn"></div><div class="card_colors_cont">' + colors_string + '</div></div><div class="card_mid"><img src="img/' + array[i].name + '_' + array[i].gender + '.png" alt=""></div><div class="card_bottom"><p class="card_products_name">' + array[i].name + '</p><p class="card_products_price">' + array[i].price + ',00 € </p></div>   <div class="card_forms"><input type="text" name="color" class="inpColor" value hidden><input type="text" name="size" class="inpSize" value hidden><input type="text" name="price" class="inpPrice" value="' + array[i].price + '" hidden><input type="text" name="name" class="inpName" value="' + array[i].name + '" hidden><input type="text" name="id" class="inpId" value="' + array[i].id + '" hidden><input type="text" name="gender" class="inpGender" value="' + array[i].gender + '" hidden><input type="text" name="userId" class="userId" value="" hidden><button onclick="addToCart(this)" class="add_to_cart">Add to cart</button></div></div > ');




      }


    }
    cardsStart()
    colorsStart();
    sizesStart();
    slickFunc();
  })



























  // Animation header background
  const headerBack = setInterval(headerAnim, 5000);
  let picNum = 2;
  function headerAnim() {
    $('#header').css({
      'background-image': 'url("img/header_back_' + picNum + '.png")'

    });

    picNum++;
    if (picNum > 3) picNum = 1;
  };



  

});


function slickFunc() {
  $('.products_cards_men').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 600,
    arrows: true,
    prevArrow: '.left_men',
    nextArrow: '.right_men',
    draggable: false,


    responsive: [
      {
        breakpoint: 992,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]




  });

  $('.products_cards_women').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 600,
    arrows: true,
    prevArrow: '.left_women',
    nextArrow: '.right_women',
    draggable: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.products_cards_children').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 600,
    arrows: true,
    prevArrow: '.left_children',
    nextArrow: '.right_children',
    draggable: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          draggable: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  


// Если первый раз запускается сайт и нет никакого значения, то ставим значение по умолчанию
if(localStorage.getItem('userID')==null) localStorageFunc();
console.log(localStorage.getItem('userID'));

if(+localStorage.getItem('userID')!=0 && localStorage.getItem('userID')!=""){

  $('.user_ava img').attr('src','img/user_logged.png');

  $('.cart_count').text(localStorage.getItem('cartAmount'));

  $("#user_name").html(localStorage.getItem('userName')+" "+localStorage.getItem('userSecName'));
  $("#user_mail").html(localStorage.getItem('userMail'));


  
  if(localStorage.getItem('userTheme')=="L") $("#user_theme").html("Light Theme");
  else $("#user_theme").html("Dark Theme");

  console.log("UserId: "+localStorage.getItem('userID'));

  if(localStorage.getItem('isAdmin')=='T'){
    $('.user_info').append(localStorage.getItem('manager'));
    $('#manager').click(function(){
      document.location.href = 'managerPanel/managerPanel.html';
      console.log('asdasd');
    });
  } 
}

$('.userId').attr("value",localStorage.getItem('userID'));

  


}



function localStorageFunc(user_id=0,cart_amount=0,user_name='',user_sec='',user_mail='',user_theme='L',isAdmin){
  console.log("Передан UserId: "+user_id)
  localStorage.setItem('userID',user_id);
  localStorage.setItem('cartAmount',cart_amount);
  localStorage.setItem('userName',user_name);
  localStorage.setItem('userSecName',user_sec);
  localStorage.setItem('userMail',user_mail);
  localStorage.setItem('userTheme',user_theme);
  localStorage.setItem('isAdmin',isAdmin);
}




















// Animation arrow down in header
const arrowDtimer = setInterval(arrowDownAnim, 1200);

function arrowDownAnim() {
  $('#header_arrow').css({
    transform: "translateY(10px)"

  });

  setTimeout(function () {
    $('#header_arrow').css({
      transform: "translateY(0px)"

    });
  }, 600);

};


const checks = $(".product_type");
$(checks).prop("checked", true);

for (let i = 0; i < checks.length; i++) {

  $(checks[i]).on("change", function () {
    // console.log((this.id).slice(13,));

    $("#products_" + (this.id).slice(13,)).slideToggle(500);

    // $('.products_cards_'+(this.id).slice(13,)).slick("unslick");

  })

}


let contentTop = $("#content").position();
$("#header_arrow").click(function () {
  $('html, body').animate({
    scrollTop: contentTop.top,
  }, 800);
});



$("#all_products_btn").click(function () {



  for (let i = 0; i < 3; i++) {
    if (checks.eq(i).prop('checked') == false) {
      // console.log(checks.eq(i));
      $('.product_type').eq(i).trigger('change');
    }
  }
  $('.product_type').prop('checked', true);

  let productsTop = $("#products_cont").offset().top;
  $('html, body').animate({
    scrollTop: productsTop,
  }, 500);
});


$('#products_nav').click(function(){
  
  let prod_top = $('#products_cont').offset().top;
  $('html,body').animate({
      scrollTop: prod_top
  },300)
})



//выбор размеров на карточке

function sizesStart() {
  let size_btns = $(".card_size_cont");
  $(".card_sizes_block").slideToggle(0);
  for (let i = 0; i < size_btns.length; i++) {
    $(size_btns[i]).on("click", function () {
      sizeBtn(this);
    })
  }
}



function sizeBtn(card_cont) {

  $(card_cont).children(".card_sizes_block").slideToggle(200);
  $(card_cont).children(".card_sizes_block").children('.sizes').click(function () {
    // console.log($(card_cont).parent('.card_top').parent('.card').children('form').children('input[name="size"]'));
    $(card_cont).parent('.card_top').parent('.card').children('.card_forms').children('input[name="size"]').attr("value", $(card_cont).children().children('span').attr("value"));
  })

}

// $('.sizes').on('click', function(){
//   $(this).parent('.card_sizes_block').parent('.card_size_cont').parent('.card_top').parent('.card').children('form').children('input[name="size"]').attr("value", $(this).attr("value"));
// })





let men_cards, women_cards, children_cards, cards_all;


// выбор карточки, выделение границы
function cardsStart() {
  men_cards = $(".products_cards_men").children(".card");
  women_cards = $(".products_cards_women").children(".card");
  children_cards = $(".products_cards_children").children(".card");

  cards_all = $(".card");


  for (let i = 0; i < men_cards.length; i++) {

    $(men_cards[i]).click(function () {
      cardClicked(this, "men");
    })
  }
  for (let i = 0; i < women_cards.length; i++) {

    $(women_cards[i]).click(function () {
      cardClicked(this, "women");
    })
  }
  for (let i = 0; i < children_cards.length; i++) {

    $(children_cards[i]).click(function () {
      cardClicked(this, "children");
    })
  }
}


function cardClicked(elem, key) {

  if (key == "men") {
    $(men_cards).css({
      border: "5px solid transparent",
    })
  }
  if (key == "women") {
    $(women_cards).css({
      border: "5px solid transparent",
    })
  }
  if (key == "children") {
    $(children_cards).css({
      border: "5px solid transparent",
    })
  }

  $(elem).css({
    border: "5px solid #aa9b77",
  })
}



// выбор цвета товара

function colorsStart() {
  $(".colors").click(function () {
    colorsClick(this);
  })
}


function colorsClick(elem) {
  $(elem).siblings(".colors").css("border", "2px solid transparent");
  $(elem).css("border", "2px solid #aa9b77");
  
  $(elem).parent('.card_colors_cont').parent('.card_top').parent('.card').children('.card_forms').children('input[name="color"]').attr("value", $(elem).attr("value"));
}



// Add to cart 

let cardForms = $('.card_forms');
let senddata;

// cardForms.submit(function () {

//   senddata = $(this).serialize();
//   // $.get('php/index.php',senddata,function(result){
//   //   alert(result)
//   // })

//   console.log('asd');


//   $.ajax({
//     url: 'php/cart.php',
//     type: 'get',
//     data: senddata,
//     success: function (result) {
//       // Whatever you want to do after the form is successfully submitted

//       console.log(result);
//       console.log(" ");
//     }
//   });

//   // $('#dummyframe').html('');

// })









// Клик по аватарке, открытие меню авторизации
$('.user_autho').fadeToggle(0);
$('.user_info').fadeToggle(0);
$('#user_email').slideToggle(0);

let ava_status;

$('.user_ava').on("click", function () {

  ava_status = $('.user_ava img').attr('src');
 

  if(ava_status=="img/user.png"){
    $('.user_autho').fadeToggle(200);
  } else if (ava_status=="img/user_logged.png"){
    $('.user_info').fadeToggle(200);
  }
  

})

// Изменения регистрации или логина
let flag_login = 0;
$('#user_register').on('click', function () {
  $('#user_email').slideToggle(300);
  if ($('#user_submit').html() == "Login") {
    $('#user_submit').html('Register');
    $('#user_register').html('Login');
    flag_login = 1;
  } else {
    $('#user_submit').html('Login');
    $('#user_register').html('Register');
    flag_login = 0;
  }

})





// Логин пользователя в системе
let login_data = {}, userID,cart_count, regexpMail=/^\w{4,15}@{1}(mail.ru||gmail.com){1}$/gm;

$('#wrong_user').fadeOut(0);
$('#success_user').fadeOut(0);
$('#exist_user').fadeOut(0);

$('#user_submit').click(function () {
  let mail = $('#user_email').val();
  let login = $('#user_login').val();
  let pass = $('#user_pass').val();

  login_data = {}

  if (flag_login == 0) {

    if (login != "" && pass != "") login_data = { 'type': 'login', 'login': login, 'pass': pass };

  } else if(regexpMail.test(mail)){
    if (mail != "" && login != "" && pass != "") login_data = { 'type': 'registr', 'mail': mail, 'login': login, 'pass': pass };
    
  } else {
    alert("Incorrect mail format!");
    return
  }

  $.post("php/login.php", login_data, function (result) {

    console.log(result);

    if (!result) {
              $('#wrong_user').fadeIn(300);

              setTimeout(() => {
                $('#wrong_user').fadeOut(300);
              }, 1500);

    } else if (result=="Exist") {
      $('#exist_user').fadeIn(300);

      setTimeout(() => {
        $('#exist_user').fadeOut(300);
      }, 1500);

    } else if(result=="Success"){
      
              $('#success_user').fadeIn(300);

              setTimeout(() => {
                $('#success_user').fadeOut(300);
              }, 1500);

              $('.user_autho').fadeToggle(200);
              $('#user_email').slideToggle(300);
              $('#user_submit').html('Login');
              $('#user_register').html('Register');
              flag_login = 0;

              $('#user_email').val("");
              $('#user_login').val("");
              $('#user_pass').val("");

    } else {

              result = result.split(";");
           

              
              userID = result[6];
              
              // $('.userId').attr("value",userID);
              
              $("#user_name").html(result[0]+" "+result[1]);
              $("#user_mail").html(result[3]);
              if(result[4]=="L") $("#user_theme").html("Light Theme");
              else $("#user_theme").html("Dark Theme");

              $('.user_ava img').attr('src','img/user_logged.png');
              $('.user_autho').fadeToggle(200);
              // console.log(userID);
             
              cartCount(userID);
              localStorageFunc(userID,cart_count,result[0],result[1],result[3],result[4],result[5]);
             
              $('.userId').attr("value",localStorage.getItem('userID'));


              // Открытие админ кнопки
            if(result[7]!='undefined'){
              $('.user_info').append(result[7]);
              localStorage.setItem('manager',result[7]);

              $('#manager').click(function(){
                document.location.href = 'managerPanel/managerPanel.html';
                console.log('asdasd');
              });
            } 
        
            

              $('#user_email').val("");
              $('#user_login').val("");
              $('#user_pass').val("");

             
              
    }




  })

})


function cartCount(uID){
  $.get("php/cart.php", {'userID':+uID}, function (result) {
    // console.log(result);
    cart_count = +result;
    localStorage.setItem('cartAmount',cart_count);
    $('.cart_count').text(cart_count);
  })
}



function addToCart(elem){

  let itemId = $(elem).siblings(".inpId").val();
  let itemName = $(elem).siblings(".inpName").val();
  let itemColor = $(elem).siblings(".inpColor").val();
  let itemGender = $(elem).siblings(".inpGender").val();
  let itemSize = $(elem).siblings(".inpSize").val();
  let itemPrice = $(elem).siblings(".inpPrice").val();
  let itemUserId = $(elem).siblings(".userId").val();

if(itemUserId==""){
  alert("Please log-in or register new account.")
} else if(!itemColor || !itemSize){
    alert("Please, choose color and size.");
  } else {

  senddata = {
    'id':+itemId,
    'name':itemName,
    'color':itemColor,
    'gender':itemGender,
    'size':+itemSize,
    'price':+itemPrice,
    'userId':+itemUserId,
  }
  console.log(senddata);

  $.get('php/cart.php',senddata,function(result){
    cartCount(itemUserId);
    console.log(result);
   })

  
  }
}



// User Log out function


$('#user_log-out').click(function(){
  $('.user_ava img').attr('src','img/user.png');
  $('.user_info').fadeToggle(200);
  if($('#title_header').html()=='CART'||$('#title_header').html()=='YOUR ORDERS'){
    document.location.href ='index.html'
  }

  localStorageFunc();
  localStorage.setItem('manager','empty');

  $('.forAdmin').remove();

  $('.cart_count').text('0');
  $('.userId').attr("value","");
});

$('#user_orders').click(function(){
  if(localStorage.getItem('userID')!=0){
    document.location.href = 'orders.html';
  }
    
});




// Go to cart page

$('#cart_li').click(function(){

  if(localStorage.getItem('userID')!=0){
    document.location.href = 'cart.html';
  } else {
    alert('Please, log-in or register new account.');
  }
    
});



// Rename User

$('#fio_change').slideUp(0);

$('#user_name').click(function(){
  $('#fio_change').slideToggle(300);
  
 
})

$('#name_change_save').click(function(){

  let regexp = /\w+/gm;
  let regexp2 = /\w+/gm;

  let name_change = $('#name_change').val();
  let secName_change = $('#secName_change').val();

  if(regexp.test(name_change) && regexp2.test(secName_change)){
   

    $.post('php/users.php',{'name_change':name_change,'secName_change':secName_change,'userID':localStorage.getItem('userID')}, function(result){
        console.log(result);
        result = result.split('/');
        $('#user_name').html(result[0]+" "+result[1]);
        $('#fio_change').slideToggle(300);
       
        localStorage.setItem('userName',result[0]);
        localStorage.setItem('userSecName',result[1]);
    })
  }
});




// Go to home page

$('#home').click(function(){
  document.location.href = 'index.html';
});
$('#nav_logo').click(function(){
  document.location.href = 'index.html';
});

$('#about_footer').click(function(){
  document.location.href = 'about.html';
});

$('#help_footer').click(function(){
  document.location.href = "help.html";
})

//  productsTop = $(".products_cards_men").position();

// $('#products_nav').click(function(){
//   $('html, body').animate({
//     scrollTop: productsTop.top,
//   }, 500);
// });







// Mail Form
$("#feedback_form").submit(function() { //Change
  var th = $(this);
  $.ajax({
      type: "POST",
      url: "php/mail.php", //Change
      data: th.serialize()
  }).done(function() {
      alert("Your feedback sent. We will reply to you as soon as possible!");
      setTimeout(function() {
          // Done Functions
          th.trigger("reset");
      }, 1000);
  });
  return false;
});



