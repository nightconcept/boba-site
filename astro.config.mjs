import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";
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
});
