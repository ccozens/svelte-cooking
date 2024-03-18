import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import type { NameAndSlug } from '$lib/types';

import * as schema from '$lib/drizzle/schema';

export const load: LayoutServerLoad = async () => {
	const sql = neon(DRIZZLE_DATABASE_URL);
	const db = drizzle(sql, { schema });

	const all_recipes = await db.query.recipes.findMany();

	// extract names into array
	const names: string[] = [];
	all_recipes.forEach((recipe) => names.push(recipe.recipe_name));

	// generate a slug in camelCase from the name and generate a slug array
	const slugs = names.map((name) => {
		return name.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	});

	// join names and slug arrays into a single object
	const namesAndSlugs: NameAndSlug[] = names.map((name, index) => {
		return {
			name: name,
			slug: slugs[index]
		};
	});

	return { all_recipes, namesAndSlugs };
};
