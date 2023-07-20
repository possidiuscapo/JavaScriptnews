`use strict`

export class Book {
    private _name : string;

    get name():string{return this._name }
    set name(name:string){this._name = name  }
}