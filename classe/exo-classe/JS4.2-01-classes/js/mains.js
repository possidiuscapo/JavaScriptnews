`user strict`

import { Animal } from "./modul.js";

document.addEventListener("DOMContentLoaded", function () {
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
})

import { dealWithForm } from "./main.js";
document.addEventListener("DOMContentLoaded", dealWithForm);



    /*
        const request = document.querySelector("form");
    
        request.addEventListener("submit", (action) => {
            action.preventDefault();
    
            const form = action.currentTarget;
            const getData = new FormData(form);
            const email = getData.get("email");
            const name = getData.get("name");
            console.log(`${email}`);
            console.log(`${name}`);
    
        });
    */
    /*
            class Animal {
                espece = ["canivore", "herbivore", "omnivore"];
                milieu = ["terre", "eau", "feu", "air"];
                genre = {
                    femelle : 5,
                    male : 8,
                    dragon : 10
                }
    
            }
    
            let eltClass = new Animal;
            console.log(eltClass);
            console.log(eltClass.espece[2]);
    */
    /*
        class Animal {
            constructor (esp, ndp) {
                console.log("Appel du constructeur");
                this.espece = esp;
                this.nbrDePattes = ndp;
            }
    
        }
    
        // l'objet chien est une instance de la classe Animal
        let objetChien = new Animal("chien", 8);
        console.log(objetChien);
    
    */



        export class Request {

            getInputs(input) {
                input.forEach((elementsInput) => {
                    document.querySelector("body").innerHTML = `<strong>Les différentes valeurs insérées dans les champs input sont : ${elementsInput.value}</strong>`;
                    console.log(elementsInput.value);
                });
            }
        
        }



        "use strict"
        import {Request} from "./request.js";
        
        export function dealWithForm() {
            const buttonSubmit = document.getElementById("btn");
            const input = document.querySelectorAll("input");
        
            buttonSubmit.addEventListener("click", (action) => {
                action.preventDefault();
                const request = new Request();
                request.getInputs(input);
            });
        }