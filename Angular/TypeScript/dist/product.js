"use strict";
`use strict`;
class Product {
    constructor(name) {
        this._ref = 1000;
        this.name = name;
    }
    // getter afficher une valeur dans le code courant
    get name() {
        return this._name;
    }
    get ref() {
        return this._ref;
    }
    //setter
    set name(name) {
        this._name = name;
    }
    set ref(ref) {
        this._ref = ref;
    }
}
//  instance de la classe
let bike = new Product('Super Bike');
// affichera Super Bike
console.log(bike.name);
console.log(bike.ref);
