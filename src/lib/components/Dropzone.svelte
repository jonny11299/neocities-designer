<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} name - Field name (also set on the underlying <input>, useful if you have several dropzones on one page/form)
	 * @property {string} [type] - Accepted MIME type, passed straight to <input accept>. Defaults to any image.
	 * @property {File | null} [value] - Bindable. The dropped/selected File; null until one is chosen.
	 */
	let { name, type = 'image/*', value = $bindable(null) } = $props();
	let isOver = $state(false);
	let fileInput;

	function handleFile(file) {
		if (!file || !file.type.startsWith(type.split('/')[0])) return;
		value = file;
	}
</script>

<div
	class="dropzone"
	class:over={isOver}
	class:loaded={value !== null}
	role="button"
	tabindex="0"
	onclick={() => fileInput.click()}
	onkeydown={(e) => e.key === 'Enter' && fileInput.click()}
	ondragover={(e) => {
		e.preventDefault();
		isOver = true;
	}}
	ondragleave={() => (isOver = false)}
	ondrop={(e) => {
		e.preventDefault();
		isOver = false;
		handleFile(e.dataTransfer.files[0]);
	}}
>
	{value ? `Loaded: ${value.name}` : `Drop file here, or click to upload`}
</div>

<input
	bind:this={fileInput}
	type="file"
	{name}
	accept={type}
	style="display:none"
	onchange={(e) => handleFile(e.target.files[0])}
/>

<style>
	.dropzone {
		width: auto;
		max-width: 400px;
		padding: 1rem;
		border: 2px dashed var(--border, #aaa);
		border-radius: var(--border-radius, 8px);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--text-mute, #aaa);
		font-family: var(--font, sans-serif);
		cursor: pointer;
		transition:
			border-color 0.2s,
			color 0.2s;

		overflow: hidden;
	}
	.dropzone.over {
		background-color: var(--bg);
	}
	.dropzone:hover {
		background-color: var(--bg);
	}
	.dropzone.loaded {
		border-style: solid;
	}
</style>
