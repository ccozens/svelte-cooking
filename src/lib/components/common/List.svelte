<script lang="ts">
	let { children } = $props();

</script>

<div class="list">
	{@render children()}
</div>

<style lang="postcss">
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}
</style>
