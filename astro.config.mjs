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
					label: "Tutorials",
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
						{ label: "Generics", link: "/learn/09-generics/" },
						{ label: "Methods", link: "/learn/10-methods/" },
						{ label: "Modules", link: "/learn/11-modules/" },
						{ label: "Testing", link: "/learn/12-testing-your-code/" },
						{ label: "Result", link: "/learn/13-result-type/" },
						{ label: "Option", link: "/learn/14-option-type/" },
						{ label: "Pattern Matching", link: "/learn/15-pattern-matching/" },
						{ label: "Defer & Panic", link: "/learn/16-defer-and-panic/" },
						{ label: "Async/Await", link: "/learn/17-async-await/" },
						{ label: "Idiomatic Boba", link: "/learn/18-idiomatic-boba/" },
					],
				},
				// {
				// 	label: "How-to Guides",
				// 	items: [
				// 		{ label: "Build a CLI App", link: "/how-to/build-cli-app/" },
				// 		{ label: "Handle JSON Data", link: "/how-to/handle-json-data/" },
				// 		{ label: "Test-Driven Development", link: "/how-to/test-driven-development/" },
				// 		{ label: "Migrate from Python", link: "/how-to/migrate-from-python/" },
				// 	],
				// },
				// {
				// 	label: "Reference",
				// 	items: [
				// 		{
				// 			label: "Language",
				// 			items: [
				// 				{ label: "Types", link: "/reference/language/types/" },
				// 				{ label: "Syntax", link: "/reference/language/syntax/" },
				// 			],
				// 		},
				// 		{
				// 			label: "Standard Library",
				// 			items: [
				// 				{ label: "std:fs", link: "/reference/standard-library/fs/" },
				// 				{ label: "std:json", link: "/reference/standard-library/json/" },
				// 			],
				// 		},
				// 	],
				// },
				// {
				// 	label: "Explanation",
				// 	items: [
				// 		{ label: "Why Boba Exists", link: "/explanation/why-boba-exists/" },
				// 		{ label: "AI Collaboration Design", link: "/explanation/ai-collaboration-design/" },
				// 		{ label: "Safety by Design", link: "/explanation/safety-by-design/" },
				// 		{ label: "Bytecode VM Architecture", link: "/explanation/bytecode-vm-architecture/" },
				// 	],
				// },
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
