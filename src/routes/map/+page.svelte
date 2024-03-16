<script lang="ts">
	import { onMount } from 'svelte';
	import 'azure-maps-control/dist/atlas.min.css';

	onMount(async () => {
		// Initialize a map instance.
		const atlas = await import('azure-maps-control');
		const map = new atlas.Map('map', {
			view: 'Auto',
			// Add authentication details for connecting to Azure Maps.
            authType: 'subscriptionKey',
			authOptions: {
				subscriptionKey: '4ce53631-79a1-4972-8cf2-ff818e7fc515'
			}
		});
	});
</script>

<div id="map" class="m-0 h-full w-full p-0"></div>
