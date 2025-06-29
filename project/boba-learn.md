# learn

## Chapter 1: Getting Started: Your First Program

Welcome to Boba! The best way to start learning any new programming language is to write a program. Let's write one that prints the classic message: "Hello, world!".

### Step 1: Create Your File

First, create a new file named `hello.boba`.

### Step 2: Write the Code

Open `hello.boba` in your favorite text editor and type the following single line of code:
```boba
print("Hello, world!")
```

This line uses Boba's built-in `print()` function to display text, called a `string`, to your console.

### Step 3: Run Your Program

Now, open your terminal, navigate to the directory where you saved `hello.boba`, and run the following command:
```sh
boba run hello.boba
```

The `boba` command is the main entry point to Boba's development tools. The `run` command specifically compiles your code and, if successful, immediately executes the resulting program.

> **Note: Are you in the right directory?**
>
> Your terminal needs to be open to the same folder where you saved `hello.boba`. If you see an error like `file not found`, you can use the `cd` (change directory) command to navigate to the correct location.

#### Step 4: See the Output!

You should see the following output in your terminal:
```plaintext
Hello, world!
```

**Congratulations!** You have just written and run your very first Boba program. You've already used the Boba toolchain (`boba run`), a built-in function (`print`), and a core data type (`string`).

## Chapter 2: Storing Values: Variables and Immutability

In Boba, you can store data in variables. A core principle of the language is **immutability by default**, which helps you write safer, more predictable code.

### `let`: Immutable Bindings

The `let` keyword declares an **immutable binding**. Once a value is assigned, it cannot be changed. This should be your default choice for everything, as it prevents accidental modification.
```boba
// An immutable binding for a regular variable.
let message = "Hello, Boba!"
message = "Hello, Dave!" // COMPILE ERROR: This is NOT allowed.
```

> **A Note for JavaScript/TypeScript Developers**
>
> In Boba, `let` creates a binding that cannot be reassigned, similar to `const` in JavaScript. This is different from JavaScript's `let`, which creates a mutable variable. For mutable variables in Boba, you must use `var`.

### `var`: Mutable Variables

You should only use the `var` keyword when you have a specific and necessary reason to change a value after it's been created.

```boba
// A mutable variable, used only when mutation is required.
var counter = 0
counter = counter + 1 // This is allowed.
```

By defaulting to `let` for everything, you make your code's intent clearer and safer.

## Chapter 3: Core Building Blocks: Simple Data Types

Boba has a set of primitive types that are the building blocks of data in your programs.

### `int`

The `int` type is used to represent a 64-bit signed integer (a whole number). It is the ideal type for counting, indexing into collections, representing IDs, and any situation where fractional values are not needed.
```boba
let score: int = 100
let current_level = 10 // Inferred as int
```

### `string`

The `string` type is used to represent text.

```boba
let message: string = "Hello, Boba!"
var player_name = "June" // Inferred as a string
```

##### Formatting Strings with F-Strings

> To embed variables and expressions directly into a string, Boba uses **f-strings**. An f-string is a string literal prefixed with the letter `f`. This explicitly tells the compiler to process any expressions inside curly braces `{}`.

```boba
let player_name = "Ada"
let level: int = 10

// Use an f-string to create a formatted message.
let welcome_message = f"Welcome, {player_name} (Level {level})!" 
print(welcome_message) // Outputs: Welcome, Ada (Level 10)!

// Regular strings do not process the braces.
let template = "This is a template: {some_value}"
print(template) // Outputs: This is a template: {some_value}
```

### `boolean`

The `boolean` type represents a value that can be either `true` or `false`. Booleans are essential for controlling the flow of your program.

```boba
var is_game_over: boolean = false
var has_key = true // Inferred as a boolean
```

### Type Inference: Letting Boba Do the Work

In the examples, you may have noticed that sometimes we declare a type (`let score: int = 100`) and sometimes we don't (`let current_level = 10`). When you assign a value as you declare a variable, Boba can usually figure out, or infer, the type for you. `10` is clearly an `int`, `"Ada"` is a `string`, and `true` is a `boolean`. This is a convenience feature to keep your code concise. You should add an explicit type annotation when it helps improve clarity.

## Chapter 4: Reusing Code: Functions

