import * as recipes from '$lib/data';
import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types';

// Tell TypeScript that recipes is an object that can be indexed with any string, and it will return a Recipe
const typedRecipes: { [key: string]: Recipe } = recipes;

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  console.log('slug', slug);
console.log('typedRecipes', typedRecipes);
  function getRecipe(slug: string) {
    return typedRecipes[slug];
  };

  const found = getRecipe('greenFritters');
  console.log('found', found);

        return {
            recipe: getRecipe(slug),
        }
};
