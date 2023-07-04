`user strict`

document.addEventListener("DOMContentLoaded", function () {
    class Animal {
        constructor (e,n){
            // console.log("appel du constructeur");
            this.espece = e;
            this.nbrDePattes = n;
        }
    };

    
    // l'objet chien est une instance de la classe Animal
    let obj = new Animal("chien", 4);
    let obj2 = new Animal("oiseaux", 2);
    let obj3 = new Animal("chicken", 2);
    
    console.log(Animal)
    console.log(obj);
    console.log(obj2);
    console.log(obj3);
    console.log(obj.espece);
    
    
});
export { Animal };