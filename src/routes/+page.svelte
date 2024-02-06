<script lang="ts">
	import type { PageData } from './$types';
    import type { NameAndSlug } from '$lib/types';

	export let data: PageData;
	const namesAndSlugs: NameAndSlug[] = data.props;

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
    {#each namesAndSlugs as recipe}
        <li><a href={`/recipe/${recipe.slug}`}>{recipe.name}</a></li>
    {/each}
</ul>
