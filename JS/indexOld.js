/*Soft Scroll*/

$(document).ready(function () {
   $("#logo").click(function () { 
       $("html, body").animate({
           scrollTop: $("#banner").offset().top}, 500);
    });

    $("#home").click(function () { 
        $("html, body").animate({
            scrollTop: $("#cardsTitle").offset().top}, 500);
     });
        
});

//function filter blocks

$(document).ready(function(){
    $("#fieldFinder").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("h4").filter(function() {
        $("".card).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});


$("#fieldFinder").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("h4").filter(function() {
        $(this).parents(".card").toggle( $(this).text().toLowerCase().indexOf(value) > -1 )
    });
});

/*function(){
    $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1); //Maior que -1 pq o -1 é not found-*/


/*Hidden NavBar-Projeto futuro

window.onscroll = function (){
    hiddenScrollNav();
}

function hiddenScrollNav() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        document.getElementById("navegation").style.top = "0";
        
    }
    else{
        document.getElementById("navegation").style.top = "-60px";
    }
 }
    
*/






