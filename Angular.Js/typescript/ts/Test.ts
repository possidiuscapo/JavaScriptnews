`use strict`

// Type de varible en TypeScrit

// let|const nomVariable : typeVarible= valeur;

let x: number = 5;
const pi: number = 3.14;
// hexdecimal
let hex: number = 0xf00d;
// binaire
let bin: number = 0b001; 
// sring
let color: string = "blue";
//boolean
let isFree: boolean = false;

//array of number
let arr: number[] = [1, 2, 3, 4]; // array constitué de number
let str: string[] = ['a', 'b', 'c', 'd'];
let arr2: [string, number] = ['a', 5];

let arr3 = ['a', 5, 3, 6, 5, false]

//Type de retour pour une fonction
// fuctu....nomde la fonction,(paramètre: type) : type de retour du return
function add(a:number, b:number): number {
    return a + b;
}

function sayHello(): void {
    console.log("Hello world")
}