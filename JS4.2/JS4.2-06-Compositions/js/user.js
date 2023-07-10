`user strict`

export default class User {
    #job
    #age
    constructor(nme, frstNam, _job = null, myOld) {
        this.name = nme;
        this.firstName = frstNam;
        this.#job = _job;
        this.#age = myOld;
    }
    get job(){
        return this.#job;
    }
    set job (newJob) {
        this.#job = newJob;
    }
    get age(){
        return this.#age.getAge();
    }
    set age (newAge) {
        this.#age = newAge;
    }

};


class Age {
    #age;
    constructor (myOld) {
        this.#age = myOld;
    }
    
    get age(){
        return this.#age;
    }
    set age (newAge) {
        this.#age = newAge;
    }
    getAge (){
        if ((typeof this.#age === "number") && this.#age >= 10 && this.#age <= 150){
           this.#age = this.#age; 
        }else{
            this.#age = null;
        }
        return this.#age;

    }
}
let user1 = new User("CAPO", "Penouël", "developer", new Age(15));
console.log(user1)
console.log(user1.age);

