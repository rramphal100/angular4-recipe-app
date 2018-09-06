import { Recipe } from '../../model/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[];

    constructor() {
        this.recipes = [
            new Recipe('Banana Bread',
                'This is my favorite banana bread recipe!', null, null, null),
            new Recipe('Scrambled Eggs',
                'My recipe for the best scrambled eggs you will ever have!',
                null, null, null),
            new Recipe('Fried Rice',
                'My favorite type of friend rice!', null, null, null)];
    }
}
