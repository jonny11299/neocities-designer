import { pages } from './template.js';

// let's actually keep this function going because it's useful as a dictionary for template.
export function load() {
	return {
		pages: pages.map((page) => ({
			name: page.name,
			title: page.title,
			text: page.text,
			links: page.links
		}))
	};
}
