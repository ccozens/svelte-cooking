<script lang="ts">
	// types
	import type { PageData } from './$types';

	// components
	import { Title, Ingredients, StepList } from '$lib/components/recipe';
	// data
	export let data: PageData;

	const { name, ingredients, steps } = data.recipe;
</script>

<Title {name} />
<Ingredients {ingredients} />
<StepList {steps} />

<!-- <style lang="postcss">

</style> -->
