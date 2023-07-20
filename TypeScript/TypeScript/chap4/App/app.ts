`use strict`
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

function decorateur(target:Function) {
    console.log("Appel du décorateur");
    target()
}

@decorateur
class Deco{
    constructor(){
        console.log("constructeur de user");
    }
}

class BugReport {
    type = "Rapport";
    title: string;
    constructor(t:string) {
        this.title = t
    }
}

function sealed(constructor:Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}
let obj = new BugReport("Pas d'accès internet")