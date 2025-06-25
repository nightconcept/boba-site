## 1. Executive Summary

Boba Lang is a statically typed programming language that can be run with an interpreter or compiled for Windows, macOS, and Linux platforms. It’s designed with a C/Python-like syntax and is aimed at professional developers who are often frustrated by the challenging virtual environments and fragmented tooling ecosystems of other popular languages. To solve this, Boba is engineered to provide a superior developer experience through a cohesive, "batteries-included" toolchain.

While the language is intended to be powerful enough for professional use, its clean syntax and design ensure that the skills learned are easily transferable to more common languages like C or Python. The language itself will have elements of both imperative and functional programming, offering flexibility for various programming paradigms.

Development will be practical and streamlined. The language core will be written in C, using a build system in Zig to handle the three target platforms simply. Installation will also be simple, using common package managers. The final deliverables for the project include the Boba interpreter and compiler, a website with documentation, and a VS Code extension. This extension will integrate Language Server Protocol (LSP) features for a modern development experience, directly addressing the tooling gaps found elsewhere.

## 2. Motivation and Learning Objectives

### Problem Statement

This project investigates two distinct but interconnected problems that lie at the intersection of language design and developer experience. The central thesis is that a single, well-designed language can provide a unified solution to both.

1. **The Developer Experience "Ecosystem Tax":** Developers using many popular languages must pay a persistent "tax" in the form of toolchain fragmentation. They are forced to research, configure, and maintain a disparate set of third-party tools for dependency management, project structure, code formatting, and building—a stark contrast to the integrated, "batteries-included" ecosystems of languages like Go. This creates unnecessary friction and cognitive overhead for developers at all levels.
2. **The Technical Challenge of a Unified System:** The proposed solution presents a significant technical challenge. It requires designing and implementing a single, cohesive system that combines a performant language with an integrated toolchain. This necessitates the creation of a compiler and interpreter that are tightly integrated with a built-in package manager, build system, and language server. This holistic design of the language and its tooling from first principles is the core technical investigation of this project.

### Relevance & Importance

The relevance of this project is twofold, addressing critical challenges in professional software engineering and the future of AI-assisted development.

1. **In Software Engineering:** The project challenges the accepted norm of the "ecosystem tax" by treating Developer Experience (DX) as a primary design constraint. By delivering a single, integrated toolchain, Boba aims to prove that a language can be powerful without sacrificing productivity. It serves as a practical demonstration of modern **Software Engineering & Systems Design** principles, showing how a focus on streamlined, consistent tooling can reduce cognitive load, improve code quality, and increase development velocity.
2. **In AI-Assisted Development:** The design choices required to solve the core problem—a simple, predictable grammar and strong static typing—make the language inherently well-suited for the next generation of development tools. A clear, unambiguous syntax is significantly easier for Large Language Models (LLMs) to parse, analyze, and generate correctly. Therefore, this project is also a timely exploration into designing programming languages that are ergonomic for both human developers and their AI partners, a crucial consideration for the future of the craft.

### Personal Learning Goals

This project is strategically designed to compel a master's-level synthesis of several fields in the core curriculum. My learning goals are organized around solving the two core problems outlined in the proposal.

**1. Goal: Master Compiler and Language Design by Building a Professional Language.**

- **Theoretical Concepts:** I will apply and extend my knowledge of compiler construction by designing and implementing a professional, performant language from scratch. This requires a deep understanding of lexical analysis, parsing, type systems, and code generation.
- **Curriculum Link:** This directly applies my theoretical studies in **Programming Languages** and **Compilers**.

**2. Goal: Master Modern Toolchain Engineering by Solving the "Ecosystem Tax".**

- **Theoretical Concepts:** I will learn the principles of client-server architecture and inter-process communication by implementing the Language Server Protocol (LSP). I will also apply the philosophy of a vertically integrated, user-focused system to the design of the CLI and build tools.
- **Curriculum Link:** This draws on concepts from my study of **Distributed Systems** for the client-server LSP and the principles of **Software Engineering & Systems Design** for the focus on tooling.

**3. Goal: Master Systems Programming by Delivering a Cohesive, Cross-Platform Product.**

- **Theoretical Concepts:** I will grapple with the practicalities of OS abstractions and system call interfaces by building a portable language core. I will also apply security principles to the design of the language runtime to ensure a robust and secure execution environment.
- **Curriculum Link:** This involves the practical application of concepts from my study of **Advanced Operating Systems** and **Computer Security**.

**Practical Skills Acquired:** The successful completion of this project will result in proficiency in C and Zig for cross-platform systems development, advanced compiler engineering, API design (for the CLI and LSP), and the technical writing required to produce the final white paper and documentation.
