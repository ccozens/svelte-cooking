import { pgTable, serial, text, json } from 'drizzle-orm/pg-core';

export const recipes = pgTable('recipes', {
	recipe_id: serial('id').primaryKey().notNull(),
	recipe_name: text('name').notNull(),
	source: text('source').notNull(),
	ingredients: json('ingredients').notNull(),
	steps: json('steps').notNull()
});

/*
export const products = pgTable('products', {
	id: serial('id').primaryKey(),
	name: text('name'),
	source: text('source'),
	price: doublePrecision('price')
});

// db design based on https://dev.to/amckean12/designing-a-relational-database-for-a-cookbook-4nj6 with help from chatGPT for the relations.

export const recipes = pgTable('recipes', {
    recipe_id: serial('id').primaryKey(),
    recipe_name: text('name'),
    source: text('source')
});

export const recipe_ingredients = pgTable('recipe_ingredients', {
    recipe_ingredient_id: serial('id').primaryKey(), // Primary key for this table
    recipe_id: integer('recipe_id').references(() => recipes.recipe_id), // Foreign key referencing recipes.recipe_id
    ingredient_id: integer('ingredient_id').references(() => ingredients.ingredient_id), // Foreign key referencing ingredients.ingredient_id
    measurement_unit_id: integer('measurement_unit_id').references(() => measurement_units.measurement_unit_id), // Foreign key referencing measurement_units.measurement_unit_id
    quantity: doublePrecision('quantity')
});

export const measurement_units = pgTable('measurement_units', {
    measurement_unit_id: serial('id').primaryKey(),
    measurement_description: text('measurement_description')
});

export const ingredients = pgTable('ingredients', {
    ingredient_id: serial('id').primaryKey(),
    ingredient_name: text('name')
});

export const recipe_steps = pgTable('recipe_steps', {
    recipe_step_id: serial('id').primaryKey(),
    recipe_id: integer('recipe_id').references(() => recipes.recipe_id),
    step_description: text('description')
}); */

/* // Define relations
export const recipesRelations = relations(recipes, ({ many }) => ({
    ingredients: many(recipe_ingredients, {
        fields: [recipes.recipe_id], // The field(s) in recipe_ingredients table that reference the recipes table
        references: [recipe_ingredients.recipe_id] // The referenced field(s) in recipe_ingredients table
    })
}));


export const ingredientsRelations = relations(ingredients, ({ many }) => ({
    recipes: many(recipe_ingredients, {
        fields: [ingredients.ingredient_id], // The field(s) in recipe_ingredients table that reference the ingredients table
        references: [recipe_ingredients.ingredient_id] // The referenced field(s) in recipe_ingredients table
    })
}));*/

/* export const recipesRelations = relations(recipes, ({ many }) => ({
    ingredients: many(recipe_ingredients, {
        references: [recipe_ingredients.recipe_id]
    }),
    steps: many(recipe_steps, {
        references: [recipe_steps.recipe_id]
    })
}));

export const recipeStepsRelations = relations(recipe_steps, ({ one }) => ({
    recipe: one(recipes, {
        fields: [recipe_steps.recipe_id],
        references: [recipes.recipe_id]
    })
})); */
