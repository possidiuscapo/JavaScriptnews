/**
 * Bonus 2 de Calculaprompt : document.write
 */

const nombre1 = Number(window.prompt("Donner le premier nombre"));
const operaArith = window.prompt("Donner l'operateur arithmetique +, -, *, /");
const nombre2 = Number(window.prompt("Donner le premier nombre"));

if (isNaN(nombre1) || isNaN(nombre2)) {
    window.alert("Veuillez entrer des valeurs valides")

} else {
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
        default: // else
            document.write("L'operateur entrer n'est pas pris en ")
            break;
    }
    document.write(" donne le resultat suivant " + calcula)
}