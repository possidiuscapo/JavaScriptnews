`use strict`

class Recipe {
    notes : number []
    constructor(
        notes: number
    ) { 
        this.notes = notes
    }
}
let recipes: Recipe[] = [12,15];
console.log(recipes.notes)