<!-- We need to specify that we're using TypeScript as language -->

<script lang="ts">
import type { DrinkType } from "src/types";

// We pass in the drinkProp-object which has a type of DrinkType into the data variable
  export let data: { drinkProp: DrinkType };

  // Create a variable drinkState to use in render
	let drinkState: DrinkType = data.drinkProp;

	// On button:click we will show response from json
	const handleOnClick = async () => {
		const result = await (await fetch('./index.json')).json();
	// Set result to drinkState-variable
		drinkState = result;
	}
</script>

<!-- Get each data in the right element from drinkState variable where drinkProp is stored -->

<div class="wrapper">
	<h1>Cocktail API</h1>
	<button class="button" on:click={handleOnClick}>Get new drink</button>
	<h1 class="drink-name">{drinkState.name}</h1> 
	<img class="drink-thumb" src={drinkState.thumbUrl} alt="drink-thumb" />
	<p>{drinkState.instructions}</p> 

	<!-- Loop through each ingredient to show amount and name -->

	{#each drinkState.ingredients as ingredient}
	<p class="ingredient">{ingredient.amount} {ingredient.name}</p>
	{/each}
</div> 

<!-- Styling for render page -->

<style>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
}
.button {
	padding: 0.5rem 1rem;
	border: none;
	background-color: black;
	color: white;
	border-radius: 4px;
	cursor: pointer;
}

.drink-name {
	color: coral;
}

.drink-thumb {
	width: 300px;
	border-radius: 1rem;
}

p {
	max-width: 500px;
	text-align: center;
}

.ingredient {
	margin: 2px 0;
}
</style>