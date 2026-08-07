<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
</script>

<TwoPanelLayout>
	{#snippet options()}
		<p>this is the link page's options</p>
	{/snippet}

	<p>on 'link' page</p>
</TwoPanelLayout>
