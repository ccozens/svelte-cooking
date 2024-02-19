<script lang="ts">
	// components
	import { Button } from '$lib/components/common';

	// data
	export let step: string;
</script>

<Button>
	<li>{step}</li>
</Button>

<style lang="postcss">
	li {
		list-style: none;
	}
</style>
