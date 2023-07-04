`user strict`
import { Request } from "./mains.js";

`use strict`;

document.addEventListener("DOMContentLoaded", function () {
    
    
    const submit = document.querySelector('#inputSubmit');
    // console.log(submit)
    
    class Request {
        constructor(inputValue) {
            this.inputValue;
        };
        
        // getInputs(elements) {
        //     this.inputValue = elements;
        //     // console.log(this.email, this.password);
        //     for (let i = 0; i< this.inputValue.length;  i++){
        //         console.log(this.inputValue[i].value)
        //     }
        // }
        getInputs(elements) {
            elements.forEach((e) => {
                console.log(e.value);
                
            });
        }
    }
    
    // console.log(email, password);
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        let nomDeFamille = document.querySelector('.wraper form input:first-of-type');
        let password = document.querySelector('.wraper form input:nth-of-type(2)');
        let tabInput = [];
        tabInput.push(nomDeFamille);
        tabInput.push(password)

        let request = new Request();
        request.getInputs(tabInput)

    });
    




let person1 = {
    firstname : "John",
    lastname : "Doe",
    courir () {
        console.log("je cours 🚲 2015")
    }
};

person1.firstname = "Gabriel"
person1.age= 24;

console.log(person1);

console.log(person1.age);
console.log(person1.firstname);
person1.courir();


/*
class Animal {
    constructor (e,n){
        // console.log("appel du constructeur");
        this.espece = e;
        this.nbrDePattes = n;
    }
};
// l'objet chien est une instance de la classe Animal
let obj = new Animal("chien", 4);
let obj2 = new Animal("oiseaux", 2);
let obj3 = new Animal("chicken", 2);

console.log(Animal)
console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj.espece);
*/

});


/**
 * les modules sont un mécaninisme de regroupement et d'organisation du code Js ils permettent de découper un programme en plusieurs fichiers  appelé
 * 
 * Pour créer un module JavaScript, on utilise le mot-clé "export" pour déclarer les éléments (fonction, variables, classes) que vous souhaitez rendre accessibles à d'autres modules. Par exemple:
 * <pre> 
 * // Dans un fichier nommé " module.js"
 * // Exporter une fonction 
 * export function maFonction (){
 *      // code de la fonction
 * }
 * 
 * 
 * // Exporter une variable  
 * export const maVariable = 42
 * 
 * 
 * 
 * 
 */


