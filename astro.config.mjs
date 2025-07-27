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
						{ label: "Hello World", link: "/learn/hello-world/" },
						{
							label: "Variables",
							link: "/learn/variables-and-immutability/",
						},
						{ label: "Functions", link: "/learn/functions/" },
						{
							label: "Operators & Control Flow",
							link: "/learn/operators-and-control-flow/",
						},
						{ label: "Collections", link: "/learn/collections/" },
						{ label: "Loops", link: "/learn/loops/" },
						{ label: "Enums", link: "/learn/enums/" },
						{ label: "Structs", link: "/learn/structs/" },
						{ label: "Generics", link: "/learn/generics/" },
						{ label: "Methods", link: "/learn/methods/" },
						{ label: "Modules", link: "/learn/modules/" },
						{ label: "Testing", link: "/learn/testing-your-code/" },
						{ label: "Result", link: "/learn/result-type/" },
						{ label: "Option", link: "/learn/option-type/" },
						{ label: "Pattern Matching", link: "/learn/pattern-matching/" },
						{ label: "Defer & Panic", link: "/learn/defer-and-panic/" },
						{ label: "Async/Await", link: "/learn/async-await/" },
						{ label: "Idiomatic Boba", link: "/learn/idiomatic-boba/" },
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
