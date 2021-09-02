import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit  {
  ingredients:ingredient[] = [];
  constructor(private ShoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIng();
  }
 
}
