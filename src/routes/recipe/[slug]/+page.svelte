<script lang="ts">
    // types
    import type { PageData } from './$types';

    // components
    import Title from '$lib/components/recipe/Title.svelte';
    import Ingredients from '$lib/components/recipe/Ingredients.svelte';
	import StepList from '$lib/components/recipe/StepList.svelte';
    // data
    export let data: PageData;

    const { name, ingredients, steps } = data.recipe;
</script>


<Title {name} />
<Ingredients {ingredients} />
<StepList {steps} />
