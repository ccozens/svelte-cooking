import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { PASSWORD } from '$env/static/private';
import { recipes } from '$lib/drizzle/schema';
import { db } from '../../../hooks.server';

const hashed_password = (s) =>
	s.split('').reduce((a, b) => {
		a = (a << 5) - a + b.charCodeAt(0);
		return a & a;
	}, 0);

const formatName = (name: string) => {
	// all lower case
	const lowerCase = name.toLowerCase();
	return lowerCase;
};

const formatIngredients = (ingredients: string) => {
	// format the ingredients into an array
	const ingredientsArray = ingredients.split('\r\n');
	return ingredientsArray;
};

const formatSteps = (steps: string) => {
	// format the steps into an array by splitting at new lines or periods
	const stepsArray = steps.split(/[\r\n.]/);

	// drop any occurence of 'step' followed by a number
	const filteredSteps = stepsArray.map((step) => step.replace(/STEP \d+\s*/i, ''));

	// remove leading space, if present, at each step in the array
	const trimmedSteps = filteredSteps.map((step) => step.trim());

	// drop any item that are less than 7 characters long as these are probably numbers or bullet points
	const longFilteredSteps = trimmedSteps.filter((step) => step.length > 7);

	return longFilteredSteps;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		// get the data from the form
		const password = data.get('password');
		const name = data.get('name');
		const source = data.get('source');
		const ingredients = data.get('ingredients');
		const steps = data.get('steps');

		// check the password is right, where 'password' is user-entered and 'PASSWORD' is the env var
		if (password !== PASSWORD) {
			return fail(400, { message: 'Password incorrect' });
		}

		// this must be true as password null-checked above, but I want to leave as failsafe
		if (password === PASSWORD) {
			// format the data, checking that the data is a string as data.get() can return a string, file or nul
			const lowerCaseName = formatName(typeof name === 'string' ? name : '');
			const formattedSource = formatName(typeof source === 'string' ? source : '');
			const formattedIngredients = formatIngredients(
				typeof ingredients === 'string' ? ingredients : ''
			);
			const formattedSteps = formatSteps(typeof steps === 'string' ? steps : '');

			// generate new recipe object
			const newRecipe = {
				name: lowerCaseName,
				source: formattedSource,
				ingredients: formattedIngredients,
				steps: formattedSteps
			};

			// check all values in newRecipe are not null
			if (
				newRecipe.name === null ||
				newRecipe.source === null ||
				newRecipe.ingredients === null ||
				newRecipe.steps === null
			) {
				return fail(400, { message: 'Name, source, ingredients or steps are null in newRecipe.' });
			} else {
				await db.insert(recipes).values({
					recipe_name: newRecipe.name,
					source: newRecipe.source,
					ingredients: newRecipe.ingredients,
					steps: newRecipe.steps
				});
			}
		}
	}
};

