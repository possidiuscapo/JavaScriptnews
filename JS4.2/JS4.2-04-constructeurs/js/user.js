`user strict`

export default class User {
    // #job = null;
    constructor (nme, frstNam, _job = null){
        this.name = nme;
        this.firstName = frstNam;
        this.job = _job;
    }
    
   
    fullName() {
        return `Salut!!
Je reponds au nom de ${this.name} ${this.firstName}. Je suis un ${this.job} en formation`;
    };
}

let user1 = new User("CAPO", "Penouël");
console.log(user1)
console.log(user1.fullName())

