var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
`use strict`;
/*
function decorer (obj:any, method:string, descripteur: PropertyDescriptor) {
        console.log("Appelle du decorateur")
        console.log(descripteur)
        descripteur.value()
    }
    

class User {
    constructor(
        private name: string
        ) {  }
    @decorer

    greet(): void{
        console.log(`Salut ${this.name}`);
        
    }
}
let u = new User("Fils de Joie")

u.greet()
*/
/************************************* */
/*
function logClass(traget:any) {
    //target
    console.log(`classe ${traget.name} a été décorée`)
}

@logClass
class MaClasse {
    constructor(private name:string) {
        console.log("Instance de Maclasse crée")
    }
}
*/
/************************************* */
function decorateur(target) {
    console.log("Appel du décorateur");
    target();
}
let Deco = class Deco {
    constructor() {
        console.log("constructeur de user");
    }
};
Deco = __decorate([
    decorateur
], Deco);
class BugReport {
    constructor(t) {
        this.type = "Rapport";
        this.title = t;
    }
}
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let obj = new BugReport("Pas d'accès internet");
