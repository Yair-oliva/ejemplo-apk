
/*

modal login
document.querySelector(".login").addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.cerrar').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
*/


/* nav-sticky--jquery*/

var posTop = $('#contenedor-formulario').offset().top; /*guarda la posición a partir de la cual empieza a funcionar el sticky  */ 

$(window).resize(function(){   /* calcula el var posTop en caso de que se redimensione la ventana */
     var posTop = $('h2').offset().top;

});
$(document).ready(function(){$(window).scroll(function(){/*se ejecuta al hacer  el scroll*/
var PosScroll=$(this).scrollTop(); //guarda la posicion top
 
if ( PosScroll > posTop) {
     $('.contenedor-nav2').addClass('nav-sticky');
    

} else {
 $('.contenedor-nav2').removeClass('nav-sticky');

}





});

});


/*scroll suave */ 
var altHeader = $('.contenedor-nav2').height();



$(document).ready(function(){
   $('.slide').click(function(e){

     var linkHref = $(this).attr('href');
 

     $('html, body').animate({
       scrollTop: $(linkHref).offset().top - altHeader 
     },1000);

  

     e.preventDefault();
   

});

});



// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('.login');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


/*validacion inputs reguistro*/



/*nada*/




  $(document).ready(function(){

    $("#formulario3").hide();
    $("#formulario2").hide();

  });




$(document).ready(function(){
$("#vuelos").click(function(){
    $("#formulario").hide();
    $("#formulario3").hide();
    $("#formulario2").show();


});

});



$(document).ready(function(){
  $("#actividades").click(function(){
      $("#formulario2").hide();
      $("#formulario").show();
      $("#formulario3").hide();
  
  
  });
  
  });


  $(document).ready(function(){
    $("#hoteles-btn").click(function(){
        $("#formulario2").hide();
        $("#formulario3").show();
        $("#formulario").hide();
    
    
    });
    
    });
  


    $(".login-container").submit(function(){
       
          var user =  $("#user").val();
         localStorage.setItem("user",user);
    });

     

       var user = localStorage.getItem("user");
   

         if(user !=null || user != undefined ){
           let login_aviso =  $('#entrar');
           
        
           login_aviso.html("<strong>Bienvenido," + user+" </strong>") ;
           login_aviso.append("<a href='#' id='logout'>Cerrar Sesion</a>");
           
;           /*$('#entrar').hide();*/
          $("#logout").click(function(){
            location.reload();
            localStorage.clear(); 
           location.reload();



          });

         }     




  /*menu hamburguesa*/

$("#menu-ham").on('click', function(){
     $("#menu-principal").slideToggle();



});


  /*
  $(document).ready(function(){



    document.getElementById("menu-ham").addEventListener("click", function(){
    document.getElementById("menu-principal").style.display="block";
    menuactivo = false;
   
  }); 
  
});
     

  
     */
  