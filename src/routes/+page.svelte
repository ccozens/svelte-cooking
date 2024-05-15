<script lang="ts">
	// types
	import type { IdAndNameAndSlug } from '$lib/types';

	// components
	import { Header, RecipeList } from '$lib/components';
	// data
	let { data } = $props();
	const id_and_names_and_slugs: IdAndNameAndSlug[] = data.id_and_names_and_slugs;
</script>

<Header />
<RecipeList items={id_and_names_and_slugs} />

<i class="fa-solid fa-circle-plus"></i>

<style lang="postcss">
	i {
		position: fixed;
		bottom: var(--size-4);
		right: var(--size-4);
		font-size: var(--font-size-5);
		border: var(--border-size-2) solid var(--lime-5);
		border-radius: 100%;
		color: var(--surface-2);
		background-color: var(--lime-5);
	}
</style>
