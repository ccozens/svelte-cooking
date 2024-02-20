<script lang="ts">
	// components
	import Step from './Step.svelte';
	import { List } from '$lib/components/common';

	// data
	let { steps } = $props();
</script>

<h3>Steps</h3>
<List>
	<ol>
		{#each steps as step}
			<Step {step} />
		{/each}
	</ol>
</List>
