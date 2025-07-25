# Boba Lang Documentation Website - Product Requirements Document (Prototype)

1. Introduction

    Project Idea: To create a modern, professional documentation website for the Boba programming language. This site will be built using the Astro framework and its Starlight template. It will serve as the primary source of truth for human learners and as a persistent context provider for an AI development assistant.
    Problem/Need: Boba Lang needs a central, well-structured home for its documentation, tutorials, and language specification. This website addresses the need for clear, accessible materials and provides a crucial, stable context for AI-assisted development of the language itself.
    Prototype Goal: To establish the foundational structure of the Astro/Starlight site. This includes creating the main landing page, an initial "Getting Started" guide, and placeholder pages for key documentation sections like the formal grammar (EBNF) and a machine-readable llm.txt summary. The primary goal is to build a solid, well-styled scaffold that is ready for continuous content expansion.

2. Core Features / User Stories

    Feature 1: Informative Landing Page
        Description: A welcoming homepage that clearly explains what Boba Lang is, highlighting its simple syntax and developer experience. It should articulate the problems it aims to solve, such as overly complex syntax in other languages and the "developer ecosystem tax".
        User Action(s): User visits the root URL of the website.
        Outcome(s): The user quickly understands the core value proposition of Boba Lang and is presented with clear navigation to key sections like "Get Started" or "Language Concepts."

    Feature 2: "Get Started" Guide
        Description: A clear, step-by-step guide on how to install the Boba toolchain and run a simple program on Windows, macOS, and Linux.
        User Action(s): User navigates to the "Guides" > "Get Started" section.
        Outcome(s): A new user can successfully install the language and its tools on their local machine.

    Feature 3: Initial Language Concept Pages
        Description: Create the first few documentation pages detailing core language features based on the provided design. For the prototype, this will include dedicated pages for "Variables" and "Functions."
        User Action(s): User navigates through the "Language Reference" section in the sidebar.
        Outcome(s): The user can read clear explanations and see correct code examples for fundamental language constructs.

    Feature 4: Formal Grammar (EBNF) Page
        Description: A dedicated page to host the formal EBNF (Extended Backus-Naur Form) grammar for Boba Lang. For the prototype, this page will be created as a placeholder.
        User Action(s): User navigates to "Language Reference" > "Grammar".
        Outcome(s): A page exists at the correct URL, ready for the formal grammar content to be added later.

    Feature 5: Machine-Readable Context File (llm.txt)
        Description: Create a simple, non-rendered file within the project that contains a condensed, easily parsable summary of Boba Lang's syntax, types, and features. This file is specifically intended for an LLM to consume for context.
        User Action(s): An AI assistant or a developer accesses this file programmatically or manually to get a quick overview of the language.
        Outcome(s): A file is created (e.g., /public/llm.txt) containing the key language details from the initial info dump.

3. Technical Specifications

    Primary Language(s): Astro, TypeScript, Markdown (MDX)
    Key Frameworks/Libraries: Astro, Starlight (Astro template)
    Database (if any): None
    Key APIs/Integrations (if any): None for this prototype
    Deployment Target (if applicable for prototype): A static web host (e.g., Netlify, Vercel, GitHub Pages)
    High-Level Architectural Approach: A static documentation website generated by the Astro framework. All content will be managed via Markdown (MDX) files, leveraging the built-in features of the Starlight template for layout, navigation, search, and styling.
    Critical Technical Decisions/Constraints: The project MUST adhere to the standard conventions and structure of the Starlight template to ensure future maintainability and take advantage of its features.

4. Project Structure

The project will follow a standard Astro and Starlight directory layout to ensure predictability and alignment with best practices.

```plaintext
/boba-site
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── content/
│   │   ├── docs/             # All website content lives here
│   │   │   ├── index.mdx     # The landing page
│   │   │   ├── guides/
│   │   │   │   └── get-started.mdx
│   │   │   └── reference/
│   │   │       ├── variables.mdx
│   │   │       ├── functions.mdx
│   │   │       └── grammar.mdx  # Placeholder for EBNF
│   │   └── config.ts         # Starlight sidebar, title, etc.
│   └── env.d.ts
├── public/                     # Static assets, including llm.txt
│   └── llm.txt
├── astro.config.mjs            # Astro configuration file
├── package.json
└── tsconfig.json
```

    src/content/config.ts: This is the main Starlight configuration file. It will be used to define the site title ("Boba Lang"), and the structure of the sidebar navigation.
    src/content/docs/: This directory holds all the content for the website, with each .mdx file corresponding to a unique page.
    public/llm.txt: A static file containing the machine-readable summary of the language for AI assistant context.

5. Future Considerations / Out of Scope (for this prototype)

    Out of Scope for Prototype:
        Exhaustive documentation for every single language feature, operator, and keyword.
        An interactive code playground or embedded editor.
        A project blog, community forum, or news section.
        Advanced site-search configuration or analytics integration.
    Potential Future Enhancements (Post-Prototype):
        Complete a full, multi-part tutorial series for building a project in Boba.
        Add a blog for development updates and articles on language design.
        Implement interactive code samples using a WebAssembly build of the Boba interpreter/compiler.

7. Project-Specific Coding Rules (Optional)

    Language Version: Node.js (latest LTS), TypeScript (latest stable), pnpm
    Formatting/Linting: Biome. biome.json will be provided.
    Key Principles: Prioritize clarity, simplicity, and accessibility in all written content. Content must be well-structured to be easily parsed by both humans and AI.
    Naming Conventions: All content files and directories should use kebab-case (e.g., get-started.mdx).
  