export interface RecipeType {
    id: string;
    image: string;
    title: string;
    summary: string;
    sourceName: string;
    aggregateLikes: number;
    weightWatcherSmartPoints: number;
    readyInMinutes: number;
    servings: number;
    pricePerServing: number;
    extendedIngredients: [];
    ingredient: {
        id: number | string;
        original: original;
    };
    instructions: any;
    nutritions: any;

}

export type CommentBody = {
    recipeID: string;
    comment: string;
    username: string;
    userAvatar: string;
    blockComment: boolean
}

export interface CommentType extends CommentBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: 'comment';
}