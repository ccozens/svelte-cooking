<script lang="ts">
	import type { NameAndSlug } from '$lib/types';

	export let item: NameAndSlug;
</script>

<div class="list-item">
	<a href={`/recipe/${item.slug}`}>{item.name}</a>
</div>


<style lang="postcss">

	.list-item {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		border: 1px solid var(--lime-5);
		padding: var(--size-4);
        margin: var(--size-1) auto;
		border-radius: var(--size-1);
		box-shadow: var(--size-2);
        width: 80%;

        & a {
            text-decoration: none;
            text-align: center;
            color: var(--text-1);
            font-size: var(--font-size-3);
            text-transform: capitalize;
        }

        &:hover, &:active {
            background: var(--gradient-30);
            border: 1px solid var(--teal-12);
        }

        @media (min-width: 768px) {
            width: 30%;
        }
	}
</style>
