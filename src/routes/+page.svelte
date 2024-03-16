<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Button from '@/components/ui/button/button.svelte';
	import * as Card from "$lib/components/ui/card/index";
	import Input from '@/components/ui/input/input.svelte';
	import Label from '@/components/ui/label/label.svelte';

	export let data;
	
	let open: boolean = false;
</script>

<main class="mt-6 w-full max-w-5xl px-3">
	<div class="mb-10 sm:flex sm:items-center sm:justify-between">
		<div>
			<h3 class="text-base font-semibold leading-6 text-gray-900">Crop Fields</h3>
			<p class="mt-2 max-w-4xl text-sm text-gray-500">
				Crop fields are the basic unit of analysis for the Satellite Image Processing. Each field is
				represented by a crop and the field's boundaries are used to extract the satellite images.
			</p>
		</div>
		<div class="mt-3 flex sm:ml-4 sm:mt-0">
			<!-- <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Share</button> -->
			<button
				type="button"
				class="ml-3 inline-flex items-center gap-x-2 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
				on:click={() => (open = !open)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-5 w-5"
				>
					<path
						d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
					/>
				</svg>
				<span>Add</span>
			</button>
		</div>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12">
		{#each data?.cropFields as field,i}
		<Card.Root class="hover:scale-105 relative transition-all cursor-pointer">
			<a class=" absolute inset-0 " href="/field/{field.id}">&nbsp;</a>
			<Card.Header>
			  <Card.Title>{field.currentCrop} Field</Card.Title>
			  <Card.Description>{field.id}</Card.Description>
			</Card.Header>
			<Card.Content class="grid gap-4">
				<div class="flex justify-between">
					<span class="text-sm text-gray-500">Longitude</span>
					<span class="text-sm text-gray-900">{field.lag}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-sm text-gray-500">Latitude</span>
					<span class="text-sm text-gray-900">{field.lat}</span>
				</div>
			</Card.Content>
		</Card.Root>
		{/each}		
	</div>
</main>

<Dialog.Root bind:open>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Fill the details for Field</Dialog.Title>
			<Dialog.Description>
				Make sure to fill the details for the field. The details will be used to extract the
				satellite images.
			</Dialog.Description>
			<form action="/field/?/create" method="POST" use:enhance class="mt-6 flex flex-col gap-y-3">
				<div>
					<Label>Crop Name</Label>
					<Input name="crop-name" />
				</div>
				<div class="flex gap-x-12">
				<div>
					<Label>longitude</Label>
					<Input name="longitude" />
				</div>
				<div>
					<Label>latitude</Label>
					<Input name="latitude" />
				</div>
				</div>
				<Button type="submit" class="mt-4">Submit</Button>
			</form>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
