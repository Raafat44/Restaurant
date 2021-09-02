import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe:recipe ;
  id:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>
      {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.id);
      })
  }

}
