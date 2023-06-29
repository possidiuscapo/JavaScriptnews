

/**
 * les timers (miniteurs)
 * Les timers en JavaScript
 * un timer est un mécanisme qui vous permet d'exécuter du code à des intervalles spécifique ou après un délai donné. Cela peut être utile dans de nombreux scénarios tels, que l'actualisations périodique de données, l'animation la gestion des délais d'attente, etc
 * Deux fonction principales sont utilisée pour créer des timers: 
 * setTimeout : cette fonction permet d'exécuter une fonction une seule fois après un délai spécifié
 * setInterval: cette fonction permet d'exécuter une fonction de manière répétée à interval régulier.
 * Pour arrêter l'exécution d'un timer créé avec "setTimeout" et "setInterval", vous pourvez utiliser la fonction "clearTimeout" ou "clearInterval", respectivement, en passant l'dentifirant du timer retourné lors de sa création
 * Exemple :
 *              let timerId = setTimeout (function(){
 *                  console.log("Ce message ne sera jamais affiché.");
 *                 }, 5000);
 *                  clearTimepout(timerId); Arrêt le timer avant qu'il ne 
*/


// setTimeOut(function, temps)

// setTimeout(() => {
//     alert("Bonjour !")
// }, 1000);



// setInterval(() => {
//     console.log("un")
//     console.log("deux")
//     console.log("trois")
// }, 2000);

// Utilité de setInterval


document.addEventListener("DOMContentLoaded", function () {
    let interval;
    const button1 = document.querySelector("div button:first-of-type");
    const button2 = document.querySelector("div button:last-of-type");
    // const button3 = document.querySelector(".reset");
    let compter = 0;
    button1.addEventListener("click", function () {
        interval = setInterval(() => {
            // compter++;
            console.log(compter++);

        }, 500);
    });

    button2.addEventListener("click", function () {
        clearInterval(interval)
    });
});
