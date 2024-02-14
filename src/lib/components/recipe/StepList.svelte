<script lang="ts">
export let steps: string[];
</script>

<ol>
    {#each steps as step}
        <li>{step}</li>
    {/each}
</ol>

<!-- <style lang="postcss">

</style> -->
