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
                { label: '1. Your First Program', link: '/learn/01-your-first-program' },
                { label: '2. Variables & Constants', link: '/learn/02-variables-and-constants' },
                { label: '3. Data Types', link: '/learn/03-data-types' },
                { label: '4. Operators', link: '/learn/04-operators' },
              ],
            },
            {
              label: 'Module 2: Control Flow',
              items: [
                { label: '5. Conditional Logic: if/else', link: '/learn/05-conditional-logic' },
                { label: '6. Looping', link: '/learn/06-loops' },
              ],
            },
            {
              label: 'Module 3: Custom Data & Matching',
              items: [
                { label: '7. Enums', link: '/learn/07-enums' },
                { label: "8. Matching", link: '/learn/08-match' },
              ],
            },
            {
              label: 'Module 4: Building Blocks',
              items: [
                { label: '9. Functions', link: '/learn/09-functions' },
                { label: '10. Structs', link: '/learn/10-structs' },
              ],
            },
            {
              label: 'Module 5: Writing Robust Boba',
              items: [
                { label: '11. Safe Absence', link: '/learn/11-safe-absence' },
                { label: '12. Handling Errors', link: '/learn/12-handling-errors' },
                { label: '13. Guaranteed Cleanup', link: '/learn/13-defer' },
              ],
            },
            {
              label: 'Module 6: Object-Oriented Programming',
              items: [
                { label: '14. Classes & Inheritance', link: '/learn/14-classes' },
                { label: '15. Structs vs. Classes: The Key Difference', link: '/learn/15-structs-vs-classes' },
              ],
            },
            {
              label: 'Module 7: Project Organization',
              items: [{ label: '16. Imports', link: '/learn/16-imports' }],
            },
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
