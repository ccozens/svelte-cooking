<script lang="ts">
	// types
	import type { Snippet } from 'svelte';

	// components
	import { Button } from '$lib/components/common';

	// create done flag
	let done = $state(false);

	// create onclick function to toggle done
	function onclick() {
		done = !done;
	}

	// data
	let { step = '' } = $props<{ children: Snippet; step: string }>();
</script>

<li>
	<Button {onclick} {done}>
		{step}
	</Button>
</li>
