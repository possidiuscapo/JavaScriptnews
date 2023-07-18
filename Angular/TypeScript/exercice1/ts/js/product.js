"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Music = /** @class */ (function () {
    function Music() {
    }
    Music.prototype.play = function () {
        return "play music";
    };
    return Music;
}());
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Guitar;
}(Music));
