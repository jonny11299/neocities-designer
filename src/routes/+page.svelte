<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
</script>

<TwoPanelLayout>
	{#snippet options()}
		<p>this is the main page's options</p>
	{/snippet}

	<h1>Welcome to the Faunix Neocities Designer</h1>
	<p>Here, you can build out a custom Neocities Adventure.</p>
	<p>Fear not, friend, for the path is simple, though the possibilities are endless.</p>

	<h2>Overview</h2>
	<ul>
		<li><a href="/">Home:</a> The page you're currently on</li>
		<li><a href="design">Design:</a> Design a single room.</li>
		<li><a href="link">Link:</a> Link rooms together.</li>
		<li><a href="preview">Preview:</a> Try your adventure.</li>
	</ul>
</TwoPanelLayout>

<style>
	.bold {
		text-decoration: underline;
	}
</style>
