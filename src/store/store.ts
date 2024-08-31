import { computed, effect, signal } from "@preact/signals-react";
import { Product } from "../models/product.model";

export class Store {
    productsState = signal<Product[]>(this.loadData());

    selectedProducts = computed<number>(() => {
        return this.productsState.value.filter((p) => p.selected).length;
      });
      
    total = computed<number>(() => {
        return this.productsState.value.filter((p) => p.selected).reduce((acc, p) => acc + p.price, 0);
    }); 

    constructor() {
        effect(() => { 
            console.log("selectedProducts", this.selectedProducts.value);
            localStorage.setItem("produits", JSON.stringify(this.productsState.value));
         });
    }

    loadData (){
        const data = localStorage.getItem("produits");
        if (data) {
            return JSON.parse(data);
        } else {
            return [
                { id: 1, name: "M3 Max", price: 100, selected: false },
                { id: 2, name: "iPhone 15", price: 200, selected: false },
                { id: 3, name: "packt book", price: 300, selected: true },
            ];
        }
    }

    select (product: Product) {
        this.productsState.value = this.productsState.value.map((p) => {
          return (p.id === product.id) ? {...p,  selected : !p.selected} : p;
        });
    }

    remove (product: Product) {
        this.productsState.value = this.productsState.value.filter((p) => p.id !== product.id);
    }

    add (product: Product) {   
        this.productsState.value = [...this.productsState.value, product];
    }

    
}

export const store = new Store();