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
  site: 'https://example.com',
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
            { label: 'Boba Syntax Highlighting', slug: 'guides/boba-syntax-highlighting' },
          ],
        },
        {
          label: 'Learn',
          autogenerate: { directory: 'learn' },
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
      ],
    }),
  ],
});
