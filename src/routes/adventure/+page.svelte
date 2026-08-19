<script>
	let { data } = $props();
	import OnePanelLayout from '$lib/components/OnePanelLayout.svelte';
</script>

<OnePanelLayout>
	<h1>root level adventure page.</h1>

	<h3>Available pages:</h3>
	<ul>
		{#each data.pages as p}
			<li><a href="/adventure/{p.name}">{p.name}</a></li>
		{/each}
	</ul>
</OnePanelLayout>
