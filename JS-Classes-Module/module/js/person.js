`user strict`

class Joueur {
    #name;
    #post;
    constructor(name, poste){
        this.#name = name;
        this.#post = poste;
    }
    get name(){
        console.log("appelle du getteur");
        return this.#name;
    }
    set name(newName){
        this.#name = newName;
    }
    get post(){
        console.log("appelle du getteur du post");
        return this.#post;
    }
    set post(newPost){
        this.#post = newPost;
    }
    
}
let cr7 = new Joueur("Cristiano", "Attaquant")
console.log(cr7.name);
cr7.post = "def";
console.log(cr7.post);
// console.log(cr7.poste)

class Professionnel extends Joueur{
    agent;
    #contract;
    constructor(name, poste, agent, contract){
        super(name, poste);
        this.agent = agent;
        this.#contract = contract;
        // console.log(`${}`)
    };
    get contract() {
        return this.#contract;
    };
    set contract(modContract) {
        this.#contract = modContract;
    }
}
