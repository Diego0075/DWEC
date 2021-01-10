//  Ejercicio 5
 $('ol li:first').hide();

// Ejercicio 8

$('div:first').css("font-size","15px")
$('div:eq(1)').css("font-size","25px")
$('div:eq(2)').css("font-size","35px")

// Preguntar por error?
$('h2.eq(0)').click(function(){
    $('h2.eq(0)').hide
})

// c y d color con mouse hover

$('p.eq(0)').hover(function(){
    $('p.eq(0)').css("background","red")
})

// o

$('p').bind("mouseover", function(){
    $('p').css("background-color","red")

})

$('p').bind("mouseout", function(){
    $('p').css("background-color","black")
})