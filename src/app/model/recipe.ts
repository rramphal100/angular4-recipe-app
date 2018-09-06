export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public id: number;
    public title: string;
    public description: string;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;
    public feeds: number;
    public preparation_time: string;
    public keywords: string[];

    constructor(id: number, title: string, description: string,
        ingredients: Ingredient[],
        instructions: Instruction[], cover_photo: string,
        feeds: number, preparation_time: string, keywords: string[]) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.ingredients = ingredients;
            this.instructions = instructions;
            this.cover_photo = cover_photo;
            this.feeds = feeds;
            this.preparation_time = preparation_time;
            this.keywords = keywords;
    }

    public static createBlank() {
        return new Recipe(-1, '', '', null, null, '', 0, '', null);
    }

    public static recipeFromJson(obj: any): Recipe {
        return new Recipe(obj.id, obj.title, obj.description, obj.feeds,
            obj.preparation_time, obj.ingredients, obj.instructions,
            obj.cover_photo, obj.keywords);
    }
}
