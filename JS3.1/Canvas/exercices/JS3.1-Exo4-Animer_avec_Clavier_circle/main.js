'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let circle = {
    color: "#FF0000",
    radius: 20,
    x: 30,
    y: 30
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    let canvasDom = document.querySelector('#canvas');
    // console.log(canvasDom);

    ctx = canvasDom.getContext('2d');

    displayCircle();

    document.addEventListener("keydown", function (eventMove) {
        switch (eventMove.key) {
            case "ArrowRight":
                if (circle.x + circle.radius < canvasDom.width) {
                    circle.x+= 10;
                };
                break;

            case "ArrowLeft":
                if (circle.x - circle.radius > 0) {
                    circle.x-= 10;
                }
                break;

            case "ArrowUp":
                if (circle.y - circle.radius > 0) {
                    circle.y-= 10;
                }
                break;

            case "ArrowDown":
                if (circle.y + circle.radius < canvasDom.height) {
                    circle.y+= 10;
                };
                break;
        };

        displayCircle();
    });

    function displayCircle() {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

        ctx.fillStyle = '#DDDDDD';

        ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

        ctx.fillStyle = circle.color;

        ctx.beginPath();

        ctx.arc(circle.x, circle.y, circle.radius, 0,2*Math.PI);

        ctx.fill();
    }

});