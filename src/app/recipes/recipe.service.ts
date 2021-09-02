import { EventEmitter } from "@angular/core";
import { recipe } from "./recipe.model";

export class RecipeService
{
  myRecipes = new EventEmitter();
    recipes:recipe[] = [
        new recipe("A test recipe1","this is a simply test1","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F2276935.jpg&q=85"),
        new recipe("A test recipe2","this is a simply test2","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F2276935.jpg&q=85")
      ];
    getRecipes()
    {       
        return this.recipes.slice();
    }   
    recipeSelect(recipe : recipe)
    {
      this.myRecipes.emit(recipe);  
    }
    getRecipe(index:number)
    {
      return this.recipes[index];
    }
    
    
}