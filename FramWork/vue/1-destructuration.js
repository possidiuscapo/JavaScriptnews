`user strict`


/*const notes = [17, 14, 12, 13]
const nicoles = [0]
const erfero = [1]
const oderic = [2]
const martin = [3]
*/
const notes = [17, 14, 12, 13];
const [nicoles,erfero, , martin] = notes;

console.log(nicoles);
console.log(erfero);
// console.log(oderic);
console.log(martin);
console.log(notes);
const person= {
    firstname : "John", 
    lastname :"Doe",
    age : 21
}

const {firstname, lastname, age} = person // ES6

// const fn = person.firstname
// const ln = person.lastname
// const a = person.age

// changement des variables qui sont contenu dans l'objet
const { firstname : fn, lastname : ln, age : a} = person;
console.log
