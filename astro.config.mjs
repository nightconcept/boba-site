// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const bobaGrammar = JSON.parse(
  readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/grammars/boba.tmLanguage.json'), 'utf-8'),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://boba-lang.vercel.app/',
  integrations: [
    starlight({
      title: 'Boba Lang',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Get Started', slug: 'guides/get-started' },
          ],
        },
        {
          label: 'Learn Boba',
          items: [
            {
              label: 'Part 1: The Fundamentals',
              items: [
                {
                  label: 'Chapter 1: Getting Started: Your First Program',
                  link: '/learn/part-1-the-fundamentals/01-getting-started',
                  // items: [
                  //   { label: '1.1: Your First Program', link: '/learn/part-1-the-fundamentals/01-getting-started/01-your-first-program' },
                  //   { label: '1.2: How Boba Works', link: '/learn/part-1-the-fundamentals/01-getting-started/02-how-boba-works' },
                  // ]
                },
                { label: 'Chapter 2: Core Building Blocks: Variables & Data Types', link: '/learn/part-1-the-fundamentals/02-variables-and-data-types' },
                { label: 'Chapter 3: Manipulating Data: Operators', link: '/learn/part-1-the-fundamentals/03-operators' },
                { label: 'Chapter 4: Controlling Program Flow', link: '/learn/part-1-the-fundamentals/04-controlling-program-flow' },
              ],
            },
            {
              label: 'Part 2: Structuring Your Code',
              items: [
                { label: 'Chapter 5: Reusing Code: Functions', link: '/learn/part-2-structuring-your-code/05-functions' },
                { label: 'Chapter 6: Creating Custom Data Types: Structs', link: '/learn/part-2-structuring-your-code/06-structs' },
                { label: 'Chapter 7: Adding Behavior: Methods & Implementations', link: '/learn/part-2-structuring-your-code/07-methods-and-implementations' },
                { label: 'Chapter 8: Structuring a Project: Modules & Imports', link: '/learn/part-2-structuring-your-code/08-modules-and-imports' },
              ],
            },
            {
              label: 'Part 3: Writing Robust & Safe Code',
              items: [
                { label: 'Chapter 9: Handling Potential Absence: The Option Type', link: '/learn/part-3-writing-robust-safe-code/09-option-type' },
                { label: 'Chapter 10: Handling Recoverable Errors: The Result Type', link: '/learn/part-3-writing-robust-safe-code/10-result-type' },
                { label: 'Chapter 11: Ensuring Cleanup: The defer Statement', link: '/learn/part-3-writing-robust-safe-code/11-defer' },
                { label: 'Chapter 12: Handling Critical Failures: Panics', link: '/learn/part-3-writing-robust-safe-code/12-panics' },
              ],
            },
            {
              label: 'Part 4: The Broader Picture',
              items: [
                { label: 'Chapter 13: Concurrent Programming: async and await', link: '/learn/part-4-the-broader-picture/13-concurrency' },
                { label: 'Chapter 14: Writing Idiomatic Boba', link: '/learn/part-4-the-broader-picture/14-style' },
              ],
            },
            { label: 'Conclusion', link: '/learn/conclusion' },
          ],
        },
        {
          label: 'Boba Tools',
          items: [{ label: 'Boba CLI', link: '/tools/boba-cli' }],
        },
        {
          label: 'Reference',
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
          items: [{ label: 'Syntax Highlighting', slug: 'deactivated/boba-syntax-highlighting' }],
        },
      ],
    }),
  ],
});
