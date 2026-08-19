<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
</script>

<TwoPanelLayout>
	{#snippet options()}
		<p>this is the template page's options</p>
	{/snippet}

	<p>on 'template' page</p>
</TwoPanelLayout>
