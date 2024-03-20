import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { slug } = params;
	const { all_recipes, id_and_names_and_slugs } = await parent();

	//  declare functions

	function getRecipeName(slug: string) {
		const recipeIdNameSlug = id_and_names_and_slugs.find(
			(id_and_name_and_slug) => id_and_name_and_slug.slug === slug
		);

		if (!recipeIdNameSlug) {
			throw new Error(`Recipe with slug ${slug} not found`);
		}
		return recipeIdNameSlug.name;
	}

	function getRecipe(recipeName: string) {
		const recipeData = all_recipes.find((recipe) => recipe.recipe_name === recipeName);

		if (!recipeData) {
			throw new Error(`Recipe with name ${recipeName} not found`);
		}

		return recipeData;
	}

	// run functions
	const recipeName = getRecipeName(slug);
	const recipe: Recipe = getRecipe(recipeName);

	return {
		recipe
	};
};

// export const load: PageServerLoad = async ({ params }) => {
// 	const { slug } = params;
// 	function getRecipe(slug: string) {
// 		return all_recipes[slug];
// 	}

// 	return {
// 		recipe: getRecipe(slug)
// 	};
// };
