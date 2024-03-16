<script lang="ts">
    import Wheat from "./wheat.svelte"
    export let data;    
</script>

<main class="max-w-5xl w-full min-h-screen">
    <!-- Live Conditions CLimate  -->
    {#if data.cropField?.currentCrop?.toLowerCase() === 'wheat'}
        <Wheat/>
    {/if}
    {data.cropField?.currentCrop}
</main>