<script lang="ts">
	import SignupForm from './signup-form.svelte';
	import LoginForm from './login-form.svelte';
	import type { PageData } from './$types';
	import Button from '@/components/ui/button/button.svelte';

	export let data: PageData;

	let currentPage: 'signup' | 'login' = 'signup';
</script>

<main class="w-full max-w-80 mt-16">
	<div class="flex items-center gap-x-2 mb-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-12 w-12"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
			/>
		</svg>
		<span class="text-2xl">S2F</span>
	</div>
	<div class="pb-4 border-b-4 mb-4 border-slate-300">
		<Button class="w-full" href="/auth/google/login/" variant="outline" size="lg">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-2" width="31.27" height="32" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
			Continue with Google
		</Button>
	</div>
	{#if currentPage === 'signup'}
		<SignupForm data={data.signupForm} />
		<div>
			<button class="text-blue-500 mt-4 underline" on:click={() => currentPage = 'login'} >I Already have an account</button>
		</div>
	{:else}
		<LoginForm data={data.loginForm} />
		<div>
			<button class="text-blue-500 mt-4 underline" on:click={() => currentPage = 'signup'} >Create an Account</button>
		</div>
	{/if}
</main>
