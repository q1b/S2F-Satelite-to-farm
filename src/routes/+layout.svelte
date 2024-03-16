<script>
	import { Toaster } from 'svelte-sonner';
	import '../app.pcss';
	import Button from '@/components/ui/button/button.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let data
</script>

<svelte:head>
	<title> Satellite Image Analytics for Crop Health Monitoring Web Application </title>
</svelte:head>

<Toaster/>
<header class="flex items-center p-2 justify-between w-full max-w-5xl">
	{#if !$page.route.id?.startsWith('/auth')}
	<div class="flex items-center gap-x-2">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
			<path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
		</svg>
		<span class="text-green-700 font-bold">Satellite to Farm</span>
	</div>
	{/if}
	<div class="flex items-center gap-x-2">
		<div class="flex items-center gap-x-2 pr-2">
			<Button href="/"  variant="ghost"> Home </Button>
			<Button href="/about" variant="ghost"> About </Button>
			{#if data.isLoggedIn}
			<Button href="/settings" variant="ghost"> Settings </Button>
			{/if}
		</div>
		{#if data.isLoggedIn}
			<form action="/auth/?/logout" method="POST" use:enhance>
				<Button type="submit" variant="destructive">Logout</Button>
			</form>
		{/if}
	</div>	  
</header>
<slot />
<footer></footer>
