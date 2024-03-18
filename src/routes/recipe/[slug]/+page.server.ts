import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { slug } = params;
	const { all_recipes, namesAndSlugs } = await parent();

	// function lookupRecipeId(slug: string) {
	// 	return all_recipes[slug];
	// }

	function getRecipeName(slug: string) {
		return namesAndSlugs.find((nameAndSlug) => nameAndSlug.slug === slug);
	}

	const recipeName = getRecipeName(slug);

	function getRecipe(recipeName: string) {
		return all_recipes.find((recipe) => recipe.recipe_name === recipeName);
	}

	const recipe: Recipe = getRecipe(slug);

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
