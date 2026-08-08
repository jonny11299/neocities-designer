<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_THEME_KEY } from '$env/static/public';

	const theme_key = `${PUBLIC_THEME_KEY}`;
	let themes = ['light', 'dark', 'hacker'];
	let theme = $state(null);

	function changeTheme(change_to) {
		theme = change_to;
		localStorage.setItem(theme_key, change_to);
	}
	$effect(() => {
		const t = theme;
		document.documentElement.setAttribute('data-theme', theme);
		console.log('Changed theme to ' + theme);
	});

	onMount(() => {
		// suppose I was going to launch theme here but I might not have to
		theme = themes.includes(localStorage.getItem(theme_key))
			? localStorage.getItem(theme_key)
			: 'light';

		console.log('mounted with ' + theme);
	});
</script>

<TwoPanelLayout>
	{#snippet options()}
		<h3>Themes</h3>
		{#each themes as t}
			<button onclick={() => changeTheme(t)}>{t}</button>
		{/each}
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
