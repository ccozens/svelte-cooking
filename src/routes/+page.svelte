<script lang="ts">
	// types
	import type { PageData } from './$types';
	import type { NameAndSlug } from '$lib/types';

	// components
	import { Header, RecipeList } from '$lib/components';
	// data
	let { data } = $props();
	const namesAndSlugs: NameAndSlug[] = data.namesAndSlugs;
	const all_recipes = data.all_recipes;
</script>

<Header />
<RecipeList items={namesAndSlugs} />