Functions are blocks of code that you can name and call from other parts of your program. They are essential for organizing your code and making it reusable.

## Defining and Calling Functions

You define a function using the `fn` keyword. You can also specify the types of the arguments and the return value.

```boba
// A simple function that takes no arguments and returns nothing.
pub fn sayHello() {
  print("Hello, Boba!")
}

// Call the function
sayHello()
```

### Function Calls: Mandatory Named Arguments

To maximize clarity, Boba requires function arguments to be called with their names by default. This makes function call sites self-documenting. This approach is built into the language to achieve the clarity that developers in other languages like JavaScript or Python often simulate by passing a single 'options' object to a function.

**Rule 1: Named Arguments by Default**

All arguments at a function call site _must_ be called with their name, using a colon (`:`) as a separator.

```boba
// This function requires named arguments.
pub fn connect(host: string, port: int, timeout: int) { /* ... */ }

// Correct call:
connect(host: "boba.dev", port: 9000, timeout: 5000)

// COMPILE ERROR: Positional arguments not allowed for this function.
// connect("boba.dev", 9000, 5000)
```

**Rule 2: Opting-in to Positional Arguments**

For a parameter to be callable positionally, its name in the function _declaration_ must be prefixed with an underscore (`_`).

```boba
// This function allows positional arguments.
pub fn add(_ a: int, _ b: int) -> int { return a + b }

// Correct calls:
add(5, 3)
add(a: 5, b: 3) // Named calls are still allowed for clarity.
```

**Rule 3: Mixed Calls**

If a function has both positional and named arguments, all positional arguments must come first.

```boba
// This function mixes positional and named arguments.
pub fn create_user(_ id: int, name: string, is_admin: boolean) { /* ... */ }

// Correct call: Positional arguments first.
create_user(101, name: "Ada", is_admin: false)

// COMPILE ERROR: Positional argument cannot follow a named argument.
// create_user(name: "Ada", 101, is_admin: false)

## Chapter 5: Manipulating Data: Operators

Now that you know about variables and data types, let's look at how to manipulate them using operators. Operators are special symbols that perform operations on your data.

## Arithmetic Operators

Boba provides a standard set of arithmetic operators for performing mathematical calculations.

| Operator | Description      | Example                |
| :------- | :--------------- | :--------------------- |
| `+`      | Addition         | `5 + 2` results in `7`   |
| `-`      | Subtraction      | `5 - 2` results in `3`   |
| `*`      | Multiplication   | `5 * 2` results in `10`  |
| `/`      | Division         | `5 / 2` results in `2.5` |
| `%`      | Modulo (remainder) | `5 % 2` results in `1`   |
| `^`      | Power (Note: some languages like Python and JavaScript use `**` for this) | `5 ^ 2` results in `25`  |

## Comparison Operators

Comparison operators are used to compare two values. They always result in a `boolean` (`true` or `false`) value.

| Operator | Description          | Example               |
| :------- | :------------------- | :-------------------- |
| `==`     | Equal to             | `5 == 5` is `true`    |
| `!=`     | Not equal to         | `5 != 5` is `false`   |
| `<`      | Less than            | `5 < 8` is `true`     |
| `>`      | Greater than         | `5 > 8` is `false`    |
| `<=`     | Less than or equal   | `5 <= 5` is `true`    |
| `>=`     | Greater than or equal| `5 >= 8` is `false`   |

##### Checking for Containment with `in`

> To check if an element exists within a `list`, `map`, or `string`, you can use the highly readable `in` operator.

```boba
let inventory: string[] = ["sword", "shield", "potion"]

// Check if "shield" is in our inventory list.
if "shield" in inventory {
  print("You are well-defended!")
}

let player_skills = {"archery": 5, "magic": 3}

// For maps, `in` checks if the key exists.
if "stealth" in player_skills {
  print("You can sneak.")
} else {
  print("You are not a sneaky person.") // This will print.
}
```

## Logical Operators

Logical operators are used to combine boolean values.

| Operator | Description | Example                               |
| :------- | :---------- | :------------------------------------ |
| `and`    | Logical AND | `true and false` results in `false` |
| `or`     | Logical OR  | `true or false` results in `true`   |
| `not`    | Logical NOT | `not true` results in `false`       |

```boba
var has_key = true
var is_door_locked = false

