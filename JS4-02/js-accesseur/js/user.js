`user strict`

export default class User {
    #name;
    #firstName;
    #job = null;
    constructor (nme, frstNam, job){
        this.#name = nme;
        this.#firstName = frstNam;
        this.#job = job;
    }
    
    fullName(name, firstName, job) {
        return `${this.name} ${firstName} ${job}`;
    };
}

let user1 = new User("Possidius", "capo", "developper");
console.log(user1)
user1.fullName()

