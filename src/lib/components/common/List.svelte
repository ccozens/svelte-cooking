<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<div class="list">
	{@render children()}
</div>

<style lang="postcss">
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}
</style>
