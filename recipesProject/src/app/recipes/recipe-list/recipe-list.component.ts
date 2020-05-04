import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Beautiful Test Recipe', 
    'This is a test, look at all those information!!', 
    'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg'),
    new Recipe('PANCAKES OMG', 
    'This is a test, look at all those information!!', 
    'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
