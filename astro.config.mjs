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
              label: 'Module 1: The Absolute Basics',
              items: [
                { label: '1. Variables & Constants', link: '/learn/01-variables-and-constants' },
                { label: '2. Data Types', link: '/learn/02-data-types' },
                { label: '3. Operators', link: '/learn/03-operators' },
              ],
            },
            {
              label: 'Module 2: Control Flow',
              items: [
                { label: '4. Conditional Logic: if/else', link: '/learn/04-conditional-logic' },
                { label: '5. Looping', link: '/learn/05-loops' },
              ],
            },
            {
              label: 'Module 3: Custom Data & Matching',
              items: [
                { label: '6. Enums', link: '/learn/06-enums' },
                { label: "7. Matching", link: '/learn/07-match' },
              ],
            },
            {
              label: 'Module 4: Building Blocks',
              items: [
                { label: '8. Functions', link: '/learn/08-functions' },
                { label: '9. Structs', link: '/learn/09-structs' },
              ],
            },
            {
              label: 'Module 5: Writing Robust Boba',
              items: [
                { label: '10. Safe Absence', link: '/learn/10-safe-absence' },
                { label: '11. Handling Errors', link: '/learn/11-handling-errors' },
                { label: '12. Guaranteed Cleanup', link: '/learn/12-defer' },
              ],
            },
            {
              label: 'Module 6: Object-Oriented Programming',
              items: [
                { label: '13. Classes & Inheritance', link: '/learn/13-classes' },
                { label: '14. Structs vs. Classes: The Key Difference', link: '/learn/14-structs-vs-classes' },
              ],
            },
            {
              label: 'Module 7: Project Organization',
              items: [
                { label: '15. Imports', link: '/learn/15-imports' },
                { label: '16. Projects', link: '/learn/16-projects' },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'Language',
              items: [
                { label: 'Types', slug: 'reference/01-language/types' },
                { label: 'Declarations', slug: 'reference/01-language/declarations' },
                { label: 'Expressions', slug: 'reference/01-language/expressions' },
                { label: 'Statements', slug: 'reference/01-language/statements' },
                { label: 'Collections', slug: 'reference/01-language/collections' },
                { label: 'Imports', slug: 'reference/01-language/imports' },
              ],
            },
            {
              label: 'Standard Library',
              autogenerate: { directory: 'reference/02-standard-library' },
            },
          ],
        },
      ],
    }),
  ],
});
