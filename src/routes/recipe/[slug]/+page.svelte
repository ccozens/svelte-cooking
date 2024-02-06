<script lang="ts">

    import type { PageData } from './$types';

    export let data: PageData;

    const { name, ingredients, steps } = data.recipe;
</script>


<p>{name}</p>
<ul>
    {#each ingredients as ingredient}
        <li>{ingredient}</li>
    {/each}
</ul>
<ol>
    {#each steps as step}
        <li>{step}</li>
    {/each}
</ol>