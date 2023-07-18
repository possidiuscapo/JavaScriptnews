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
/*
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

const car: {
    CarYear: CarNear
} = {
    CarYear: "2023"
}

// Comment créer interface

interface Animal {
    name: string,
    specie: string,
    leges: number,
}

const animal: Animal = {
    name: "Booba",
    specie: "Ours",
    leges: 4,
}
*/
/*
function add(a: number | string, b: number | string): number {
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
add()
console.log(add(5, 6))
console.log(add("bonjour", "possi"))
console.log(add(8, "shoes"))


type Rectangle = {
    x: number,
    y: number
};
type Cercle = {
    cx: number,
    cy: number,
    cr: number,

};
let shape: Rectangle | Cercle = {
    x: 23,
    y: 59,
    cx: 15,
    cy: 10,
};

type UserType = {
    readonly id?: number,// pour les rendres optionnel il faut mettre devant eux un point d'interrogation et pour les mettres en lecture seule, il faut mettre readonly derrière eux
    fname: string,
    lname: string,
    age?: number,
};

let person1: UserType = {
    id: 1,
    fname: "John",
    lname: "Doe",
    age: 98,
};

person1.id = 20;
console.log(person1)
*/
// les classes en TypeScript
class Person {
    /*
    private fname : string; //propriété | membre | champs de la classe
    private lname : string; //propriété | membre | champs de la classe
    private age : number
    constructor(fname: string, lname: string, age : number) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    */
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getfname() {
        return this.fname;
    }
}
class Programmer extends Person {
    constructor(fname, lname, age, language) {
        super(fname, lname, age);
        this.language = language;
    }
    ;
    getlanguages() {
        return `${this.fname} ${this.lname} maitrise les languages ${this.language.join(", ")}`;
    }
}
const p1 = new Person("John", "Doe", 25);
console.log(p1.getfname());
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
add();
