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
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		background: var(--surface-3);
		border: 1px solid var(--highlight);
		padding: var(--size-4);
		border-radius: var(--size-1);
		box-shadow: var(--size-2);

        & a {
            text-decoration: none;
            color: var(--text-color);
            font-size: 1.5rem;
            text-transform: capitalize;
        }

        &:hover {
            background: var(--surface-hover);
        }
	}
</style>
