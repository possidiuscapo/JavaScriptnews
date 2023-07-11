`user strict`
/**
 * function qui verifie si un nombre est positif ou negatif
 * @param {number}  num
 * @returns true | false
 */
function isPosition(num) {
    /**
     * let a = 2;
    if  (num >= 0){
        return true;
    }  else {
        return false;
    }
    */

    //    (conditon) ? "valeur à retourner si vrai" : "valeur si faux";

return num >= 0 ? true : false;

    // return num >= 0 ? "num est positif" : "num est negatif";

 }
console.log(isPosition(3)); // 3 est positif 
console.log(isPosition(-3)); // -3 est negatif