<script lang="ts">
	export let name: string;
	export let source: string;
</script>

<h2>{name}</h2>
<cite
	>From
	{#if source.includes('http')}
		<a href={source} target="_blank">{source}</a>
	{:else}
		{source}
	{/if}
</cite>

<style lang="postcss">
	h2 {
		text-transform: capitalize;
	}
</style>
