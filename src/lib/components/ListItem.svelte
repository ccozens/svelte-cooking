<script lang="ts">
	import type { NameAndSlug } from '$lib/types';

	export let item: NameAndSlug;
</script>

<div class="card">
	<a href={`/recipe/${item.slug}`}>{item.name}</a>
</div>


<style lang="postcss">
	.list-item {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& a {
			text-decoration: none;
			color: var(--text-color);
			font-size: 1.5rem;
		}
	}

	.card {
		flex-basis: var(--size-content-1);
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		background: var(--surface-3);
		border: 1px solid var(--surface-1);
		padding: var(--size-4);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
	}
</style>
