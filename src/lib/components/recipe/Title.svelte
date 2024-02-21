<script lang="ts">

    export let name: string;
    export let source: string;
</script>

<h2>{name}</h2>
<cite>From {source}</cite>

<style lang="postcss">
    h2 {
        text-transform: capitalize;
    }
</style>