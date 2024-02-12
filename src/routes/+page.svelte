<script lang="ts">
	import type { PageData } from './$types';
	import type { NameAndSlug } from '$lib/types';

	export let data: PageData;
	const namesAndSlugs: NameAndSlug[] = data.props;
</script>

<div class="container">
	<h1>Recipes</h1>

	<ul>
		{#each namesAndSlugs as recipe}
			<li><a href={`/recipe/${recipe.slug}`}>{recipe.name}</a></li>
		{/each}
	</ul>
</div>

<div class="surface-samples">
	<div class="surface1 rad-shadow">var(--surface-1)</div>
	<div class="surface2 rad-shadow">var(--surface-2)</div>
	<div class="surface3 rad-shadow">var(--surface-3)</div>
	<div class="surface4 rad-shadow">var(--surface-4)</div>
</div>

<div class="text-samples">
    <h3>2 Text Colors, 2 link colors</h3>
    <h5 class="text1">
      <span class="swatch link rad-shadow"></span>
      var(--link)
    </h5>
    <h5 class="text1">
      <span class="swatch link-visited rad-shadow"></span>
      var(--link-visited)
    </h5>
    <h5 class="text1">
      <span class="swatch text1 rad-shadow"></span>
      var(--text-1)
    </h5>
    <h5 class="text2">
      <span class="swatch text2 rad-shadow"></span>
      var(--text-2)
    </h5>
    <p>Using these props results in colors that adapt to the users system theme preference automatically.</p>
</div>