/*
Type de variable

- number : les nombres qu'ils soitent entiers ou à virgule
- string : représente les chaînes de caractère
- boolean : représente les valeurs booléennes c-a-d true ou false  
- array: représente une tableau contenant des éléments du même type
- object : represente tout type d'objet
- null : représent la valeur "null"
- undifined : repeésent la valeu "undefined"

Type de varaiable TS

- any : représente un type non spécificié du dynamique // on peut pas l'utiliser dans nos code
- unknown : représente un élément dont on ne connaît pa le type  // on peut pas l'utiliser dans nos code
- enum : représente un ensemble de valeur nommées
- tuple : représente un tableau avec un nombre fixe d'élements de types différents
*/

// enum stratus{
//     PaID = "paid",
//     Pending = "ending",
//     Denied = "denied",
// }
// let x; 
// function veriefiy() {
//     if (true){
//         x = stratus/paddi
//     }
// }

type UserType = {
    fname: string,
    lname: string,
    age: number,
};

let user: UserType = {
    fname: "John",
    lname: "Doe",
    age: 25,
};
// console.log(user)
console.log(user.fname)
console.log(user.lname)
console.log(user.age)

type Rectangle = {
    height: number,
    width: number,
};
const rect: Rectangle = { height: 35, width: 50 };
// console.log(rect)
console.log(rect.height)
console.log(rect.width)

type CarNear = string;
type MyNumber = number;

const car : {
    CarYear : CarNear
} = {
    CarYear : "2023"
}

interface Animal{
    name: string,
    specie: string,
    leges: number,
}

const animal: Animal = {
    name: "Booba",
    specie: "Ours",
    leges: 4,
}