if has_key and not is_door_locked {
  print("You can open the door!")
}

## Chapter 6: Making Decisions: if/else Expressions

In programming, you often need to execute different code depending on certain conditions. Boba uses the familiar `if`, `else if`, and `else` keywords to handle conditional logic.

## The `if` Statement

The `if` statement executes a block of code only if a specified condition is `true`.

```boba
var temperature: float = 30.0

if temperature > 25 {
  print("It's a hot day!")
}
```

## The `else` Statement

You can use the `else` statement to provide a block of code to execute if the `if` condition is `false`.

```boba
var score: int = 85

if score >= 60 {
  print("You passed!")
} else {
  print("You failed. Better luck next time!")
}
```

## The `else if` Statement

To handle multiple conditions, you can chain `if` statements with `else if`.

```boba
var hunger = "hungry"
var thirst = "thirsty"

if hunger == "hungry" and thirst == "thirsty" {
  print("You are hungry and thirsty.")
} else if hunger == "hungry" {
  print("You are only hungry.")
} else if thirst == "thirsty" {
  print("You are only thirsty.")
} else {
  print("You are neither hungry nor thirsty.")
}
```

### Concise Conditionals with One-Liner `if/else`

> For simple conditional assignments, you can use `if/else` as a one-line expression without curly braces. This is a clean and readable way to choose between two values.

```boba
let health: int = 75

// The entire if/else expression evaluates to a single value.
let status: string = if health > 50 { "Healthy" } else { "Injured" }

print(f"Player status: {status}") // Outputs: Player status: Healthy
```
This is similar to the ternary operator (`condition ? expr_if_true : expr_if_false`) found in languages like C++, Java, and JavaScript, but is designed for greater readability.

## Chapter 7: Repeating Actions: for and while Loops

Loops are used to execute a block of code multiple times. Boba provides two primary loops: `for` for iterating over sequences and `while` for looping as long as a condition is true.

#### The `for` Loop: The Main Iteration Tool

The `for` loop is Boba's most powerful and common loop. It can iterate over a collection of items or a range of numbers.

**1. Iterating Over Collections** This is the idiomatic way to work with every item in a `list` or `map`.

```boba
let ingredients: string[] = ["healing potion", "sword", "shield"]

// The `for...in` loop will go through each item in the list.
for item in ingredients {
  print(f"Player inventory contains: {item}")
}
```

**2. Iterating Over a Range of Numbers** To repeat an action a specific number of times, you can use a range. A range is created with the `..` (exclusive) or `..=` (inclusive) operator.

```boba
// A range from 0 up to, but not including, 5 (0, 1, 2, 3, 4).
// This will run 5 times.
for i in 0..5 {
  print(f"Executing task {i}...")
}

// An inclusive range from 1 up to, and including, 5 (1, 2, 3, 4, 5).
for i in 1..=5 {
  player.take_poison_damage(amount: 2)
  print(f"Poison damage tick {i}. Player health is now {player.health}.")
}
```

#### The `while` Loop

The `while` loop continues to execute a block of code as long as a specified condition remains `true`.

```boba
var player_mana: int = 100

// Regenerate mana until it is full.
while player_mana < 100 {
  player_mana += 5 // Using the earmarked compound assignment for example
  print(f"Regenerating... mana is now {player_mana}.")
  timer.sleep(ms: 500) // Assuming a standard library timer
}

print("Mana is full!")

## Chapter 8: Grouping Data: list and map

Boba has composite types, which are made up of primitive types.

### `list`

A `list` is an ordered collection of values of the same type. Lists are dynamic, meaning you can add or remove items.

```boba
// A list of numbers
var highScores: int[] = [100, 95, 80]

// A list of strings
var ingredients: string[] = ["flour", "sugar", "boba pearls"]
```

You can perform many operations on lists, like getting their size or adding new items.

```boba
print(ingredients.len()) // Outputs: 3

// Add a new item to the end
ingredients.push("tapioca pearls")
print(ingredients.len()) // Outputs: 4

// Access items by their index (starting from 0)
print(ingredients[0]) // Outputs: "flour"
```

### `map`

A `map` is a collection of key-value pairs. Each key must be unique, and all keys must be of the same type, as must all values.

```boba
// Create a map with string keys and number values
var scores: [string:int] = {
  "ada": 100,
  "grace": 95
}

