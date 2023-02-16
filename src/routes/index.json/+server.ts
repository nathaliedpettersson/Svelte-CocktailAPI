// Import types and json to get response to work

import type { IngredientType} from "src/types";
import { json } from '@sveltejs/kit';

// Create fetch and await response. Promise will always return a response, so no need to specify a type
export async function GET(): Promise<Response> {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const result = await (res).json();

    // The ingredients array from this API will always have 15 lines but it's not always that all of those are filled. For ex, there might usually just be 3-5 ingredients
    // Loop through our array of ingredients and display each name and amount of ingredient
 const ingredients: IngredientType[] = [...Array(15)]
 .map((_value, i) => ({
    name: result.drinks[0][`strIngredient${i + 1}`],
    amount: result.drinks[0][`strMeasure${i  + 1}`]
 })) 
 .filter((ingredient) => ingredient.name);

 // Instead of returning body we return json and in "body" we define what to send to our +page.svelte
 return json({ 
     
        name: result.drinks[0].strDrink,
        instructions: result.drinks[0].strInstructions,
        ingredients,
        thumbUrl: result.drinks[0].strDrinkThumb
    })
 
}
