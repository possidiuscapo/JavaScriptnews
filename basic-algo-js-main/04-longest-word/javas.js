`use strict`

function findLongestWordLength(str) {
  // convertir la phrase en un tableau donc par mots
  let convertStrInTable = str.split(' ');
  // créer un tableau vide di
  let tab = [];
  // console.log(convertStrInTable)
  for (let i = 0; i < convertStrInTable.length; i++) {
    let longueur = convertStrInTable[i].length;
    
    tab = tab.push(convertStrInTable[i].length)
    console.log(tab[i]);
    // console.log(longueur);
    console.log(Math.max(maxStr)); 
  }
  // return str[i].length;
}
  // findLongestWordLength();
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// let str = 'the quick brown fox jumped over the lazy dog'
// let tab = str.split(' ')
// console.log(tab);

// let longueur = convertStrInTable[i].length();
  // console.log(convertStrInTable);
