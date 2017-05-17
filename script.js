var blinking = setInterval(blinker, 1600);

$('.info').css('display', 'none');

$('.intro').show();

//old below

 $('.info').click(function(e){
    $('.info').fadeOut(1000);
     $('.panel-background').fadeToggle(1000);
     
     if($(e.currentTarget).is('#intro-info')){
        clearInterval(blinking);
     }else if($(e.currentTarget).hasClass('patterns')){
         var id = e.currentTarget.id.slice(13);
         
         $('#pattern-info-' + (parseInt(id) + 1)).fadeIn(1000);        
     }
});

$('#pattern').click(function(){
    $('#pattern-info-1').fadeIn(1000);
});

function blinker(){
    $('#click-prompt').fadeOut(800);
    $('#click-prompt').fadeIn(800);
}

