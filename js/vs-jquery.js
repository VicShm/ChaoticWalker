function new_three_throws() {	
    throw_value  = 0;
    oneOfThree = 1;
    multiplicity = 1;
    double = 0;
    triple = 0;
    bull = 0;
    $('[id^="tablo"]').html('');
}

function random_direction(n) {
    const now = new Date()
    $(".all_ways").css("visibility","hidden");
    $("#w"+n).css("visibility","visible");
    x = Math.floor(Math.random()*now.getSeconds())
    randomColor = Math.floor(Math.random()*16777215).toString(16); 
    $('body').css('background-color', '#'+ randomColor)
    x = Math.floor(Math.random()*n)+1
    if ((n == 4)&&(x==3)) {x=5}    
    $("#d"+x).css("visibility","visible");    
}


$('#button2').click( function () {random_direction(2)});

$('#button3').click( function () {random_direction(3)});

$('#button4').click( function () {random_direction(4)});

$('#button5').click( function () {random_direction(5)});

$('#button6').click( function () {random_direction(6)});

$('#button7').click( function () {random_direction(7)});