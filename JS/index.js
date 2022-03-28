//Soft Scroll

$(document).ready(function () {
   $("#logo").click(function () { 
       $("html, body").animate({
           scrollTop: $("#banner").offset().top}, 500);
    });

    $("#home").click(function () { 
        $("html, body").animate({
            scrollTop: $("#cardsTitle").offset().top}, 500);
     });

     

//function filtrar empresas

    $("#fieldFinder").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("h4").filter(function() {
            $(this).parents(".card").toggle( $(this).text().toLowerCase().indexOf(value) > -1 )
        });
    });
});



