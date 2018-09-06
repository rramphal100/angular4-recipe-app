import { Recipe } from '../../model/recipe';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[];
    recipe_in_progress: Recipe;
    current_classes: any;
    current_styles: any;
    constructor(private router: Router) {

        this.current_classes = { 'darkbg': false };

        this.current_styles = { 'font-size' : '150%' };

        this.recipe_in_progress = Recipe.createBlank();

        this.recipes = [
            new Recipe(0, 'Banana Bread',
                'This is my favorite banana bread recipe!', null, null, null,
                4, '1 Hour', null),
            new Recipe(1, 'Scrambled Eggs',
                'My recipe for the best scrambled eggs you will ever have!',
                null, null, null, 2, '10 Minutes', null),
            new Recipe(2, 'Fried Rice',
                'My favorite type of friend rice!', null, null, null,
                6, '1 Hour 30 Minutes', null),
            new Recipe(3, 'Bread', 'Easy bread recipe. Great with butter and tea!',
            [{'ingredient': 'flour', 'measure': '2 cups'}],
            [{'instruction': 'Pour flour in a bowl.', 'photo': null}],
            null, 4, '60 Minutes', null)
        ];
    }

    public addRecipeClicked() {
        console.log(JSON.stringify(this.recipe_in_progress, null, 2));
        this.recipes.unshift(this.recipe_in_progress);
        this.recipe_in_progress = Recipe.createBlank();
    }

    public zoomInOnRecipe(recipe) {
        console.log('User clicked on a recipe:');
        console.log(JSON.stringify(recipe, null, 2));
    }

    public toggleBackground() {
        const newValue = !this.current_classes['darkbg'];
        this.current_classes = { darkbg: newValue };
    }

    public toggleFontSize() {
        if (this.current_styles['font-size'] === '150%') {
            this.current_styles['font-size'] = '175%';
        } else {
            this.current_styles['font-size'] = '150%';
        }
    }

    userClickedOnRecipe(recipe_id: number): void {
        this.router.navigateByUrl('/recipes/' + recipe_id);
    }
}
