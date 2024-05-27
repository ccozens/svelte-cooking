// auth.ts
import { SvelteKitAuth } from '@auth/sveltekit';
import { getAuthOptions } from './hooks.server'; // Import getAuthOptions

export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
	const authOptions = await getAuthOptions();
	// Use the retrieved authOptions here
	return authOptions;
});
