/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/


const home = document.querySelector(".container .red");
home.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Vous avez cliqué sur ce lien")
});

document.addEventListener("DOMContentLoaded", function () {
        
})