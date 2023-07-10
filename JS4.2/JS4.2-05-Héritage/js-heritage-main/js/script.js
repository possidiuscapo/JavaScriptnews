`user admin`

import User from "./user.js"
import Admin from "./admin.js"

let user1 = new User();
// console.log(user1);
console.log(user1.fullName("Capo", "Possi"));

let admin = new Admin();
// console.log(admin);
console.log(admin.canEditArticles());