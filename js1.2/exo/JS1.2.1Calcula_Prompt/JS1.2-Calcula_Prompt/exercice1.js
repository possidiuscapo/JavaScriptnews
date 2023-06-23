/**
 * Créer ici le projet « Calculaprompt ».
*/


const nombre1 = Number(window.prompt("Donner le premier nombre"));
const operaArith = window.prompt("Donner l'operateur arithmetique +, -, *, /");
const nombre2 = Number(window.prompt("Donner le premier nombre"));
let operation

if (operaArith === "+") {
    operation = nombre1 + nombre2;
    console.log(nombre1 + " + " + nombre2);
    console.log("La somme des deux nombres donne : " + operation);
}
if (operaArith === "*") {
    operation = nombre1 * nombre2;
    console.log(nombre1 + " * " + nombre2);
    console.log("La multiplication des deux nombres donne : " + operation);
}
if (operaArith === "-") {
    operation = nombre1 -  nombre2;
    console.log(nombre1 + "- " + nombre2);
    console.log("La soustraction des deux nombres donne : " + operation);
}
if (operaArith === "/") {
    operation = nombre1 / nombre2;
    console.log(nombre1 + " / " + nombre2);
    console.log("La division des deux nombres donne " + operation);
}