import type { Actions } from './$types';

const formatName = (name: string) => {
	// all lower case
	const lowerCase = name.toLowerCase();
	return lowerCase;
};

const formatIngredients = (ingredients: string) => {
	// format the ingredeients into an array
	const ingredientsArray = ingredients.split('\r\n');
	return ingredientsArray;
};

const formatSteps = (steps: string) => {
	// format the steps into an array
	const stepsArray = steps.split('\r\n');
	// drop any item that are less than 7 characters long as these are probably numbers or bullet points
	return stepsArray.filter((step) => step.length > 7);
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const lowerCaseName = formatName(data.get('name'));
		const source = data.get('source');
		const formattedIngredients = formatIngredients(data.get('ingredients'));
		const formattedSteps = formatSteps(data.get('steps'));

		// generate new recipe object
		const newRecipe = {
			name: lowerCaseName,
			source: source,
			ingredients: formattedIngredients,
			steps: formattedSteps
		};

		console.log(newRecipe);
	}
};
