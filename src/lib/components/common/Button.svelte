<script lang="ts">
	import type { Snippet } from 'svelte';

	// create done flag
	let {
		children,
		done,
		onclick = () => {}
	} = $props<{ children: Snippet; done: boolean; onclick: () => void }>();
</script>

<button {onclick} class:done>
	{@render children()}
</button>

<style lang="postcss">
	button {
		font-size: var(--font-size-fluid-2);
		line-height: 1.5;
		text-align: left;
		padding-inline: var(--font-size-fluid-1);
		margin: var(--size-1);
		background-color: var(--teal-12);
		width: 90%;

		@media screen and (min-width: 768px) {
			font-size: var(--font-size-fluid-1);
		}
	}

	.done {
		opacity: 0.1;
	}
</style>
