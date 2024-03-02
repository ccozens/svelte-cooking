import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import * as schema from '$lib/drizzle/schema';

export const load: LayoutServerLoad = async () => {
	const sql = neon(DRIZZLE_DATABASE_URL);
	const db = drizzle(sql, { schema });

	const result = await db.query.products.findMany();

	return { result };
};
