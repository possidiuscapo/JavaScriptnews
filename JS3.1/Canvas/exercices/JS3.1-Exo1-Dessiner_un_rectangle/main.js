'use strict';

document.addEventListener('DOMContentLoaded',function(){
    let myConvas = document.getElementById("canvas");

    let context = myConvas.getContext('2d');
    context.strokeStyle = 'black';
    context.strokeRect(150, 50, 100, 50);

    context.strokeStyle = 'green';
    context.strokeRect(550, 50, 100, 50);

    context.fillStyle = 'red';
    context.fillRect(350, 200, 100, 50)

    context.strokeStyle = 'green';
    context.strokeRect(200, 400, 400, 50);
});