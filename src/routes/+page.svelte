<script lang="ts">
    // types
	import type { PageData } from './$types';
	import type { NameAndSlug } from '$lib/types';

	// components
	import List from '$lib/components/List.svelte';
    import Header from '$lib/components/Header.svelte';
    // data
	export let data: PageData;
	const namesAndSlugs: NameAndSlug[] = data.props;
</script>


<Header />
<List items={namesAndSlugs} />
