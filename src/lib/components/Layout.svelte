<!-- ./src/lib/Layout.svelte -->
<script lang="ts">
    export let title:string;
    export let description:string;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelte:head>

<main class="prose prose-2xl mt-14 max-w-5xl w-full sm:p-0 p-4">
    <slot/>
</main>