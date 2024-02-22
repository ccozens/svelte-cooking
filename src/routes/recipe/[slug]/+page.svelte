<script lang="ts">
	// components
	import { ScreenWakeLock } from '$lib/components/common';
	import { Title, Ingredients, StepList } from '$lib/components/recipe';
	// data
	let { data } = $props();

	const { name, source, ingredients, steps } = data.recipe;
</script>

<!-- <ScreenWakeLock /> -->
<Title {name} {source} />
<Ingredients {ingredients} />
<StepList {steps} />

<!-- <style lang="postcss">

</style> -->
