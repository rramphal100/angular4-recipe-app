export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public title: string;
    public description: string;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;

    constructor(title: string, description: string,
        ingredients: Ingredient[],
        instructions: Instruction[], cover_photo: string) {
            this.title = title;
            this.description = description;
            this.ingredients = ingredients;
            this.instructions = instructions;
            this.cover_photo = cover_photo;
    }
}
