<script>
	let { data } = $props();
	import { pages } from '../template.js';
	import OnePanelLayout from '$lib/components/OnePanelLayout.svelte';
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(data);
	});
</script>

<TwoPanelLayout>
	{#snippet options()}
		<h3>Pages:</h3>
		<ul>
			{#each pages as page}
				<li>
					<a href={page.name}>{page.name}</a>
				</li>
			{/each}
		</ul>
	{/snippet}
	<h1>On an adventure page...</h1>
	<h2>{data.page.name}</h2>
	<h4>{data.page.title}</h4>
	<p>{data.page.text}</p>
	<ul>
		{#each data.page.links as l}
			<li><a href={l}>{l}</a></li>
		{/each}
	</ul>
	<div>{@html data.page.content}</div>
</TwoPanelLayout>
