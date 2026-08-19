<script>
	import { PUBLIC_THEME_KEY } from '$env/static/public';

	/* importing style assets for the whole site ...  */
	import '@fontsource/metamorphous';
	import '@fontsource-variable/roboto-mono';
	import '@fontsource/jacquard-24';
	import '@fontsource/medievalsharp';

	import '../app.css';
	import favicon from '$lib/assets/favicon/favicon-32x32.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="parent">
	<div class="fileBar">
		<nav>
			<a href="/">home</a>
			<a href="/design">design</a>
			<a href="/link">link</a>
			<a href="/preview">preview</a>
			<a href="/ideas">ideas</a>
		</nav>
	</div>
	{@render children()}
</div>

<style>
	.parent {
		width: 100%;
		height: 100%;
		/*
		outline: 2px solid var(--test-border-1);
		outline-offset: -2px;
		*/

		padding: 0px;
		margin: 0px;

		display: flex;
		flex-direction: column;
	}

	.fileBar {
		background-color: var(--surface);
		border: 0px solid var(--test-border-2);
		border-radius: var(--border-radius);
		margin: 2px;
		padding: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	nav a {
		font-size: 1.3rem;
		border-left: 2px solid var(--border);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
</style>
