document.addEventListener("DOMContentLoaded", function(){
    const myCanvas = document.getElementById('canvas');
    // console.log(myCanvas);
    
    let context = myCanvas.getContext('2d');
    context.fillStyle = '#FFA00D';
    context.strokeStyle = '#FF0000';

    // Ligne 1

    context.fillRect(20, 40, 60, 20);
    context.fillRect(90, 40, 60, 20);
    context.fillRect(160, 40, 60, 20);
    context.fillRect(230, 40, 60, 20);
    context.fillRect(300, 40, 60, 20);
    context.fillRect(370, 40, 60, 20);
    context.fillRect(440, 40, 60, 20);
    context.fillRect(510, 40, 60, 20);

    // Ligne 2

    context.fillRect(20, 70, 60, 20);
    context.fillRect(90, 70, 60, 20);
    context.fillRect(160, 70, 60, 20);
    context.fillRect(230, 70, 60, 20);
    context.fillRect(300, 70, 60, 20);
    context.fillRect(370, 70, 60, 20);
    context.fillRect(440, 70, 60, 20);
    context.fillRect(510, 70, 60, 20);

    // Ligne 3

    context.fillRect(20, 100, 60, 20);
    context.fillRect(90, 100, 60, 20);
    context.fillRect(160, 100, 60, 20);
    context.fillRect(230, 100, 60, 20);
    context.fillRect(300, 100, 60, 20);
    context.fillRect(370, 100, 60, 20);
    context.fillRect(440, 100, 60, 20);
    context.fillRect(510, 100, 60, 20);

    // Ligne 4

    context.fillRect(20, 130, 60, 20);
    context.fillRect(90, 130, 60, 20);
    context.fillRect(160, 130, 60, 20);
    context.fillRect(230, 130, 60, 20);
    context.fillRect(300, 130, 60, 20);
    context.fillRect(370, 130, 60, 20);
    context.fillRect(440, 130, 60, 20);
    context.fillRect(510, 130, 60, 20);

    // Ligne 5

    context.fillRect(20, 160, 60, 20);
    context.fillRect(90, 160, 60, 20);
    context.fillRect(160, 160, 60, 20);
    context.fillRect(230, 160, 60, 20);
    context.fillRect(300, 160, 60, 20);
    context.fillRect(370, 160, 60, 20);
    context.fillRect(440, 160, 60, 20);
    context.fillRect(510, 160, 60, 20);

    // La ligne du scrollBall

    context.fillRect(250, 478, 100, 20);


    //  pour defenir le contour du rectangle avec du strokeRect

    context.strokeRect(20, 190, 60, 20);
    context.strokeRect(90, 190, 60, 20);
    context.strokeRect(160, 190, 60, 20);
    context.strokeRect(230, 190, 60, 20);
    context.strokeRect(300, 190, 60, 20);
    context.strokeRect(370, 190, 60, 20);
    context.strokeRect(440, 190, 60, 20);
    context.strokeRect(510, 190, 60, 20);


    context.font = "bold 25px Verdana";

    context.fillStyle = "red";

    context.fillText("Hello", 200, 30);

    context.fillStyle= "blue";
    context.fillText("World", 100+context.measureText("Hello").width+110, 30);

});