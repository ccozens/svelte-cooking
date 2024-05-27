import { pgTable, serial, text, json } from 'drizzle-orm/pg-core';

export const recipes = pgTable('recipes', {
	recipe_id: serial('id').primaryKey().notNull(),
	recipe_name: text('name').notNull(),
	source: text('source').notNull(),
	ingredients: json('ingredients').notNull(),
	steps: json('steps').notNull()
});
