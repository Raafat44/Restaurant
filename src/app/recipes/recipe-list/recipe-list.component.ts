import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipes:recipe[];
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  }

}
