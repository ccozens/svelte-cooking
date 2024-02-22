<script lang="ts">
	// types
	import type { PageData } from './$types';
	import type { NameAndSlug } from '$lib/types';

	// components
	import { Header, RecipeList } from '$lib/components';
	// data
	let { data } = $props();
	const namesAndSlugs: NameAndSlug[] = data.props;


</script>

<Header />
<RecipeList items={namesAndSlugs} />
