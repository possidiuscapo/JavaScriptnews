`user strict`

import Person from "./person.js";
import Worker from "./employee.js";
import Programmer from "./programmer.js";

let p1 = new Person("Jéry", 25);
console.log(p1);
p1.present();

let w1 = new Worker("Jacques", 34, 50000);
console.log(w1);
w1.present();

let pro1 = new Programmer("Possidius", 26, 5000000, ["HTML", "JavaScript", "CSS", "PHP"]);
console.log(pro1);
pro1.present();