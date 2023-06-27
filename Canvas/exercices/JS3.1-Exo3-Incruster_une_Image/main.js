'use strict';


document.addEventListener('DOMContentLoaded', function () {
    let myConvas = document.getElementById("canvas");

    let context = myConvas.getContext('2d');

    // Incrustation d'une image dans notre élément Canvas
    let myImg = new Image();
    myImg.src = "./3wa-logo.png";

    // myImg.addEventListener("load", function(){

    //     context.drawImage(myImg, 360, 100);
    // });

    myImg.onload = function () {

        context.drawImage(myImg, 360, 100);
    };

    // function addImages(src, 360, 100, context) {
    //     let myImg = new Image();
    //     myImg.src = "./3wa-logo.png";
    // }

});