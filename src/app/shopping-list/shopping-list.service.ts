import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredients:ingredient[] = [];
   getIng()
   {
       return this.ingredients;
   }
   addIng( ing:ingredient)
   {
       this.ingredients.push(ing);
   }

}