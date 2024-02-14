<script lang="ts">
    // types
	import type { PageData } from './$types';
	import type { NameAndSlug } from '$lib/types';

	// components
	import List from '$lib/components/List.svelte';

    // data
	export let data: PageData;
	const namesAndSlugs: NameAndSlug[] = data.props;
</script>

	<h1>Recipes</h1>

<List items={namesAndSlugs} />
