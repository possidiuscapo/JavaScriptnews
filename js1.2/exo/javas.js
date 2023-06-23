// const isUserAnonymous = false;

// if (!isUserAnonymous) {
//     console.log("Salut Magali !")
// }



// const nombre1 = Number(window.prompt("Donner le premier nombre"));
// const operaArith = Number(window.prompt("Donner l'operateur arithmetique +, -, *, /"));
// const nombre2 = Number(window.prompt("Donner le deuxieme nombre"));

// console.log(isNaN(nombre1));
// console.log(isNaN(nombre2));
// // if (isNaN(nombre1)) || isNaN(nombre2) {
// //     console.log("veil");
// // }
// /**
//  * Bonus 1 de Calculaprompt : gestion des erreurs
//  */

// const nombre1 = Number(window.prompt("Donner le premier nombre"));
// const operaArith = window.prompt("Donner l'operateur arithmetique +, -, *, /");
// const nombre2 = Number(window.prompt("Donner le deuxieme nombre"));


// if (isNaN(nombre1) || isNaN(nombre2)) {
//     window.alert("Veuillez entrer des valeurs valides")

// } else {
//     switch (operaArith) {
//         case ("+"):
//             calcula = nombre1 + nombre2;
//             console.log("La somme des deux nombres " + nombre1 + " + " + nombre2);
//             break;

//         case ("*"):
//             calcula = nombre1 * nombre2;
//             console.log("La multiplication des deux nombres " + nombre1 + " * " + nombre2);
//             break;

//         case ("-"):
//             calcula = nombre1 - nombre2;
//             console.log("La soustractions des deux nombres " + nombre1 + " - " + nombre2);
//             break;

//         case ("/"):
//             calcula = nombre1 / nombre2;
//             console.log("La division des deux nombres " + nombre1 + " / " + nombre2);
//             break;

//         default: // else de fin de "if...else if...else"
//             console.log("L'operateur entrer n'est pas pris en ")
//             break;
//     }
// }
// console.log("donne le resultat suivant " + calcula)


alert("Bienvenu dans notre de jeu de chances!")

let nombres = 10;

let nombreDeviner = Number(window.prompt("Veuillez deviner un nombre entre 0 et 20"));


while (nombreDeviner < nombres || nombreDeviner > nombres) {
    if (isNaN(nombreDeviner)) {
        nombreDeviner = window.prompt("Merci de bien vouloir entre rien d'autre qu'un nombre"); 
        if (nombreDeviner > nombres) {
            nombreDeviner = window.prompt("Vous y êtes presque! Veuillez entrer un nombre inférieur au nombre précédemment entrer");
        } else if (nombreDeviner < nombres) {
            nombreDeviner = window.prompt("Vous y êtes presque! Veuillez entrer un nombre supérieur au nombre précédemment entrer");
        }
    }
}

alert("Bravo à vous. Vous avez deviné(e) le nombre juste")