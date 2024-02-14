<script lang="ts">
    // types
	import type { PageData } from './$types';
	import type { NameAndSlug } from '$lib/types';

	// components
	import RecipeList from '$lib/components/RecipeList.svelte';
    import Header from '$lib/components/Header.svelte';
    // data
	export let data: PageData;
	const namesAndSlugs: NameAndSlug[] = data.props;
</script>


<Header />
<RecipeList items={namesAndSlugs} />