// Check its initial size
print(scores.len()) // Outputs: 2

// Insert a new key-value pair
scores["boba"] = 105

// Check the new size
print(scores.len()) // Outputs: 3
```

Accessing a key in a map returns a special `Option` type to safely handle cases where the key might not exist. We will cover this powerful feature in a **later chapter**.

## Chapter 9: Creating Custom Types: structs

Structs, short for structures, are custom data types you can create by grouping together related variables. Think of a struct definition as a blueprint: it defines the shape and fields for a concept in your program. From that blueprint, you can then create multiple concrete instances.

## Defining a Struct

You define a struct using the `struct` keyword. Inside the struct definition, you list the variables (called fields) that make up the struct.

```boba
// Define a `Player` struct
struct Player {
  name: string,
  score: int,
  is_active: boolean
}
```

## Creating an Instance of a Struct

Once you have defined a struct, you can create instances of it using a struct literal.

```boba
// Create a new variable `ada` of type `Player`
let ada: Player = { name: "Ada", score: 100, is_active: true }
```

## Accessing Struct Fields

You can access the fields of a struct instance using dot notation.

```boba
print("Player name: {ada.name}") // Prints "Player name: Ada"
```

You now know how to bundle related data together. This is the first half of creating powerful custom types. In the next chapter, we will bring this data to life by giving our structs behavior with methods.

## Chapter 10: Adding Behavior: Methods and impl

In the last chapter, we learned how to group data using `structs`. Now, let's give them behavior by implementing functions on them, called **methods**. We do this using an `impl` (implementation) block.

## The `impl` Block

The `impl` block is where you define all the functions that belong to a `struct`.

```boba
struct Player {
  name: string,
  health: int
}

impl Player {
  // All functions related to Player will go in here.
}
```

## Associated Functions and Constructors

An **associated function** is a function that belongs to a type but is not called on a specific instance (like a `static` method in other languages). The most common associated function is `new()`, which is the idiomatic Boba convention for a constructor.

```boba
impl Player {
    /// Creates a new Player with default health.
    pub fn new(name: string) -> Player {
        return Player{
            name: name,
            health: 100
        }
    }
}
```

## Methods and the `self` Parameter

A **method** is a function within an `impl` block that takes `self` as its first parameter. `self` represents the specific instance of the struct the method is being called on.

> For developers coming from languages like JavaScript, Python, or Java, `self` is the equivalent of `this`.

```boba
impl Player {
    // ... new() function from before ...

    /// A method that prints the player's status.
    /// The `self` parameter gives us read-only access to the instance.
    pub fn print_status(self) {
        print("{self.name}'s health is {self.health}.")
    }
}
```

## Mutating State with `mut self`

By default, `self` is immutable. If a method needs to _change_ the struct's data, you must mark the parameter as `mut self`. This is an explicit signal that the method has side effects on the instance.

```boba
impl Player {
    // ... new() and print_status() from before ...

    /// Reduces the player's health by a given amount.
    pub fn take_damage(mut self, amount: int) {
        self.health -= amount
        print("{self.name} takes {amount} damage!")
    }
}

## Chapter 11: Structuring Your Project: Modules

As your programs grow larger, it becomes important to organize your code into multiple files. Boba allows you to do this using modules and the `import` keyword.

By default, all items you define in a file—functions, structs, etc.—are private, meaning they can only be used within that same file. To make an item part of a file's public API so it can be imported elsewhere, you must mark it with the `pub` keyword.

## Private by Default

By default, functions are private, meaning they can only be called from within the same file. To make a function accessible from other files, you must use the `pub` keyword.

```boba
// This function can only be called from this file.
fn myPrivateFunction() {
  print("This is a secret!")
}
```

## Importing from Other Files

You can import public functions, structs, enums, and other declarations from other Boba files. This allows you to break your code into logical modules and reuse code across your project.

## Importing Specific Items

To import specific items from a file, you list them by name inside curly braces `{}`, and can optionally rename them with `as`.

```boba
// in utils.boba
pub fn say_hello() {
    print("Hello!")
}
pub fn say_goodbye() {
    print("Goodbye!")
}

// in main.boba
say_hello() // Prints "Hello!"
farewell() // Prints "Goodbye!"
```

