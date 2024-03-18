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
