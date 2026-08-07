<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
</script>

<TwoPanelLayout>
	{#snippet options()}
		<p>this is the design page's options</p>
	{/snippet}

	<p>on 'design' page</p>
</TwoPanelLayout>>
