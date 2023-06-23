function renverser(str) {
    let wordSplit = str.split("");
    let wordReverse = wordSplit.reverse();
    let wordJoin = wordReverse.join("");
    return wordJoin;
}

let word = prompt("Tapez un mot");
// let words = ("Tapez un mot");

console.log(renverser(word));
