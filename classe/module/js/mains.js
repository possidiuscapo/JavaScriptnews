`use strict`

const submit = document.querySelector('#inputSubmit');
// console.log(submit)

export class Request {
    constructor(inputValue) {
        this.inputValue;
    };
    
    getInputs(elements) {
        this.inputValue = elements;
        // console.log(this.email, this.password);
        for (let i = 0; i< this.inputValue.length;  i++){
            console.log(this.inputValue[i].value)
        }
    }
}

// console.log(email, password);
submit.addEventListener("click", function (event) {
    event.preventDefault();
    let nomDeFamille = document.querySelector('.wraper form input:first-of-type');
    let password = document.querySelector('.wraper form input:nth-of-type(2)');
    let tabInput = [];
    tabInput.push(nomDeFamille);
    tabInput.push(password)
});

let request = new Request();