// database hooks
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import * as schema from '$lib/drizzle/schema';

const sql = neon(DRIZZLE_DATABASE_URL);
// @ts-expect-error as sql causes a ts error
export const db = drizzle(sql, { schema });

// auth options
import Google from '@auth/core/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';

export async function getAuthOptions() {
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
	return authOptions;
}

// auth hooks https://authjs.dev/reference/sveltekit
import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from './auth';
import { sequence } from '@sveltejs/kit/hooks';

const authorizationHandle: Handle = async ({ event, resolve }) => {
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/authenticated')) {
		const session = await event.locals.auth();
		if (!session) {
			// Redirect to the signin page
			throw redirect(303, '/auth/signin');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
};

const redirectHandle: Handle = ({ event, resolve }) => {
	// redirect from addRecipe to authenticated/addRecipe
	if (event.url.pathname.startsWith('/addRecipe')) {
		throw redirect(303, '/authenticated/addRecipe');
	}
	return resolve(event);
};
// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(redirectHandle, authenticationHandle, authorizationHandle);
