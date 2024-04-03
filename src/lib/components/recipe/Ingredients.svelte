<script lang="ts">
	// components
	import { List } from '$lib/components/common';
	import Step from './Step.svelte';

	// data
	let { ingredients } = $props<{ingredients: string[]}>();
</script>

<h3>Ingredients</h3>
<List>
	<ul>
		{#each ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>
</List>


<List>
	<ul>
		{#each ingredients as step}
			<Step {step} />
		{/each}
	</ul>
</List>

<style lang="postcss">
	ul {
		list-style-type: none;
	}
</style>