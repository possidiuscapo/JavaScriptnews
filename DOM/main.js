

// getElementById : permet de recupéer un élément par son id retourne un élément HTML

const logoElement = document.getElementById("logo");
console.log(logoElement);


/*
    *  querySelector : permet de sélectionner un élément HTML. Â la différentce de getElementById, cette méthode 
 */
const logoElement2 = document.querySelector("div#logo");
console.log(logoElement, logoElement2);



const main = document.querySelector("main.main");
console.log(main);

const navlist0 = document.querySelector("li");
console.log(navlist0);

/*
    *  querySelectorAll : permet de sélectionner un groupe d'élément HTML appelés "Nodelist" (une liste des éléments HTML correspondant comme un tableau) 
 */


const navlist = document.querySelector("li");
console.log(navlist);
// console.log(navlist.item(1));

/**
 * classList: permet de d'ajouter ou de retirer des class
*/

const header = document.querySelector("header.header");
// header.classList.add("color", "bg-ligth");
// header.classList.remove("class-a", "container");
console.log(header);


/**
 * Event
 */
/**
document.addEventListener("DOMContentLoaded", hello);

function hello() {
    const myName = "Possidius";

    window.alert("Bonjour " + myName);
*/

// document.addEventListener("DOMContentLoaded", test);
/**
 * DOMContentLoaded : signifi que votre document a été charger
 */


/**
 * Evènement : des actions ou des occurence qui se produisent sur dans un programme ou sur une page web et auxquelles un code peut être associé pour y réagir.
 * Les évènements peuvent être déclenchés par différentes actions , tels que des clics de souris, des soumissions de formulaire, des pressions de touches...
*/

document.addEventListener("DOMContentLoaded", function () {
    const logoEl = document.getElementById("logo");
    console.log(logoEl);
    const main = document.querySelector("main");
    console.log(main);
    const li = document.querySelectorAll("li");
    console.log(li);
});

document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.querySelector(".footer button:first-of-type");
    const button2 = document.querySelector(".footer button:last-of-type");
    console.log(button1, button2)


    button1.addEventListener("click", function () {
        console.log("Vous avez fait un clique simple sur le boutton 1")
    });
    button1.addEventListener("dblclick", function () {
        console.log("Vous avez fait double clique sur le boutton 1")
    });

    button2.addEventListener("dblclick", function () {
        console.log("Vous avez appuyé sur le boutton 2")
    });
    const home = document.querySelector(".header ul li:first-child a");
    home.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Vous avez cliqué sur ce lien")
    });
    
    const input = document.querySelector("input:last-of-type");
    input.addEventListener("click", function (submit) {
        submit.preventDefault();
        console.log("Le formulaire a été soumit");
    });

    const formeElement = document.querySelector("form");
    formeElement.addEventListener("submit", function (ev) {
        ev.preventDefault();
        console.log("Validée");
    });


    let interval;
    const start = document.querySelector("div button:first-of-type");
    const stop = document.querySelector("div button:last-of-type");
    const para = document.getElementById("para");
    // const button3 = document.querySelector(".reset");
    let compter = 0;
    start.addEventListener("click", function () {
        interval = setInterval(() => {
            compter++;
            para.innerText = compter;

        }, 500);
    });

    stop.addEventListener("click", function () {
        clearInterval(interval);
    });


});


/**
 *  METHODE 
 * 
 * innerText : renvoie le contenu
 * innerHIML : renvoie le contenu HTML complet, même les balises HTML
 * textContent
 * 
 * sont toutes utilisées pour manupuler ou récupérer le contenu d'un élément HTML dans Javascript.
 * 
 * 
 */

const logo = document.getElementById("logo");
// console.log(logo.innerText);
logo.innerHTML= ("<strong>ArchiDesign</strong>")
// console.log(logo.textContent);
console.log(logo.innerHTML);
console.log(logo.innerText);
console.log(logo.textContent);