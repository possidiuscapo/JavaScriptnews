/**
 * Créer ici le projet « Hello You ».
 */

const demandeDeNom = window.prompt("Hello! Your name");
const demandeDePrenom = window.prompt("Hello! Your firstname");
let annee = Number(window.prompt("Votre annee de naissance, s'il vous plait"));
let age = 2023 - annee;
console.log("Salut " + demandeDeNom + " " + demandeDePrenom + " " + "votre age est "+ age);




// const demandeDeNom = window.prompt("Hello! Your name");
// const demandeDePrenom = window.prompt("Hello! Your firstname");
// let annee = Number(window.prompt("Votre annee de naissance, s'il vous plait"));
// let age = Date. - annee;

// console.log("Salut " + demandeDeNom + " " + demandeDePrenom + " " + "votre age est "+ age);

// let gender = window.prompt("Votre age svp!")

if(age < 21){
    console.log("Tu n'es pas un majeur")
}
else{
    console.log("Tu es un majeur")
}

const x = 4;
const y = 4;
console.log( x !== y)