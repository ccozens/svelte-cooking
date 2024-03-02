import type { Config } from 'drizzle-kit';

export default {
	schema: '$lib/drizzle/schema.ts',
	out: '$lib/drizzle/generated'
} satisfies Config;
