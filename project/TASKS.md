# Boba Lang Website - Task List

## 1. Epic: Project Scaffolding & Setup

**Goal**: Establish the core infrastructure and foundational components for the Boba Lang documentation website.

### 1.1. Task: Initialize Astro project with Starlight template

- [x] Run `pnpm create astro@latest` and select the Starlight template.
- [x] Install all dependencies using `pnpm install`.
- [x] **Verification**: The default Starlight website runs locally using the `pnpm dev` command.

### 1.2. Task: Configure development environment and tooling

- [x] Initialize Biome for formatting and linting by running `pnpm dlx @biomejs/biome init`.
- [x] Configure the generated `biome.json` file with any project-specific rules.
- [x] Add scripts to `package.json` for checking and applying formatting and linting (e.g., `"format": "biome format --write ."` and `"lint": "biome lint ."`).
- [x] **Verification**: All development tools (pnpm, Biome) are properly configured and tested. Running the format and lint scripts works as expected.

## 2. Epic: Initial Content Implementation

Goal: Build out the core pages and navigation structure as defined in the PRD.

### 2.1. Task: Implement website structure and navigation

- [x] Modify the `astro.config.mjs` file to define the site title and sidebar navigation.
- [x] The sidebar should include main sections for "Guides" and "Language Reference".
- [x] **Verification**: The sidebar on the locally running website correctly displays the new navigation structure.

### 2.2. Task: Create initial content pages

- [x] Populate the main landing page (`src/content/docs/index.mdx`) with the introductory content about Boba Lang.
- [x] Create and add content to the "Get Started" guide (`src/content/docs/guides/get-started.mdx`).
- [x] Create and add content for the initial "Variables" and "Functions" pages under `src/content/docs/reference/`.
- [x] Create a placeholder page for the formal grammar at `src/content/docs/reference/grammar.mdx`.
- [x] **Verification**: All created pages are accessible via the sidebar, render correctly, and display the appropriate content.

### 2.3. Task: Integrate and verify custom Boba syntax highlighting

- [x] Modify `astro.config.mjs` to load the `src/grammars/boba.tmLanguage.json` grammar.
- [x] Create a new document in `src/content/docs/` with a `boba` code block to demonstrate highlighting.
- [x] **Verification**: The new page renders correctly and the Boba code block shows proper syntax highlighting.

## 3. Epic: Additional Tasks / Backlog

### 3.1. Task: Create the machine-readable context file for the AI assistant

- [ ] Create a new file at `public/llms.txt`.
- [ ] Populate this file with the condensed, easy-to-parse summary of Boba Lang's features, types, and syntax using `project/llms.txt-guidance.md` as this the closest standard that exists. [Anthropic](https://docs.anthropic.com/llms.txt) has an example of one such file you may request.
- [ ] **Verification**: The `llms.txt` file exists in the `public` directory and contains the correct language summary.

### 3.2. Task: Create initial project documentation

- [ ] Update the root `README.md` file to describe the website project itself, its purpose, and how to run it locally.
- [ ] **Verification**: The `README.md` provides clear instructions for a new developer.
