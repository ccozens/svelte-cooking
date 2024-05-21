// database hooks
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import * as schema from '$lib/drizzle/schema';

const sql = neon(DRIZZLE_DATABASE_URL);
// @ts-expect-error as sql causes a ts error
export const db = drizzle(sql, { schema });

// auth hooks
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';

const authOptions = {
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
	],
	secret: AUTH_SECRET,
	trustHost: true
};

export const handle = SvelteKitAuth(authOptions);
