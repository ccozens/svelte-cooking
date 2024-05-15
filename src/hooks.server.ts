import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import * as schema from '$lib/drizzle/schema';


export const sql = neon(DRIZZLE_DATABASE_URL);
// @ts-expect-error as TS does throws" Argument of type 'NeonQueryFunction<false, false>' is not assignable to parameter of type 'NeonQueryFunction<boolean, boolean>'.
export const db = drizzle(sql, { schema });