function findLongestWordLength(str) {
  let convertStrInTable = str.split(' ');
  for (let i = 0; i < convertStrInTable.length; i++) {
    let longueur = convertStrInTable[i].length();
    console.log(longueur.Max()); 
  }
  return str.length;
}
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

let str = 'the quick brown fox jumped over the lazy dog'


// let longueur = convertStrInTable[i].length();
  console.log(convertStrInTable);