## Importing Everything as a Namespace

To import everything from a file as a single namespace, you can use the `* as <name>` syntax.

```boba
// in utils.boba
pub fn say_hello() { /* ... */ }
pub fn say_goodbye() { /* ... */ }

// in main.boba
utils.say_hello()
utils.say_goodbye()

## Chapter 12: Testing Your Code

Writing code is only half the battle. To build robust and reliable software, you need to verify that your code works as you expect it to. Boba's integrated tooling makes testing a simple, first-class part of the development workflow, without requiring any external libraries.

This chapter covers how to write effective tests for your Boba code, from simple functions to your private implementation details.

## What is a Test?

In Boba, a test is simply a function that verifies the correctness of your code. The test function is marked with the `#[test]` attribute, which tells the `boba test` command to discover and execute it.

The rules are simple:

- A test **passes** if the function runs to completion without panicking.
- A test **fails** if the function panics at any point.

To run all the tests in your project, simply execute `boba test`. The test runner will automatically discover and run all test functions, then print a summary of the results.

Let's look at a complete, minimal example. Here we have a function `add()` and a test for it in the same file. We use the built-in `test.assert_eq()` function to check if the output is what we expect.

```boba
//! A module for performing simple math.

/// Adds two numbers.
pub fn add(a: int, b: int) -> int {
    return a + b
}

#[test]
fn test_addition_works() {
    // This test will fail (and panic) if the result is not equal to 4.
    test.assert_eq(add(2, 2), 4)
}
```

When you run `boba test`, you'll see output like this:

```sh
Running 1 test...
test test_addition_works ... ok

Test results: 1 passed; 0 failed.
```

This is the core testing loop: write a little code, write a test, run `boba test`, and see it pass.

## Organizing Your Unit Tests

While you can write tests in the same file as your code, the idiomatic way to organize them in Boba is to use the "Designated Tester" pattern. This pattern uses a simple file naming convention to link your implementation to its tests.

Here are the rules:

- Your implementation code lives in a file, for example, `my_math.boba`.
- Your unit tests for that file live in a corresponding file named `my_math_test.boba`.
- This test file must be "designated" by placing the `#[file: test]` attribute at the very top.

Let's refactor our previous example into this structure.

**File: `src/my_math.boba`**
```boba
//! A module for performing simple math.

/// Adds two numbers. This is part of the public API.
pub fn add(a: int, b: int) -> int {
    return internal_add(a, b)
}

// This helper function is PRIVATE to this module.
fn internal_add(a: int, b: int) -> int {
    return a + b
}
```

**File: `src/my_math_test.boba`**
```boba
#[file: test] // Designates this file as the tester for my_math.boba

//! Unit tests for the my_math module.

#[test]
fn test_public_add_function() {
    test.assert_eq(add(5, 10), 15)
}
```

The `#[file: test]` attribute is what enables this pattern. It tells the compiler that `my_math_test.boba` is the official unit test file for `my_math.boba`.

## Testing Implementation Details

The real power of the `#[file: test]` attribute is that it grants the test file special permission to access the private, non-`pub` functions from its corresponding source file. This allows you to test your internal implementation details without making them public.

Let's add a test for our private `internal_add` function.

**File: `src/my_math_test.boba`**
```boba
#[file: test] // Designates this file as the tester for my_math.boba

//! Unit tests for the my_math module.

#[test]
fn test_public_add_function() {
    test.assert_eq(add(5, 10), 15)
}

#[test]
fn test_private_internal_add_function() {
    // This is allowed ONLY because of the #[file: test] attribute.
    // We can directly test our internal implementation details.
    test.assert_eq(internal_add(3, 4), 7)
}
```

This ability to test private functions is a key feature of Boba's unit testing philosophy, enabling you to write thorough tests for your module's internals while maintaining strict encapsulation for the rest of your library.

## Testing Your Public API

After unit testing is firmly established, we can introduce integration tests. Integration tests are for testing your library's public API as a whole, from an external user's perspective. These tests live in a dedicated, top-level `tests/` directory.

- Each file in the `tests/` directory is treated as a separate test program.
- These tests can only call `pub` functions from your library, just like a real user would. They cannot access private functions.

