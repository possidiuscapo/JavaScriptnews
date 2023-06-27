'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded', function () {
    let myConvas = document.getElementById("canvas");

    let context = myConvas.getContext('2d');
    context.font = 'bold 30px sans-serif'

    context.fillStyle = 'black';
    context.fillText("Hello World !", 20, 150);

    context.fillStyle = 'green';
    context.fillText("Hello World !", 20, 200);

    context.fillStyle = 'red';
    context.fillText("Hello World !", 20, 250);

    context.fillStyle = 'red';
    context.fillText("Hello", 100, 400);

    context.fillStyle = "";
    context.fillText("Hello", 200, 0);

    context.fillStyle = "blue";
    context.fillText("World", 100+context.measureText("Hello").width+110, 30);

    context.fillStyle = "blue";
    context.fillText("!", 100+context.measureText("World").width+110, 30);


});