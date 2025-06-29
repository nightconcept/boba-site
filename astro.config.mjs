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
                { label: 'Chapter 1: Getting Started', link: '/learn/part-1-the-fundamentals/01-getting-started' },
                { label: 'Chapter 2: Variables & Data Types', link: '/learn/part-1-the-fundamentals/02-variables-and-data-types' },
                { label: 'Chapter 3: Operators', link: '/learn/part-1-the-fundamentals/03-operators' },
                { label: 'Chapter 4: Controlling Program Flow', link: '/learn/part-1-the-fundamentals/04-controlling-program-flow' },
              ],
            },
            {
              label: 'Part 2: Structuring Your Code',
              items: [
                { label: 'Chapter 5: Functions', link: '/learn/part-2-structuring-your-code/05-functions' },
                { label: 'Chapter 6: Structs', link: '/learn/part-2-structuring-your-code/06-structs' },
                { label: 'Chapter 7: Methods & Implementations', link: '/learn/part-2-structuring-your-code/07-methods-and-implementations' },
                { label: 'Chapter 8: Modules & Imports', link: '/learn/part-2-structuring-your-code/08-modules-and-imports' },
              ],
            },
            {
              label: 'Part 3: Writing Robust & Safe Code',
              items: [
                { label: 'Chapter 9: The Option Type', link: '/learn/part-3-writing-robust-safe-code/09-option-type' },
                { label: 'Chapter 10: The Result Type', link: '/learn/part-3-writing-robust-safe-code/10-result-type' },
                { label: 'Chapter 11: The defer Statement', link: '/learn/part-3-writing-robust-safe-code/11-defer' },
                { label: 'Chapter 12: Panics', link: '/learn/part-3-writing-robust-safe-code/12-panics' },
              ],
            },
            {
              label: 'Part 4: The Broader Picture',
              items: [
                { label: 'Chapter 13: Concurrency', link: '/learn/part-4-the-broader-picture/13-concurrency' },
                { label: 'Chapter 14: Style & Philosophy', link: '/learn/part-4-the-broader-picture/14-style-and-philosophy' },
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
