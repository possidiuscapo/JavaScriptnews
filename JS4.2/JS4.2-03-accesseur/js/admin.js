`user strict`

import User from "./user.js"

class Admin extends User {
    // constructor (name, firstname) {
    //     super(name, firstname);
        
    // };
    canEditArticles () {
        return true;
    }
};

export default Admin;