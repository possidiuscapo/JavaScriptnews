`user strict`

/**
 * L'opearateur spread (....) en JavaScript permet de copier rapidement tour 
 */

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr5 = [1, 2, 3, ...arr2]
const arr6 = [...arr2, 7, 8, 9]
const arr7 = [...arr5, 7, 8, 9]
console.log(arr7);
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

console.log({ arr3, arr4 })
console.log(...arr1)
console.log(arr3, arr4)

console.log({ ..."bonjour" })
// console.log(...1)

// fonction de somme de nombres entiers
function add(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
add(1, 5, 6, 8, 5, 4, 4);