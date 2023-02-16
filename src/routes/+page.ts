// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

export const prerender = true;
import type { DrinkType } from "src/types";

    // Load fetch and get response from index.json
	export async function load({ fetch }: { fetch: any}) {
		
		const drink: DrinkType = await (await fetch('./index.json')).json();

        // Logs drink in console with all information
		console.log(drink);

		return {
                drinkProp: drink 
		}
	}