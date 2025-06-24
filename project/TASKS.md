# Boba Lang Website - Task List

## 1. Epic: Project Scaffolding & Setup

**Goal**: Establish the core infrastructure and foundational components for the Boba Lang documentation website.

### 1.1. Task: Initialize Astro project with Starlight template

- [x] Run `pnpm create astro@latest` and select the Starlight template.
- [x] Install all dependencies using `pnpm install`.
- [x] **Verification**: The default Starlight website runs locally using the `pnpm dev` command.

### 1.2. Task: Configure development environment and tooling

- [ ] Initialize Biome for formatting and linting by running `pnpm dlx @biomejs/biome init`.
- [ ] Configure the generated `biome.json` file with any project-specific rules.
- [ ] Add scripts to `package.json` for checking and applying formatting and linting (e.g., `"format": "biome format --write ."` and `"lint": "biome lint ."`).
- [ ] **Verification**: All development tools (pnpm, Biome) are properly configured and tested. Running the format and lint scripts works as expected.

## 2. Epic: Initial Content Implementation

Goal: Build out the core pages and navigation structure as defined in the PRD.

### 2.1. Task: Implement website structure and navigation
- [ ] Modify the `src/content/config.ts` file to define the site title and sidebar navigation.
- [ ] The sidebar should include main sections for "Guides" and "Language Reference".
- [ ] **Verification**: The sidebar on the locally running website correctly displays the new navigation structure.

### 2.2. Task: Create initial content pages
- [ ] Populate the main landing page (`src/content/docs/index.mdx`) with the introductory content about Boba Lang.
- [ ] Create and add content to the "Get Started" guide (`src/content/docs/guides/get-started.mdx`).
- [ ] Create and add content for the initial "Variables" and "Functions" pages under `src/content/docs/reference/`.
- [ ] Create a placeholder page for the formal grammar at `src/content/docs/reference/grammar.mdx`.
- [ ] **Verification**: All created pages are accessible via the sidebar, render correctly, and display the appropriate content.

## 3. Epic: Additional Tasks / Backlog

### 3.1. Task: Create the machine-readable context file for the AI assistant

- [ ] Create a new file at `public/llm.txt`.
- [ ] Populate this file with the condensed, easy-to-parse summary of Boba Lang's features, types, and syntax.
- [ ] **Verification**: The `llm.txt` file exists in the `public` directory and contains the correct language summary.

### 3.2. Task: Create initial project documentation

- [ ] Update the root `README.md` file to describe the website project itself, its purpose, and how to run it locally.
- [ ] **Verification**: The `README.md` provides clear instructions for a new developer.