```
my_project/
├── src/
│   └── my_math.boba
└── tests/
    └── public_api_test.boba
```

**File: `tests/public_api_test.boba`**
```boba
// We need to import the public functions from our library.
#[test]
fn test_add_from_an_external_perspective() {
    // This tests the public API.
    test.assert_eq(add(100, 200), 300)
}
```

This clear separation—unit tests alongside the code with special access, and integration tests in `tests/` that consume the public API—helps you build a comprehensive and robust test suite.

## Advanced Testing Techniques

Boba's `test` module and attributes provide more tools for specific situations.

### Testing Panics

To verify that your code correctly panics under error conditions, add the `#[should_panic]` attribute to your test function. This test will now pass if the code inside panics, and fail if it does not.

```boba
#[test]
#[should_panic]
fn test_add_overflow_panics() {
    let max_int = 9223372036854775807 // int.MAX
    add(max_int, 1)
}
```

### Testing Documentation Examples

To ensure your documentation is always correct, Boba can run your `@example` blocks as tests. Run the `test` command with the `--doc` flag:

```sh
boba test --doc
```

This will execute the code inside every `@example` block across your project and report any failures, guaranteeing your examples never lie.

### Other Assertions

The built-in `test` module provides a few other helpful assertion functions for your tests.

- `test.assert_eq(left, right)`: Panics if the two values are not equal. This is the most common assertion.
- `test.assert(condition, "message")`: Panics if `condition` is false.
- `test.assert_ne(left, right)`: Panics if the two values are equal.

```boba
#[test]
fn test_various_assertions() {
    let result = 2 + 2
    test.assert_eq(result, 4)
    test.assert(result > 3, "Result should be greater than 3")
    test.assert_ne(result, 5)
}

## Chapter 13: Handling Absence: The Option Type

In many programming languages, the absence of a value is represented by `null`. While seemingly convenient, `null` is often called the "billion-dollar mistake" because it can lead to unexpected runtime errors...

To prevent this entire category of errors, Boba was designed without `null`. Instead, it provides a robust, built-in enum called `Option<T>` to handle values that might be absent.

## The `Option<T>` Enum

The `Option<T>` enum is defined as follows:

```boba
enum Option<T> {
    Some(T), // Represents the presence of a value of type T
    None,    // Represents the absence of a value
}
```

-   `Some(T)`: A variant that holds a value of type `T`.
-   `None`: A variant that represents the absence of a value. It is similar to `null` but is type-safe.

By using `Option<T>`, the possibility of an absent value becomes part of the type system. The compiler forces you to acknowledge and handle the `None` case, preventing null reference errors before they happen.

## Shortcut: Unwrapping with a Default using ??

A very common task when working with Option is to unwrap the value if it exists, or use a default value if it's None. While you can always do this with a match statement, Boba provides a much cleaner shorthand. For this common case, you can use the null coalescing operator, `??`.

```boba
// If the left side is Some(t), use t. If it's None, use the right side.
let value = config_map.get("timeout") ?? 5000
```

This operator makes your code cleaner by removing the boilerplate of a match statement for the simple "use this or a default" pattern.

## When to Use Option vs. Result

Both `Option` and `Result` deal with the possibility of a value not being what you expect, so when do you use which? The guideline is based on whether a situation is an expected absence or a failure.

*   Use **`Option<T>`** when a value could be absent, and this is a normal, expected outcome. It answers the question: "Is there a value here or not?"
    *   `find_user_by_id()`: A user might not exist. This isn't an error.
    *   `map.get(key)`: A key may not be in a map. This is normal.

*   Use **`Result<T, E>`** when a function that is *supposed* to succeed could fail for some external reason. It answers the question: "Did this operation work or not?"
    *   `fs.read_file()`: You expect to read a file, but it might fail due to permissions or the disk being full.
    *   `json.parse()`: You expect to parse a string, but it might fail because the string is malformed.

## Chapter 14: Powerful Control Flow: Pattern Matching

Boba provides a powerful `match` statement for checking a value against a series of patterns. It is a clean and expressive way to handle multiple distinct cases, and it works hand-in-hand with Boba's type system to guarantee that you've handled every possibility. You can think of `match` as a super-powered `switch` statement. However, its key strength is that the Boba compiler guarantees exhaustiveness—you are required to handle every possible case.

### The Rule of Exhaustiveness

A `match` statement in Boba must be **exhaustive**. This means you must provide a branch for every possible value the type can have. The Boba compiler will give you an error if you forget a case, preventing a whole class of bugs.

The `match` statement is most powerful when used with types that have a fixed number of variations, like `Option` and `Result`.

```boba
// Safely unwrapping an Option
match find_user(1) {
    Some(name) => print("Found user: {name}"),
    None => print("User not found.")
}
```

This exhaustiveness is what makes `match` so safe and powerful. It guarantees at compile time that you have considered both the `Some` and `None` cases, or the `Ok` and `Err` cases.

### The Default Case: `_`

Sometimes, you don't want to handle every single case explicitly. For these situations, you can use the wildcard pattern, a single underscore (`_`), as a default or "catch-all" branch. The `_` will match any value that hasn't been matched by the preceding branches.

This is useful when matching on types with many possibilities, like numbers or strings.

```boba
var status_code: int = 418

