import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[]= [
        new Recipe('Gambas Recipe',
         'Shrimp with reis ',
          'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [
            new Ingredient('Gambas', 30),
            new Ingredient('Aroz', 500)
          ]),
        new Recipe('Another Test Recipe',
         'This is an other  Test Recipe',
          'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',[
            new Ingredient('Shrimp', 20),
            new Ingredient('Frensh Frise', 32)
          ])
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}