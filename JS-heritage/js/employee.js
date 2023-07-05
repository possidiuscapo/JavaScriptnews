
`user strict`

import Person from "./person.js";

class Worker extends Person {
    #wage
    constructor(name, age, wage){
        console.log(`Appel du constucteur Employé. Création de l'employé ${name}`);
        // Appelle du constructor du parent dans le constuctor de l'enfant;
        super(name, age);
        this.#wage = wage;
        console.log(`Employé ${name} créé avec succès`);
    }
    get wage(){
        return this.#wage;
    }

    set wage(newSalary){
        this.#wage = newSalary;
    }
    present(){
        console.log(`On m'appelle ${this.name} et j'ai ${this.age} ans. J'ai comme salaire ${this.wage} à la fin du mois`);
    }
}
export default Worker;