match status_code {
    200 => print("OK"),
    404 => print("Not Found"),
    // The `_` handles every other possible integer value.
    _ => print("An unexpected error occurred.")
}

## Chapter 15: Guaranteed Cleanup: defer and panic

## Guaranteed Cleanup with `defer`

The `defer` statement schedules a function call to be executed right before the current function exits. It doesn't matter *how* the function exits—whether by a `return`, by reaching the end, or by propagating an error with `?`.

```boba
pub fn process_file(path: string) -> Result<string, error> {
    // 1. Open the file. If this fails, we exit, no cleanup needed.
    var file = fs.open(path)?

    // 2. Defer the close call *immediately* after opening.
    // This is now GUARANTEED to run when process_file exits.
    defer file.close()

    // 3. Now, we can focus on the logic without worrying about cleanup.
    var data = file.read_all()?
    if data.is_empty() {
        // We can just return. `defer file.close()` will run automatically.
        return Err({ message = "File is empty" })
    }

    // `defer file.close()` will also run automatically before this return.
    return Ok("Processed data!")
}
```

## Unrecoverable Errors with `panic`

A panic is an abrupt, unrecoverable error that stops the normal execution of your program. A panic should be used for unrecoverable errors, which is another word for a bug.

When a panic occurs, the program will stop what it's doing and begin to **unwind the stack**. As it unwinds, it will execute any **`defer`** statements it finds along the way.

You can trigger a panic manually with the built-in `panic()` function.

```boba
fn get_guild_rank(player: Player) -> string {
  // This function assumes the player is in a guild.
  let rank_option = player.guild_rank() // Returns Option<string>

  match rank_option {
    Some(rank) => return rank,
    None => {
      // If we get here, it means another part of our code called this
      // function with a player who wasn't in a guild. This is a bug.
      panic(f"Critical error: get_guild_rank called on non-guild member {player.name}!")
    }
  }
}

## Chapter 16: Asynchronous Programming: async/await

Asynchronous programming is essential for building responsive and efficient applications, especially when dealing with tasks like network requests or file I/O that can take time. Boba makes writing asynchronous, non-blocking code as easy and readable as traditional, synchronous code.

## The `async` and `await` Keywords

Boba's concurrency model is built around two keywords: `async` and `await`.

-   **`async`**: A keyword that modifies a function declaration (`async fn ...`). An `async` function does not block when called. Its return type is implicitly wrapped in a `Future<T>`.
-   **`await`**: An operator that can only be used inside an `async` function. It pauses the execution of the async function until the `Future` it is waiting on has completed.

## The Power of Composition: `await` with `?`

Things get really powerful when an `async` function can also fail, returning a `Result`. Boba lets you compose `await` and the `?` operator to handle both asynchrony and errors in a single, clean expression.

```boba
// This async function can fail, so it returns a Result.
async fn fetch_user(id: int) -> Result<User, error> { /* ... */ }

