/**
document.addEventListener("DOMContentLoaded", function () {
    const submit = document.querySelector('.wraper form input:last-of-type');

    // console.log(email, password);
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        const email = document.querySelector('.wraper form input:first-of-type');
        const password = document.querySelector('.wraper form input:nth-of-type(2)');
    })
    class Request {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        };

        getInputs() {

        }
    }
});
*/

let person1 = {
    firstname : "John",
    lastname : "Doe",
    courir () {
        console.log("je cours 🚲 2015")
    }
};

person1.firstname = "Gabriel"
person1.age= 24;

console.log(person1);

console.log(person1.age);
console.log(person1.firstname);
person1.courir();