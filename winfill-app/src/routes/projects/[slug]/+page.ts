/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [
		{ slug: 'aaa' },
        { slug: 'box-house' },
		{ slug: 'goliath' },
        { slug: 'husky' },
        { slug: 'pointy-house' },
        { slug: 'riverdale-residence' },
        { slug: 'wedge' },
        { slug: 'inglewood-triplex' },
        { slug: 'strathearn' },
        { slug: 'allendale' },
        { slug: 'lets-play' },
        { slug: 'concrete' },
        { slug: 'furniture' },
	];
}

export const prerender = 'auto';
//For dynamic generated routes projects/example-project = projects/example
//export const trailingSlash = 'never'; 