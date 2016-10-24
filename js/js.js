$(function(){

var width = document.documentElement.clientWidth;
    if(width > 739){
       teg = document.getElementById('srcoll');
       teg.setAttribute('data-slick','{"slidesToShow": 2, "slidesToScroll": 1}')
    }

$('.single-slide').slick({
    dots: true
    /*vertical:true,
    verticalSwiping:true,
    autoplaySpeed:3000,
    autoplay:true*/
});

$('#header_menu').on("click",function(){console.log("ok");});

var hidden = 0;

$('#header_menu').on("click",function(){
    if(hidden !=0){
          $('.header_menu').animate({"width":"0"})
hidden = 0;
    }else{
         $('.header_menu').animate({"width":"200"})
hidden = 1;
    };
});

$('#header_menu_open').on("click",function(){$('.header_menu').animate({"width":"0"})});


//if you need to send at json format use this code
/*
var message = [];
$("#send").on("click",function(){
	var input_name = $("#input_name").val();
	var input_email = $("#input_email").val();
	var input_textarea = $("#input_textarea").val();
	message = [input_name, input_email, input_textarea];
	console.log(message);
	$.ajax({
		dataType: 'json',
   		type: "get",
   		//url: "test.php",
   		data: message,
   			success: function(msg){
     			alert( "Data Saved: ");
   }
 })
})*/

});