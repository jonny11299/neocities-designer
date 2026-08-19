// a template for data for displaying on these pages
//

// start your link with "/" in order to fetch absolute path.
// or, you can just type the name of another page.

export const pages = [
	{
		name: 'ultimate',
		title: 'The Ultimate Page',
		text: 'We have much to do here',
		links: ['/', '/ideas', '/adventure/ultimate']
	},
	{
		name: 'second',
		title: 'The Second Page',
		text: "and it's getting done as we speak",
		links: ['ultimate']
	}
];
