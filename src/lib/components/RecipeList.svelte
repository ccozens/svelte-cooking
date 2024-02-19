<script lang="ts">
	// types
	import type { NameAndSlug } from '$lib/types';

	// components
	import { List } from '$lib/components/common';
	import { ListItem } from '$lib/components';

	// data
	export let items: NameAndSlug[];
</script>

<List>
	{#each items as item}
		<ListItem {item} />
	{/each}
</List>
