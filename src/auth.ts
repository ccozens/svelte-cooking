/* import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';



export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
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
});
 */

/* export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Google]
}); */

// auth.ts
import { SvelteKitAuth } from '@auth/sveltekit';
import { getAuthOptions } from './hooks.server'; // Import getAuthOptions

export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
	const authOptions = await getAuthOptions();
	// Use the retrieved authOptions here
	return authOptions;
});
