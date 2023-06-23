/**
 * Calculawrite
 */

let nombre1 = Number(window.prompt("Donner le premier nombre"));
while (isNaN(nombre1)) {
    nombre1 = Number(window.prompt("Donner le deuxieme nombre"));
}

let nombre2 = Number(window.prompt("Donner le deuxieme nombre"));
while (isNaN(nombre2)) {
    nombre2 = Number(window.prompt("Donner le deuxieme nombre"));
}

let operaArith = window.prompt("Donner l'operateur arithmetique + - * /");

switch (operaArith) {
    case ("+"):
        calcula = nombre1 + nombre2;
        document.write("La somme des deux nombres " + nombre1 + " + " + nombre2);
        break;
    case ("*"):
        calcula = nombre1 * nombre2;
        document.write("La multiplication des deux nombres " + nombre1 + " * " + nombre2);
        break;
    case ("-"):
        calcula = nombre1 - nombre2;
        document.write("La soustractions des deux nombres " + nombre1 + " - " + nombre2);
        break;
    case ("/"):
        calcula = nombre1 / nombre2;
        document.write("La division des deux nombres " + nombre1 + " / " + nombre2);
        break;
    default: 
        document.write("L'operateur entrer n'est pas pris en charge");
        break;
}
document.write(" donne le resultat suivant " + calcula);