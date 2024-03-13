CREATE TABLE IF NOT EXISTS "recipe_steps" (
	"id" serial PRIMARY KEY NOT NULL,
	"recipe_id" integer,
	"description" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "recipe_steps" ADD CONSTRAINT "recipe_steps_recipe_id_recipes_id_fk" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
