import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import * as schema from '$lib/drizzle/schema';

const sql = neon(DRIZZLE_DATABASE_URL);
// @ts-expect-error as sql causes a ts error
export const db = drizzle(sql, { schema });
