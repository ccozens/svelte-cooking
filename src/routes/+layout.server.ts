import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import type { Recipe, IdAndNameAndSlug } from '$lib/types';

import * as schema from '$lib/drizzle/schema';

export const load: LayoutServerLoad = async () => {
	const sql = neon(DRIZZLE_DATABASE_URL);
	// @ts-expect-error
	const db = drizzle(sql, { schema });

	const all_recipes: Recipe[] = await db.query.recipes.findMany();

	// extract recipe_id and recipe_name into array
	const id_and_names: [number, string][] = [];
	all_recipes.forEach((recipe) => id_and_names.push([recipe.recipe_id, recipe.recipe_name]));



	// generate a slug in camelCase from the name and generate a slug array
	const slugs = id_and_names.map((name) => {
		return name[1].toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	});

	// join names and slug arrays into a single object
	const id_and_names_and_slugs: IdAndNameAndSlug[] = id_and_names.map((id_and_name, index) => {
		return {
			id: id_and_name[0],
			name: id_and_name[1],
			slug: slugs[index]
		};
	});


	return { all_recipes, id_and_names_and_slugs };
};
