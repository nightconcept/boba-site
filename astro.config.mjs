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
                { label: '1.1. Your First Program', link: '/learn/01-your-first-program' },
                { label: '1.2. Immutable Bindings: let and var', link: '/learn/02-variables-and-constants' },
                { label: '1.3. Data Types', link: '/learn/03-data-types' },
                { label: '1.4. Operators', link: '/learn/04-operators' },
              ],
            },
            {
              label: 'Module 2: Control Flow',
              items: [
                { label: '2.1. Conditional Logic: if/else', link: '/learn/05-conditional-logic' },
                { label: '2.2. Repeating Actions with Loops', link: '/learn/06-loops' },
              ],
            },
            {
              label: 'Module 3: Custom Data & Matching',
              items: [
                { label: '3.1. Enums', link: '/learn/07-enums' },
                { label: '3.2. Matching', link: '/learn/08-match' },
              ],
            },
            {
              label: 'Module 4: Building Blocks',
              items: [
                { label: '4.1. Functions', link: '/learn/08-functions' },
                { label: '4.2. Structs', link: '/learn/09-structs' },
                { label: '4.3. Adding Behavior with impl', link: '/learn/10-adding-behavior-with-impl' },
              ],
            },
            {
              label: 'Module 5: Writing Robust Boba',
              items: [
                { label: '5.1. Handling Optional Data', link: '/learn/11-handling-optional-data' },
                { label: '5.2. Error Handling', link: '/learn/12-error-handling' },
                { label: '5.3. Guaranteed Cleanup with defer', link: '/learn/13-guaranteed-cleanup-with-defer' },
                { label: '5.4. Panics', link: '/learn/14-panics' },
              ],
            },
            {
              label: 'Module 6: Advanced Topics',
              items: [
                { label: '6.1. Pure Functions', link: '/learn/15-pure-functions' },
                { label: '6.2. Imports', link: '/learn/16-imports' },
                { label: '6.3. Runtime Reflection', link: '/learn/17-runtime-reflection' },
                { label: '6.4. Concurrency', link: '/learn/18-concurrency' },
                { label: '6.5. Style Guide', link: '/learn/19-style-guide' },
              ],
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
