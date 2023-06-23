const nom = window.prompt("Entrez votre nom");
const prenom = window.prompt("Entrez votre prenom");

let initiaux = nom.charAt(0).concat(prenom.charAt(0));
let var1 = nom.concat(" ",prenom)
console.log(initiaux.toUpperCase())
console.log(var1.toUpperCase());