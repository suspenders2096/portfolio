$(window).on('load', function(){

    // vide.js - bg video
    $('#header').vide('./video/window',{
        bgColor:'#66747e'
    })
});

$('#link').on('click', function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 700);
});

 
