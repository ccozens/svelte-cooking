DROP TABLE IF EXISTS "ingredients";--> statement-breakpoint
DROP TABLE IF EXISTS "measurement_units";--> statement-breakpoint
DROP TABLE IF EXISTS "products";--> statement-breakpoint
DROP TABLE IF EXISTS "recipe_ingredients";--> statement-breakpoint
DROP TABLE IF EXISTS "recipe_steps";--> statement-breakpoint
DROP TABLE IF EXISTS "recipes";--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"source" text NOT NULL,
    "ingredients" json NOT NULL,
    "steps" json NOT NULL
);