var blinking = setInterval(blinker, 1600);

$('.info').css('display', 'none');
//$('.panel-background').css('display', 'none'); //Just for editing purposes

$('.intro').show();
//$('.color').show();
//$('.predation').show();
//$('.uses-2').show();


$('.case').click(function(e){
    var id = e.currentTarget.id;
    $('.' + id).fadeIn(1000);
    $('.panel-background').fadeIn(1000);
})

 $('.info').click(function(e){     
     if($(e.currentTarget).is('#uses-1')){
         $('#uses-1').fadeOut(1000);
         $('#uses-2').fadeIn(1000);
     }else{
         $('.info').fadeOut(1000);
         $('.panel-background').fadeOut(1000);
     }
});

function blinker(){
    $('.click-prompt').fadeOut(1500);
    $('.click-prompt').fadeIn(1500);
}


/* OLD

$('#pattern').click(function(){
    $('#pattern-info-1').fadeIn(1000);
});
*/