// Note the `?` after await!
let user = await fetch_user(user_id: user_id)?
```
This one line does two things:

- It `await`s the `Future` to complete.
- If the result is an `Err`, the `?` operator propagates it immediately. If it's `Ok`, it unwraps the `User` value and assigns it to the variable.

This elegant composition is key to writing robust, readable asynchronous Boba code.

## Chapter 14: Handling Failures: The Result Type

In any real-world application, things can go wrong. While other languages often rely on exceptions and `try...catch` blocks, Boba encourages a more explicit approach to error handling using the `Result` enum. A file might not exist, a network request might fail, or user input might be invalid.

## The `Result` Enum

The `Result` enum is a powerful tool for handling operations that can either succeed or fail.

```boba
enum Result<T, E> {
  Ok(T),    // The 'Success' variant, holds a value of type T
  Err(E)    // The 'Failure' variant, holds a value of type E
}
```

- `T` is a generic placeholder for the type of data you expect on success.
- `E` is a generic placeholder for the type of error you expect on failure.

## The `?` Operator

Boba provides the `?` operator as a convenient way to work with `Result` values. It simplifies error handling by propagating errors up the call stack.

This operator is powerful syntactic sugar for a `match` statement that handles the `Err` case for you. Here's how it works:

- If the `Result` is `Ok(value)`, the `?` operator unwraps the `Result` and gives you the `value` inside.
- If the `Result` is `Err(error)`, the `?` operator immediately stops the current function and returns the `Err(error)`.

Let's look at an example:

```boba
// A struct to hold our configuration data
struct Config {
  hostname: string,
  port: int,
  enable_https: boolean
}

fn load_config() -> Result<Config, error> {
    // For this example, we'll assume Boba's standard library provides the `read_file` and `parse_json` functions, both of which can fail and therefore return a `Result`.

    // `read_file` returns a `Result<string, error>`.
    // If it's an `Err`, `?` returns it from `load_config`.
    // If it's `Ok`, `?` gives us the string content.
    var content = read_file("config.json")?

    // `parse_json` returns a `Result<Config, error>`.
    // `?` works the same way here.
    var config = parse_json(content)?

    print("Config loaded!")

    // If everything succeeds, we wrap the `Config` in an `Ok` and return it.
    return Ok(config)
}

## Chapter 17: Writing Professional Code: Idiomatic Boba

Welcome to the final step in your learning journey: moving from writing code that works to writing code that is truly idiomatic. Idiomatic code is clear, maintainable, and leverages the language's strengths in the way its designers intended.

## Naming Conventions

Consistent naming makes code predictable.

- **`PascalCase` for Types:** All `struct` and `enum` types.
  - `struct PlayerProfile`, `enum RequestStatus`
- **`snake_case` for Values:** All functions, methods, and variables.
  - `fn get_user_data`, `let current_score`, `var remaining_attempts`
- **`SCREAMING_SNAKE_CASE` for Constants:** Global or module-level constants declared with `let`.
  - `let MAX_CONNECTIONS = 100`

## Formatting (`boba fmt`)

The `boba fmt` tool handles formatting automatically, ensuring all code in the ecosystem is instantly familiar.

## BobaDoc: The Standardized Documentation Engine

Good code is well-documented. Boba has a built-in standard for documentation called BobaDoc, which is designed to be easy to write, human-readable, and machine-parsable.

-   **`///` (Outer Comment):** Documents the single item immediately following it (function, struct, etc.). This is the primary doc comment type.
-   **`//!` (Inner Comment):** Documents the enclosing item. When used at the top of a file, it describes the entire module.

BobaDoc uses simple `@` tags for structured data:

-   `@param name: description` - Describes a parameter.
-   `@returns: description` - Describes the return value.
-   `@panics: description` - Describes conditions that will cause a panic.
-   `@example:` - Marks a following code block as an example.

```boba
//! A module for safe file system operations.

/// Reads an entire file into a string.
///
/// This function handles opening, reading, and closing the file. It is the
/// primary, safe way to get the contents of a file.
///
/// @param path: The string path to the file to be read.
/// @returns: A `Result` containing the file's contents as a `string` on success,
///          or an `error` if the file cannot be found or read.
/// @example:
///   var content = fs.read_file("my_file.txt")?
pub fn read_file(path: string) -> Result<string, error> {
    // ... implementation ...
}
```

## Comments vs. Documentation

- Use BobaDoc (`///`) to explain the *what* and *how* for users of your API. This is for the public interface.
- Use inline comments (`//`) to explain the *why* for maintainers of your code. Explain complex logic, non-obvious choices, or the reasoning behind a particular algorithm.
