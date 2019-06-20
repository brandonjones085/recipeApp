import { ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('Carrots', 10),
    new ingredient('Onions', 20),
    new ingredient('Poop dogs', 30),
    new ingredient('Chic burgs', 40)
  ];

  constructor() {}

  ngOnInit() {}
}
