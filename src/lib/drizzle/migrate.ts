/*
migrate.ts based on https://neon.tech/blog/api-cf-drizzle-neon
dotenv, postgres and tsx added as dev dependencies: postgres.js to establish a connection when running migrations, dotenv for loading environment variables, and tsx for executing TypeScript files.
*/

import { config } from 'dotenv';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

config({ path: '.env' });

// // max: 1 ensures queries are executed in order and over the same connection.
const databaseUrl = drizzle(
	postgres(`${process.env.DRIZZLE_DATABASE_URL}`, { ssl: 'require', max: 1 })
);

const main = async () => {
	try {
		await migrate(databaseUrl, { migrationsFolder: 'src/lib/drizzle/generated' });
		console.log('Migration complete');
	} catch (error) {
		console.log(error);
	}
	process.exit(0);
};
main();
