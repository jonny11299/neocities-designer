<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
	import Dropzone from '$lib/components/Dropzone.svelte';

	const modes = ['image', 'audio', 'text'];
	let mode = $state(modes[0]);

	// going to have the user upload image, audio, and text, then migrate it to a store.
	//
	// Realistically, what this page needs is:
	// 	dropzone for image
	//  dropzone for audio
	// 	buttons for placing text
	//  buttons for placing links
	//
	//  image and audio should be routed to a svelte store
	//  whose updating should also trigger a localStorage update so work doesn't get lost
</script>

<TwoPanelLayout>
	{#snippet options()}
		<h3>Design</h3>
		<p>
			Mode: <select id="mode-select">
				{#each modes as m}
					<option value={m}>{m}</option>
				{/each}
			</select>
		</p>

		{#if mode === 'image'}
			<Dropzone name="image" type="image/*" />
			<!--
			<button class="centered">Submit</button>
			 -->
		{/if}
	{/snippet}

	<p>on 'design' page</p>
</TwoPanelLayout>

<style>
	select {
		width: auto;
		padding-left: 0.4rem;
	}

	.centered {
		display: block;
		width: fit-content;
		margin-inline: auto;
		margin-top: 1rem;
	}
</style>
