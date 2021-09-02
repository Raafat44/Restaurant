import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  constructor(private ShoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }
  addIng(k:any , a:any)
  {    
    this.ShoppingListService.addIng(new ingredient(k.value,a.value));    
  }

}
