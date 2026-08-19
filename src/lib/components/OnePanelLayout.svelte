<script>
	let { children } = $props();
</script>

<div class="editorParent">
	<main>{@render children()}</main>
</div>

<style>
	.editorParent {
		display: block;
		min-height: 0;
		border: 0px solid var(--test-border-2);
		border-radius: var(--border-radius);

		background-color: var(--surface);
		margin: var(--layout-margin);
		padding-left: var(--layout-padding);
		padding-right: var(--layout-padding);
	}
</style>
