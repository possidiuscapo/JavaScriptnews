`user strict`

class Person {
    #name;
    #age;
    constructor(name, age){
        console.log(`Appel du constucteur Person. Création de l'objet person ${name}`);
        this.#name = name;
        this.#age = age;
        console.log(`Person ${name} créé avec succès`);
    }
    // accesseur || getters
    get name(){
        console.log("appelle du getteur");
        return this.#name
    }
    get age(){
        console.log("appelle du getteur");
        return this.#age
    }
    set name(newName){
        console.log("appelle du getteur");
        this.#name = newName;
    }
    set age(newAge){
        console.log("appelle du getteur");
        this.#age = newAge;
    }
    present(){
        console.log(`On m'appelle ${this.name} et j'ai ${this.age} ans `);
    }
}
export default Person