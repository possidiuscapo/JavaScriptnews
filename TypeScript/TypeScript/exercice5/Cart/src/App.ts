
import { Product } from "./Product";

import { Details, Delivery, MockDetails, MockDelivery } from "./data/MockProducts";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"

let products: Array<Product<Details, Delivery>> = [];

// parcourir ce tableau Arrau<Details> pour en extraire
MockDetails.forEach((details:Details)=> {
    const detailId = details.id
    const mockDelivery = MockDelivery.find((el) => el.id === detailId);

    products.push(new Product <Details , Delivery>(details, mockDelivery.delivery));
})

console.log(products)

// Afficher les produits dont l'option est special

let special = products.filter((el)=>el.option === Delivery.Special);
console.log(
    "***************Other Special******************" 
);
console.log(special);


