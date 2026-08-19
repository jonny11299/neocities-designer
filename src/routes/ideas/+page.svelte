<script>
	import TwoPanelLayout from '$lib/components/TwoPanelLayout.svelte';
</script>

<TwoPanelLayout>
	{#snippet options()}
		<p>this is the ideas page's options</p>
	{/snippet}

	<h1>Gameplay</h1>
	<p>
		You traverse through the Neocities rooms, clicking on links to venture to your next location.
	</p>
	<p>Faunix hidden audio and custom text plays for you.</p>

	<h3>Display</h3>
	<p>
		In general, I think a centered image with text at the bottom, items on the side could be really
		cool. A layout, where the text displays below the image and can be controlled via themes... We'd
		have to standardize the aspect ratio of images and give black bars on the sides.
	</p>

	<h1>Functioning</h1>
	<h3>Items</h3>
	<p>
		We could have items. Your inventory could be represented as a hashed string, so you can reload
		your save from a different computer.
	</p>
	<p>Otherwise, you generally play off local storage.</p>
	<p>Each page needs its own link, though.</p>

	<h3>JSON shapes</h3>
	<h4>Page</h4>
	<ul>
		<li>name (used as the url, must be unique)</li>
		<li>created (timestamp)</li>
		<li>last modified (timestamp)</li>
		<li>last modified by (username)</li>
		<li>image (link to s3 bucket)</li>
		<li>audio (link to s3 bucket)</li>
		<li>text (link to s3 bucket)</li>
		<li>links (list of pages)</li>
	</ul>
	<h4>Player</h4>
	<p>(This one gets hashed as a url string... we don't store it in our bucket)</p>
	<ul>
		<li>name</li>
		<li>location</li>
		<li>
			mods (modifiers, i.e. if they have unlocked a certain part of the room, or they're poisoned or
			something.)
		</li>
		<li>items</li>
	</ul>
</TwoPanelLayout>
