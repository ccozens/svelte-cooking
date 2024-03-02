<script lang="ts">
	import '../app.pcss';
	import type { Snippet } from 'svelte';
	let { children } = $props<{ children: Snippet }>();


</script>

{@render children()}
