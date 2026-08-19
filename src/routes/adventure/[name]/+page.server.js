import { pages } from '../template.js';

export function load({ params }) {
	const page = pages.find((p) => p.name === params.name);

	return {
		page
	};
}
