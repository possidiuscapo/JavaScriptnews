`user strict`
import  Worker  from "./employee.js";
class Programmer extends Worker {
    #language
    constructor(name, age, wage, language){
        console.log(`Appel du constucteur Programmer. Création du programmer ${name}`);
        super(name, age, wage);
        this.#language = language;
        console.log(`Programmer ${name} créé avec succès`);
    }
    get language(){
        console.log("appelle du getteur");
        return this.#language;
    }
    set language(newLangue){
        console.log("appelle du getteur");
        this.#language = newLangue;
    }
    
    present(){
        console.log(`On m'appelle ${this.name} et j'ai ${this.age} ans. J'ai comme salaire ${this.wage} à la fin du mois; mes languages de programmation ${this.language} `);
    }
}
export default Programmer