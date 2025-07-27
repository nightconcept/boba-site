# Project: Boba Language

## Project Description
Boba is a modern, interpreted scripting language designed for high productivity and seamless human-AI collaboration. It combines rapid feedback with static type safety, featuring a bytecode virtual machine architecture.

## Tech Stack
- **Language:** Rust
- **Parser:** Custom built-in lexer/parser
- **Architecture:** Bytecode Virtual Machine with stack-based execution
- **Testing:** Built-in test framework with `test.spec`/`test.it` format
- **CLI:** Single binary with no external dependencies

## Key Commands
```bash
# Build the project (debug builds are default)
cargo build
just build                   # Build core projects

# Run Boba programs
cargo run -- run file.boba
./target/debug/boba run file.boba

# Run tests
cargo test                   # Rust tests
just test                    # All tests
just e2e                     # E2E tests only
cargo run -- test file.boba # Boba language tests

# Format and lint
just format                  # Format all projects
just lint                    # Lint all projects
just check                   # Comprehensive checks

# Benchmarks
just bench                   # Full benchmarks
just bench-quick             # Quick fibonacci benchmark
```

## Project Structure
- `packages/boba-compiler/` - Core language implementation (parser, bytecode compiler, VM, runtime, stdlib)
- `packages/boba/` - Command-line interface and main binary
- `packages/boba-core/` - Core utilities
- `packages/cli/` - Additional CLI utilities
- `apps/boba-ls/` - TypeScript-based Language Server (current implementation)
- `apps/vscode-boba-ls/` - VSCode extension with syntax highlighting and LSP client
- `packages/boba/tests/` - E2E tests for Boba language features
- `project/` - Documentation and specifications
- `benchmarks/` - Performance benchmarks

## Code Conventions
- **Rust:** Standard Rust formatting with `cargo fmt`
- **Boba Language:** 
  - Immutable by default (`let`), mutable with `var`
  - Named arguments required for multi-parameter functions
  - Static typing with inference
  - Semicolons optional (prefer without)
  - Use `print()` not `println()`
  - `Option<T>` and `Result<T, E>` for error handling

## Architecture Overview
- **Bytecode VM:** Primary execution engine with optimized stack operations
- **Built-in Parser:** Custom lexer/parser implementation in Rust
- **Standard Library:** Native Rust functions exposed to Boba via `std:` imports
- **Testing:** Modern `test.spec`/`test.it` format with explicit assertions

## Boba Syntax Quick Reference
```boba
// Variables and functions (no semicolons preferred)
let x = 42                    // Immutable
var y = 10                    // Mutable
fn greet(name: string) -> string { f"Hello, {name}!" }

// Named arguments for multi-parameter functions
fn connect(host: string, port: int = 8080) -> string {
    f"Connecting to {host}:{port}"
}
connect(host: "localhost", port: 9000)  // Named args required
square(5)                               // Single arg doesn't need naming

// Control flow
if x > 0 { "positive" } else { "negative" }
for item in items { print(item) }

// Data structures
let nums = [1, 2, 3]
let user = {"name": "Boba", "score": 100}

// Standard library usage
import std:fs
import std:math
import std:test

let temp_dir = fs.tmpdir()
fs.write(path: temp_dir + "/test.txt", content: "Hello")
let result = math.sqrt(16)

// Error handling
let result: Result<int, string> = Ok(42)
let value = result?           // Propagate error

// Testing
import std:test
test.spec("Feature", || {
    test.it("should work", || {
        test.assert_eq(1 + 1, 2)
    })
})
```

## Standard Library Usage
Available modules via `import std:module_name`:
- `std:fs` - File system operations (write, append, tmpdir)
- `std:math` - Mathematical functions (sin, cos, sqrt, abs, min, max)
- `std:string` - String manipulation utilities
- `std:test` - Testing framework (assert_eq, spec, it)
- `std:io` - Input/output operations
- `std:os` - Operating system utilities
- `std:env` - Environment variables and arguments
- `std:datetime` - Date and time operations

## Testing Infrastructure

### E2E Language Tests
- **Location**: `packages/boba/tests/` (not root `tests/`)
- **Coverage**: Comprehensive Boba language feature testing
- **Formats**: Multiple test formats including legacy and modern `test.spec`/`test.it`
- **Categories**: 
  - `features/` - Language feature tests (functions, types, stdlib, etc.)
  - `compile/` - Compilation error tests
  - Integration tests for CLI commands

### Test Commands
```bash
just e2e                     # Run E2E language tests
cargo test --package boba    # Run all boba package tests
cargo run -- test file.boba # Test specific Boba file
```

## Development Workflow & Engineering Standards

### Core Engineering Principles
**MUST think like a senior software engineer:**

- **Systems Thinking**: When encountering bugs, analyze root causes and consider systemic fixes rather than surface-level patches
- **Architecture First**: Before starting any task, think through the architectural implications and design approach
- **Quality Gates**: All tests MUST pass when completing a task (unless they were already failing before starting)
- **Escalation Path**: When systemic issues are complex, discuss with the user rather than implementing quick fixes

### Development Process

1. **Pre-Task Analysis**: 
   - Understand the full scope and architectural impact
   - Identify existing test failures to establish baseline
   - Plan systemic improvements where applicable

2. **Implementation Flow**: 
   - **Source** → **Lexer/Parser** → **AST** → **Bytecode Compiler** → **VM Execution**
   - Use debug builds for development (faster compilation)
   - Write tests using modern `test.spec`/`test.it` format

3. **Code Quality Standards**:
   - Handle `Option<T>` returns from built-in methods properly
   - Use explicit assertions (`test.assert_eq`) instead of magic comments
   - Import standard library modules with `import std:module_name`
   - Test language features with E2E tests in `packages/boba/tests/`

4. **Quality Assurance**:
   - **Test Requirement**: ALL tests must pass upon task completion
   - **Exception**: Only if tests were already failing before starting the task
   - Run comprehensive test suite: `just test` and `just e2e`
   - Verify no regressions in existing functionality

### Bug Resolution Approach

1. **Root Cause Analysis**: Investigate underlying systemic issues
2. **Architectural Review**: Consider if the bug indicates a design problem
3. **Comprehensive Fix**: Implement solutions that address the category of issues, not just the specific instance
4. **User Consultation**: When systemic fixes are complex or unclear, discuss options with the user
5. **Testing**: Ensure fixes don't introduce regressions elsewhere
