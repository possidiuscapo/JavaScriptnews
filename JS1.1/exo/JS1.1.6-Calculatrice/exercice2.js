/**
 * Créer ici le projet bonus de calculatrice.
 */

let nom = String(window.prompt("Quel est votre Nom"));
let prenom = String(window.prompt("Quel est votre Prenom"));
let age = Number(window.prompt("Quel est votre Age"));
let x = Number(window.prompt("Donner la valeur du nombre x"));
let y = Number(window.prompt("Entrez le nombre y"));

let result = x + y;
console.log("Salut " + nom, +" ",+ prenom, +" ",+"vous avez",+" ",+age);
console.log(x, '+', y , '=' ,result);
