<script lang="ts">
	// types
	import type { IdAndNameAndSlug } from '$lib/types';

	// components
	import { List } from '$lib/components/common';
	import { ListItem } from '$lib/components';

	// data
	let { items } = $props<{ items: IdAndNameAndSlug[] }>();
</script>

<List>
	{#each items as item}
		<ListItem {item} />
	{/each}
</List>
