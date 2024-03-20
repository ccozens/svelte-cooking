<script lang="ts">
	// components
	import { ScreenWakeLock } from '$lib/components/common';
	import { Title, Ingredients, StepList } from '$lib/components/recipe';
	// data
	let { data } = $props();

	const { recipe_name, source, ingredients, steps } = data.recipe;
	// const { recipe_name, source, ingredients, steps } = data.recipe;
</script>

<!-- <ScreenWakeLock /> -->
<Title {recipe_name} {source} />
<Ingredients {ingredients} />
<StepList {steps} />

<!-- <style lang="postcss">

</style> -->
