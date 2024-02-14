<div class="list">
	<slot />
</div>

<style lang="postcss">
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}
</style>
