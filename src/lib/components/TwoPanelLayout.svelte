<script>
	let { options, children } = $props();
</script>

<div class="editorParent">
	<div class="optionsColumn">
		{@render options?.()}
	</div>
	<div class="children">
		<main>{@render children()}</main>
	</div>
</div>

<style>
	.editorParent {
		display: grid;
		grid-template-columns: 200px 1fr;
		min-height: 0;
		border: 0px solid var(--test-border-2);
		border-radius: var(--border-radius);
	}

	.optionsColumn {
		background-color: var(--surface);
		border: 0px solid var(--test-border-2);
		border-radius: var(--border-radius);
		margin: 2px;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.children {
		background-color: var(--surface);
		border: 0px solid var(--test-border-2);
		border-radius: var(--border-radius);
		margin: 2px;
		padding-left: 1rem;
		padding-right: 1rem;

		aspect-ratio: 16/9;
		width: auto;
		min-width: 300px;
	}
</style>
