<script lang="ts">
	// components
	import { List } from '$lib/components/common';

	// data
	let { ingredients } = $props();
</script>

<h3>Ingredients</h3>
<List>
	<ul>
		{#each ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>
</List>
