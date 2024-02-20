<script lang="ts">
	let { name } = $props<{ name: string }>();
</script>

<h2>{name}</h2>

<style lang="postcss">
	h2 {
		text-transform: capitalize;
	}
</style>
