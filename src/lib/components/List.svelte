<script lang="ts">
    // types
    import type { NameAndSlug } from '$lib/types';

    // components
    import ListItem from '$lib/components/ListItem.svelte';

    // data
    export let items: NameAndSlug[];

</script>

<div class="list">
    {#each items as item}
    <ListItem {item} />
    {/each}
</div>


<style lang="postcss">
    .list {
        display: flex;
        flex-direction: column;
        gap: var(--size-3);
    }
</style>