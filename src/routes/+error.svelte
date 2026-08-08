<script>
	import { page } from '$app/state';
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';

	import surprise from '$lib/assets/surprise.jpg';
	import compycat from '$lib/assets/compycat.gif';
</script>

<TwoPanelLayout>
	{#snippet options()}
		<p>Might want to navigate to one of the links above, yeah?</p>
	{/snippet}

	<h1>{page.status} {page.error.message}</h1>
	{#if page.status == '404'}
		<p>This page doesn't exist.</p>
	{:else}
		<p>Something failed on this page.</p>
	{/if}

	<img src={surprise} alt="" style="max-width: 200px;" />

	<h2>Don't worry, our top guys are on it.</h2>
	<img src={compycat} alt="" style="max-width: 400px;" />
</TwoPanelLayout>

<style>
	img {
		padding-top: 2rem;
	}
</style>
