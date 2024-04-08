import type { Actions } from './$types';

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
		const name = data.get('name');
		const source = data.get('source');
		const ingredients = data.get('ingredients');
		const steps = data.get('steps');

		// format the data, checking that the data is a string as data.get() can return a string, file or nul
		const lowerCaseName = formatName(typeof name === 'string' ? name : '');
		const formattedIngredients = formatIngredients(
			typeof ingredients === 'string' ? ingredients : ''
		);
		const formattedSteps = formatSteps(typeof steps === 'string' ? steps : '');

		// generate new recipe object
		const newRecipe = {
			name: lowerCaseName,
			source: source,
			ingredients: formattedIngredients,
			steps: formattedSteps
		};

		console.log('newRecipe', newRecipe);
	}
};
