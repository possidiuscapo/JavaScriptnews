`user strict`

document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector("#todotext");
    let di = document.querySelector(".button");
    
    let ul = document.querySelector("#todo-Ul")

    let myList = document.getElementsByTagName("LI")
    // console.log(input, divInput, myList);
    let statusPara = document.getElementById("")
    let todos = [];

    input.addEventListener("keydown", ajoutDeTache());


function ajoutDeTache(eve) {

    console.log(eve.key)
    // if (eve.key === "Enter"){
    //     // console.log("ajout de la tâche dans la console...");
    //     // pour recuperer la valeur d'une input
    //     console.log(input.value)
    //     const todo = input.value;
    //     todo.push(todo)
    //     input.value = "";
    // }
    updateStatus();
    insertTodo();
}

function insertTodo() {
        // creer une balise en html
        const liElement = document.createElement("li");
        // ajout d'une classe a notre nouvelle balise creer
        liElement.classList.add("todo");
        // ajout du text dans le tableau
        const task = todos[ todos.length - 1]
        liElement.innerHTML = task;

        ul.append(liElement)

}

function updateStatus() {
    if( todos.length > 0   ){
        statusPara.style.display = "none";
    }else{
        statusPara.style.display = "block";
    }
}

});