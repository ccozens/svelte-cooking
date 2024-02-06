import * as recipes from '$lib/data';
import type { PageServerLoad } from './$types';
import type { Recipe, NameAndSlug } from '$lib/types';

// Tell TypeScript that recipes is an object that can be indexed with any string, and it will return a Recipe
const typedRecipes: { [key: string]: Recipe } = recipes;

export const load: PageServerLoad = async () => {
	const names: string[] = [];

	// loop through recipes and add each recipe.name to the names array
	Object.keys(typedRecipes).forEach((key) => {
		names.push(typedRecipes[key].name);
	});

	// generate a slug in camelCase from the name and generate a slug array
	const slugs = names.map((name) => {
		return name
			.toLowerCase()
			.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	});



	// join names and slug arrays into a single object
	const namesAndSlugs: NameAndSlug[] = names.map((name, index) => {
		return {
			name: name,
			slug: slugs[index]
		};
	});

	return {
		props: namesAndSlugs
	};
};
