import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import starlight from "@astrojs/starlight";
// @ts-check
<<<<<<< Updated upstream
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import starlightSidebarTopics from 'starlight-sidebar-topics';

=======
import { defineConfig } from "astro/config";
>>>>>>> Stashed changes
const bobaGrammar = JSON.parse(
	readFileSync(
		path.resolve(
			path.dirname(fileURLToPath(import.meta.url)),
			"./src/grammars/boba.tmLanguage.json",
		),
		"utf-8",
	),
);

// https://astro.build/config
export default defineConfig({
<<<<<<< Updated upstream
  site: 'https://boba-lang.vercel.app/',
  integrations: [
    starlight({
      title: 'Boba Lang ',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Guides',
            link: '/guides/get-started',
            items: [
              // Each item here is one entry in the navigation menu.
              { label: 'Get Started', slug: 'guides/get-started' },
            ],
          },
          {
            label: 'Learn Boba',
            link: '/learn/01-getting-started',
            items: [
              { label: '1. Getting Started', slug: 'learn/01-getting-started' },
              { label: '2. Variables', slug: 'learn/02-variables-and-immutability' },
              { label: '3. Functions', slug: 'learn/03-functions' },
              { label: '4. Operators & Control Flow', slug: 'learn/04-operators-and-control-flow' },
              { label: '5. Loops', slug: 'learn/05-loops' },
              { label: '6. Collections', slug: 'learn/06-collections' },
              { label: '7. Enums', slug: 'learn/07-enums' },
              { label: '8. Structs', slug: 'learn/08-structs' },
              { label: '9. Methods', slug: 'learn/09-methods' },
              { label: '10. Modules', slug: 'learn/10-modules' },
              { label: '11. Testing', slug: 'learn/11-testing-your-code' },
              { label: '12. Result', slug: 'learn/12-result-type' },
              { label: '13. Option', slug: 'learn/13-option-type' },
              { label: '14. Pattern Matching', slug: 'learn/14-pattern-matching' },
              { label: '15. Defer & Panic', slug: 'learn/15-defer-and-panic' },
              { label: '16. Async/Await', slug: 'learn/16-async-await' },
              { label: '17. Idiomatic Boba', slug: 'learn/17-idiomatic-boba' },
            ],
          },
          {
            label: 'Boba Tools',
            link: '/tools/boba-cli',
            items: [{ label: 'Boba CLI', link: '/tools/boba-cli' }],
          },
          {
            label: 'Reference',
            link: '/reference/01-language/',
            items: [
              {
                label: 'Language',
                autogenerate: { directory: 'reference/01-language' },
              },
              {
                label: 'Standard Library',
                autogenerate: { directory: 'reference/02-standard-library' },
              },
            ],
          },
          {
            label: 'Development',
            link: '/deactivated/boba-syntax-highlighting',
            items: [{ label: 'Syntax Highlighting', slug: 'deactivated/boba-syntax-highlighting' }],
          },
        ]),
      ],
      expressiveCode: {
        shiki: {
          langs: [
            {
              id: 'boba',
              scopeName: 'source.boba',
              aliases: ['boba'],
              ...bobaGrammar,
            },
          ],
        },
      },
    }),
  ],
=======
	site: "https://boba-lang.vercel.app/",
	integrations: [
		starlight({
			title: "Boba Lang ",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/nightconcept/boba-private",
				},
			],
			sidebar: [
				{
					label: "Getting Started",
					items: [
						{ label: "Get Started", link: "/guides/get-started/" },
						{ label: "Roadmap", link: "/guides/roadmap/" },
						{ label: "Install Boba Binary", link: "/guides/install-binary/" },
						{
							label: "Install Boba from Source",
							link: "/guides/install-source/",
						},
					],
				},
				{
					label: "Learn Boba",
					items: [
						{ label: "Hello World", link: "/learn/01-hello-world/" },
						{
							label: "Variables",
							link: "/learn/02-variables-and-immutability/",
						},
						{ label: "Functions", link: "/learn/03-functions/" },
						{
							label: "Operators & Control Flow",
							link: "/learn/04-operators-and-control-flow/",
						},
						{ label: "Collections", link: "/learn/05-collections/" },
						{ label: "Loops", link: "/learn/06-loops/" },
						{ label: "Enums", link: "/learn/07-enums/" },
						{ label: "Structs", link: "/learn/08-structs/" },
						{ label: "Methods", link: "/learn/09-methods/" },
						{ label: "Modules", link: "/learn/10-modules/" },
						{ label: "Testing", link: "/learn/11-testing-your-code/" },
						{ label: "Result", link: "/learn/12-result-type/" },
						{ label: "Option", link: "/learn/13-option-type/" },
						{ label: "Pattern Matching", link: "/learn/14-pattern-matching/" },
						{ label: "Defer & Panic", link: "/learn/15-defer-and-panic/" },
						{ label: "Async/Await", link: "/learn/16-async-await/" },
						{ label: "Idiomatic Boba", link: "/learn/17-idiomatic-boba/" },
					],
				},
				{
					label: "Language Overview",
					items: [{ label: "Examples", link: "/language-overview/examples/" }],
				},
			],
			expressiveCode: {
				shiki: {
					langs: [
						{
							id: "boba",
							scopeName: "source.boba",
							aliases: ["boba"],
							...bobaGrammar,
						},
					],
				},
			},
		}),
	],
>>>>>>> Stashed changes
});
