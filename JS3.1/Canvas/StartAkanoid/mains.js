'user strict'

let chrono = {
    heure: 0,
    minute: 0,
    seconde: 0,
    milliseconde: 0
}

document.addEventListener("DOMContentLoaded", function () {
    let ballDirectionX = 1; // direction de la balle
    let ballPositionX = 0; // direction de la balle
    let ballDirectionY = 1; // direction de la balle
    let ballPositionY = 0; // direction de la balle
    let speed = 20; // direction de la balle
    const ball = document.querySelector("#ball"); // direction de la balle
    const start = document.querySelector("#btn1"); // direction de la balle
    const stop = document.querySelector("#btn2"); // direction de la balle
    const windowWidthX = window.innerWidth; // direction de la balle
    const windowHeightY = window.innerHeight; // direction de la balle
    // const sentance = document.querySelector("#chrono")
    let width = windowWidthX - ball.offsetWidth;
    let height = windowHeightY - ball.offsetHeight;
    let animation;
    let compters;


    // animateBall()

    start.addEventListener("click", function () {
        start.style.display = "none";
        stop.style.display = "inline-block";
        // Change l'état des boutons
        // start.disabled = true;
        // stop.disabled = false;
        // Démarre l'animation
        // compters = setInterval(getCompters, 1000 / 60);
        requestAnimationFrame(animateBall);
    });

    stop.addEventListener("click", function () {
        clearInterval(compters);
        start.style.display = "inline-block";
        stop.style.display = "none";
        // Change l'état des boutons
        // start.disabled = false;
        // stop.disabled = true;
        // Arrête l'animation
        cancelAnimationFrame(animation);
    });



    function animateBall() {
        ballPositionX += speed * ballDirectionX;
        ballPositionY += speed * ballDirectionY;

        if (ballPositionX >= width && ballPositionX >= 0) {
            ballDirectionX = -1;
            color();
        } else if (ballPositionX <= 0) {
            ballDirectionX = 1;
            color();
        }
        if (ballPositionY >= height && ballPositionY >= 0) {
            ballDirectionY = -1;
            color();
        } else if (ballPositionY <= 0) {
            ballDirectionY = 1;
            color();
        }

        ball.style.transform = "translate(" + ballPositionX + "px ," + ballPositionY + "px)";

        animation = requestAnimationFrame(animateBall)
    };
    function color() {
        ball.style.backgroundColor = `rgb(${generatorRandomNumber(0, 255)},${generatorRandomNumber(0, 255)}, ${generatorRandomNumber(0, 255)})`;
    }
    
    function generatorRandomNumber(min, max) {
        return Math.floor(Math.random() * ((max - min + 1) + min))
    }
    generatorRandomNumber();
});

/** 
 * // // largeur du navigateur
    // // console.log(windowWidth)
    // console.dir(ball1.scrollWidth)
    
    const  updateSpeed = 1000 / 60;
    

    // moveWidthSetIntervalAller();

    // setInterval(moveWidthSetInterval, updateSpeed);

    function moveWidthSetIntervalAller () {
        position.ball1++;

        if (position.ball1 > (windowWidth - getFullWidth(ball1))) {
            position.ball1 = +ball1.scrollWidth;
        };
        ball1.style.transform = "translateX("+position.ball1+"px)";
        requestAnimationFrame(moveWidthSetIntervalAller)
    };

    moveWidthSetIntervalRetour ()

    function moveWidthSetIntervalRetour () {
        position.ball1 = windowWidth;

        if (position.ball1 < (windowWidth - getFullWidth(ball1))) {
            position.ball1 = -ball1.scrollWidth;
        };
        ball1.style.transform = "translateX(-"+position.ball1+"px)";
        requestAnimationFrame(moveWidthSetIntervalRetour)
    };

    // ball1.style.transform = "translateX("+ (windowWidth - ball1.scrollWidth) + "px)";
    
    
    function getFullWidth(element) {
        // Récupérer les propriétés calcule de l'élément
        const style = window.getComputedStyle(element);
    
        // Récupérer la largeur la bordure  et le padding de l'élément
    
        const width = element.offsetWidth;
        const borderLeftWidth = parseFloat(style.borderLeftWidth);
        const borderRightWidth = parseFloat(style.borderRightWidth);
        const paddingLeft = parseFloat(style.paddingLeft);
        const paddingRight = parseFloat(style.paddingRight);
        
    
        // Calcule de toute les longueur incluant largeur, border + padding
        const fullWidth = width + borderLeftWidth +borderRightWidth + paddingLeft + paddingRight;
    
        console.log(style);
        return fullWidth;
    }
});

*/