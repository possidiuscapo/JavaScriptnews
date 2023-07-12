`use strict`

function findLongestWordLength(str) {
  // convertir la phrase en un tableau donc par mots
  let convertStrInTable = str.split(' ');
  console.log(convertStrInTable)
  // créer un tableau vide di
  let tab = [];
  let obj = {};
  // console.log(convertStrInTable)
  for (let i = 0; i < convertStrInTable.length; i++) {
    let newConvert = convertStrInTable[i].split("");
    console.log(newConvert)
    tab  = tab.push(newConvert[i])
    // console.log(tab);
    // let longueur = convertStrInTable[i].length;
    
    // console.log(longueur);
    // console.log(Math.max(maxStr)); 
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


  https://unpkg.com/vue@3
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>