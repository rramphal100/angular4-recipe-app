import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  recipes: Recipe[];

  constructor(private route: ActivatedRoute,
              private location: Location) {
    this.recipes = [new Recipe(0, 'Banana Bread',
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
    });
  }

  findRecipeById(id: number): Recipe {
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }

    return null;
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
