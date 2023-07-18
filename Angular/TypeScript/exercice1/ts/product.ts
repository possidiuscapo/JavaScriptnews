`use strict`
/*
class Product {
    private _name: string;
    protected _ref: number = 1000;
    
    constructor(name: string){
        this.name = name;
    }
    // getter afficher une valeur dans le code courant
    get name (): string{
        return this._name;
    }
    get ref (): number{
        return this._ref;
    }
    //setter
    set name (name: string){
        this._name = name;
    }
    set ref (ref: number){
        this._ref = ref;
    }
}
//  instance de la classe
let bike = new Product('Super Bike');
// affichera Super Bike
console.log(bike.name);
console.log(bike.ref)
*/

class Music {
    protected _instrument : string;
    play(): string{
        return"play music";
    }
}

class Guitar extends Music{
    
}