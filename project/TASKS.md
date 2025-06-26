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

### 2.4. Task: Update syntax highlighting for import statements

- [x] Modify `src/grammars/boba.tmLanguage.json` to add a rule for `import`, `from`, and `as`.
- [x] **Verification**: The `import` statements in `src/content/docs/guides/boba-syntax-highlighting.mdx` are highlighted correctly.

## 3. Epic: Additional Tasks / Backlog

### 3.1. Task: Create the machine-readable context file for the AI assistant

- [ ] Create a new file at `public/llms.txt`.
- [ ] Populate this file with the condensed, easy-to-parse summary of Boba Lang's features, types, and syntax using `project/llms.txt-guidance.md` as this the closest standard that exists. [Anthropic](https://docs.anthropic.com/llms.txt) has an example of one such file you may request.
- [ ] **Verification**: The `llms.txt` file exists in the `public` directory and contains the correct language summary.

### 3.2. Task: Create initial project documentation

- [ ] Update the root `README.md` file to describe the website project itself, its purpose, and how to run it locally.
- [ ] **Verification**: The `README.md` provides clear instructions for a new developer.


## 4. Epic: Refactor Language Reference

**Goal**: Reorganize the language reference documentation into a more logical, topic-based structure. This will improve discoverability and provide a clearer learning path.

### 4.1. Task: Restructure reference documentation files

- [x] Create the new directory structure under `src/content/docs/reference/`.
- [x] Move and consolidate existing content from the old reference files into the new structure:
    - `01-language/types.mdx`: Details on string, number, boolean.
    - `01-language/collections.mdx`: Details on list, map.
    - `01-language/statements.mdx`: Details on if, match, for, while, defer, etc.
    - `01-language/declarations.mdx`: Details on fn, class, struct, enum, var, const.
    - `01-language/expressions.mdx`: Details on operators, literals.
    - `01-language/imports.mdx`: Details on the module system.
- [x] Create placeholder files for the standard library section:
    - `02-standard-library/io.mdx`
    - `02-standard-library/fs.mdx`
    - `02-standard-library/json.mdx`
    - `02-standard-library/http.mdx`
- [x] **Verification**: The new file structure is in place, and old content has been migrated. The site still builds and all links (if any) are updated.

### 4.2. Task: Update sidebar navigation for new reference structure

- [x] Modify `astro.config.mjs` to reflect the new, nested structure of the language reference in the sidebar.
- [x] **Verification**: The sidebar navigation accurately represents the new file structure and all links work correctly.


## 5. Epic: Documentation Refinements

**Goal**: Address user feedback to improve the clarity and completeness of the Boba Lang documentation.

### 5.1. Task: Enhance `init` block documentation

- [x] In `/learn`, add a section on initializers to the "Classes" chapter.
    - [x] Show an example of an `Enemy` class with `init(start_health: number)`.
    - [x] Demonstrate creating an instance with `var boss = new Enemy(500)`.
- [x] In `/reference/declarations.mdx`, formalize the rules for `init`.
    - [x] State that `init` is a special block and does not use the `fn` keyword.
    - [x] State that `init` has no return type and cannot use the `return` keyword.
    - [x] Mention that `init` can be overloaded.

### 5.2. Task: Clarify `struct` vs. `class` distinction

- [x] In `reference/declarations.mdx`, replace the "Structs vs. Classes" section with a comparison table.
- [x] The table should compare features like Kind (Value Type vs. Reference Type), Assignment behavior, Methods/`init`, and Inheritance.

### 5.3. Task: Implement minor tutorial enhancements

- [x] In the "Functions" chapter (`/learn`), link `pub` to the upcoming "Imports" chapter.
- [x] In the "Error Handling" chapter (`/learn`), add context for `read_file` and `parse_json`, noting they are assumed to be from the standard library.
- [x] In the "Classes" chapter (`/learn`), add an explicit explanation of the `self` keyword.
