/**
 * Bonus 1 de Calculaprompt : gestion des erreurs
 */

const nombre1 = Number(window.prompt("Donner le premier nombre"));
const operaArith = window.prompt("Donner l'operateur arithmetique +, -, *, /");
const nombre2 = Number(window.prompt("Donner le deuxieme nombre"));

if (isNaN(nombre1) || isNaN(nombre2)) {
    window.alert("Veuillez entrer des valeurs valides")
} else if (operaArith === "+" ||
    operaArith === "*" ||
    operaArith === "-" ||
    operaArith === "/") {
        
    if (operaArith === "+") {
        let calcula = nombre1 + nombre2;
        console.log(nombre1 + " + " + nombre2);
        console.log("La somme des deux nombres donne : " + calcula);
    }
    if (operaArith === "*") {
        let calcula = nombre1 * nombre2;
        console.log(nombre1 + " * " + nombre2);
        console.log("La multiplication des deux nombres donne : " + calcula);
    }
    if (operaArith === "-") {
        let calcula = nombre1 - nombre2;
        console.log(nombre1 + " - " + nombre2);
        console.log("La soustraction des deux nombres donne : " + calcula);
    }
    if (operaArith === "/") {
        let calcula = nombre1 / nombre2;
        console.log(nombre1 + " / " + nombre2);
        console.log("La division des deux nombres donne " + calcula);
    }
}else{
    console.log("L'operateur n'est pas valide");
}
