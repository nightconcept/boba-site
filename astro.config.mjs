// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		starlight({
			title: 'Boba Lang',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			expressiveCode: {
				langs: [
					{
						name: 'boba',
						base: 'typescript',
					},
				],
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Get Started', slug: 'guides/get-started' },
					],
				},
				{
					label: 'Language Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
