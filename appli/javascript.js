
/**********************
 * 
 * mercredi 14/03/2023
 * 
***********************/

// console.log(tab);

// let tab = tab => {
//     for (let i = 0; i < tab.length; i++) {
//         // tab[i] = tab[i] * tab[i];
//         // tab[i] = tab[i] **2;
//         tab[i] **= 2;
//     }
//     return tab
// }
// // const tableau = [5, 15, 25, 35, 40];
// console.log(tab([5, 15, 25, 35, 40]));
// console.log(tab([]));


// let tableau = [5, 15, 25, 35, 40];

// tableau.forEach(function (tab) {
//     console.log(tab **2);
// })
// let tbl = [5, 15, 25, 35, 40];

// tbl.forEach(function (tab) {
//     for (let i = 0; i < tab.length; i++) {
//         tab[i] **= 2;
//     }
//     console.log(tab **2);
// });
// calcul carré des elemants d'un tableau!!
/*function square (tableau) {
    let tempArray =  [];
    for (let i = 0; i < tableau.length; i++) {
        tempArray[i] = tableau[i] ** 2;
    }
    return tempArray
}
square()
square()
square()
*/
// ma methode
// function retourner(str) {
//     let chaine = str + " ? ";
//     return chaine;
// }

// console.log(retourner("salut"));
// // premiere methode
// let arrowFunction = (strs) => {
//     let chaine = strs + " ?";
//     return chaine;
// }
// console.log(question);
// // deuxième methode
// let arrowFunction2 = strs => {
//     return strs + " ?";
// }
// console.log(question);
// // troisième methode
// let arrowFunction3 = strs => strs + " ?";

// console.log(question);

// let question = String(prompt(arrowFunction3("Quels est votre questions du jour")));

// console.log(question);



// function square(tableau) {
//     let tmp = [];
//     for (let i = 0; i < tableau.length; i++) {
//         // tmp[i] = tableau[i] * 2;
//         tmp.push(tableau[i] * 2)
//     }
//     return tmp;
// }
// console.log(square([2,3]));


/**********************
 * 
 * jeu 15/03/2023
 * 
***********************/



// console.log(num)
// let tableau3 = [11, 23, 4, 52, 6, 7];
// let tableau4 = [13, 101, 3, 54, 5, 6, 105];
// let tableau5 = [ 22, 3, 14, 5, 106, 1057];



/***
 *
 * function avec la methode "filter"
 * 
 ***/


function getEvenNumber3 (tableau) {
    return tableau.filter(function (el) {
        return el % 2 === 0;
    })
}
let tabl = [1, 2, 3, 4, 5, 6, 7];
console.log(getEvenNumber3(tabl));

