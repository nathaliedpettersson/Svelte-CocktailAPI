import { json } from "@sveltejs/kit";
export async function GET() {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const result = await res.json();
    const ingredients = [...Array(15)]
        .map((_value, i) => ({
        name: result.drinks[0][`strIngredient${i + 1}`],
        amount: result.drinks[0][`strMeasure${i + 1}`],
    }))
        .filter((ingredient) => ingredient.name);
    return json({
        name: result.drinks[0].strDrink,
        instructions: result.drinks[0].strInstructions,
        ingredients,
        thumbUrl: result.drinks[0].strDrinkThumb,
    });
}
//# sourceMappingURL=+server.js.map