# learn

## Chapter 1: Getting Started: Your First Program

Welcome to Boba! The best way to start learning any new programming language is to write a program. Let's write one that prints the classic message: "Hello, world!".

### Step 1: Create Your File

First, create a new file named `hello.boba`.

### Step 2: Write the Code

Open `hello.boba` in your favorite text editor and type the following lines of code:
```boba
fn main() {
    print("Hello, world!")
}
```

This line uses Boba's built-in `print()` function to display text. The text inside the double quotes, "Hello, world!", is a `string`—a sequence of text characters. The double quotes (`"`) are crucial syntax that tells Boba where the string begins and ends. The `fn main() { ... }` block defines the main function. This is a special function in Boba that serves as the entry point—it's the very first part of your code that runs. All the code you want to execute must be placed inside its curly braces {}.

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

**Congratulations!** You have just written and run your very first Boba program. You've already used the Boba toolchain (`boba run`), the main function (`fn main`), a built-in function (`print`), and a core data type (`string`).
## Deconstructing "Hello, World"

Let's break down the code you just wrote to understand the fundamental concepts you've already put into practice.

- **`fn main() { ... }` is the Main Function**: A function is a reusable, named block of code. The main function is a special, required function that acts as the starting point for every Boba program. When you run your file, the code inside the main function's curly braces {} is what gets executed.
- **`print()` is a Function**: For example, Boba provides the built-in `print()` function to display output. You "call" a function by writing its name followed by parentheses `()`. You can think of it like a recipe in a cookbook; you "call" the recipe by name to perform the steps within it.
- **`"Hello, world!"` is a String**: The text you see inside the double quotes is a string—Boba's data type for representing text data. The quotes are important; they tell Boba where the string begins and ends, and anything enclosed in them is treated as a single string value by the language.
- **`(...)` are Arguments**: Arguments are the specific pieces of information, or "inputs," that you provide to a function for it to work with. When you call a function, you "pass" arguments to it inside the parentheses. In this case, you passed the string `"Hello, world!"` to the `print()` function so it knew precisely what to display.

Understanding these three ideas—functions, strings, and arguments—is the first major step to mastering Boba.

### Time to Practice!

This is the perfect time to switch to your first set of exercises. They will challenge you to use the `print()` function and manipulate simple strings to solidify what you've just learned.

## Chapter 2: Variables and Simple Data Types

In Boba, you can store data in variables. A core principle of the language is **immutability by default**, which helps you write safer, more predictable code.

### `let`: Immutable Bindings

The `let` keyword declares an **immutable binding**. Once a value is assigned, it cannot be changed. This should be your default choice for everything, as it prevents accidental modification. This design choice helps prevent a large class of common bugs where data is changed unintentionally. It makes code easier to reason about because you know a value won't change unexpectedly.

```boba
let message = "Hello, Boba!"
message = "Hello, Dave!" // This will cause a compile error!
```

### Your First Compiler Error: A Helpful Guide

When you try to run the code above, the Boba compiler will stop and show you an error. It might look something like this:

```boba
Error: Cannot assign twice to immutable binding `message`.
  --> hello.boba:2:1
  |
1 | let message = "Hello, Boba!"
  |     ------- help: `message` is declared immutable here.
2 | message = "Hello, Dave!"
  | ^^^^^^^ cannot assign to `message`
  |
  = help: To make this binding mutable, use `var` instead of `let`.
```

This is a key part of the Boba development experience. The compiler is your pair programmer. It doesn't just point out errors; it often tells you exactly how to fix them. Learning to read these messages is a superpower.

### Shadowing: A Safer Way to Transform

As the compiler's help message suggests, you could change let to var to make the variable mutable. But what if you don't really need the variable to change its value over time? What if you just want to perform a transformation and then continue using that name? For this, Boba provides a safer feature called shadowing.

Shadowing allows you to declare a new variable with the same name as a previous one. This new variable "shadows" the old one, meaning the original variable is no longer accessible from this point forward. This is not a mutation; it's creating a brand new, immutable variable.

```boba
let x = 5
let x = x + 1 // This is not mutation!
// This is a new `let` binding that shadows the old `x`.
let x = x * 2
print(f"The final value of x is {x}") // Outputs: The final value of x is 12
```

Shadowing is extremely useful because it allows you to reuse a simple name for a value that you are transforming in a series of steps, all without ever making your data mutable.

> **A Note for JavaScript/TypeScript Developers**
>
> In Boba, `let` creates a binding that cannot be reassigned, similar to `const` in JavaScript. This is different from JavaScript's `let`, which creates a mutable variable. For mutable variables in Boba, you must use `var`.

### `var`: Mutable Variables

You should only use the `var` keyword when you have a specific and necessary reason to change a value after it's been created. You should use `var` only when you explicitly need to track a state that changes over time, such as a counter in a loop, a user's accumulating score, or a value that is built up incrementally.

```boba
// A mutable variable, used only when mutation is required.
var counter = 0
counter = counter + 1 // This is allowed.
```

By defaulting to `let` for everything, you make your code's intent clearer and safer.

### Core Data Types

Now that you know how to declare variables with `let` and `var`, let's explore the fundamental types of data they can hold. Boba has a set of primitive types that are the building blocks of data in your programs. When you want to be explicit, you can add a type annotation after the variable name using a colon, like this: `let name: type = value`.

### `int`

The `int` type is used to represent a 64-bit signed integer (a whole number). It is the ideal type for counting, indexing into collections, representing IDs, and any situation where fractional values are not needed.
```boba
let score: int = 100
let current_level = 10 // Inferred as int
```

### `float`

The `float` type is used for 64-bit floating-point numbers (numbers with a decimal point). It's essential for any calculations involving fractional values, such as financial data, measurements, or scientific computations.

```boba
let price: float = 4.99
let temperature = -15.5 // Inferred as float
```

### `string`

The `string` type is used to represent text.

```boba
let message: string = "Hello, Boba!"
var player_name = "June" // Inferred as a string
```

#### Formatting Strings

To embed variables and expressions directly into a string, Boba uses **f-strings**. An f-string is a string literal prefixed with the letter `f`. This prefix acts as a signal that commands the compiler to actively scan the string for `{}` placeholders and evaluate the expressions inside them.

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

In the examples, you may have noticed that sometimes we declare a type (`let score: int = 100`) and sometimes we don't (`let current_level = 10`). When you assign a value as you declare a variable, Boba can usually figure out, or infer, the type for you. `10` is clearly an `int`, `"Ada"` is a `string`, and `true` is a `boolean`. While this makes code more concise, adding explicit type annotations can serve as powerful documentation, especially on function signatures or for complex data. It's a choice the developer makes to balance conciseness with clarity for other developers (or their future self).

#### **Time to Practice!**
>
> Head over to your next set of exercises. You'll get hands-on practice creating variables, fixing compiler errors related to immutability, and working with `string`, `int`, and `boolean` types.

## Chapter 3: Reusing Code: Functions

Functions are blocks of code that you can name and call from other parts of your program. They are essential for organizing your code and making it reusable.

## Defining and Calling Functions

You define a function using the `fn` keyword. You can also specify the types of the arguments and the return value.

```boba
// A simple function that takes no arguments and returns nothing.
fn say_hello() {
  print("Hello, Boba!")
}

// Call the function
say_hello()
```

### Functions with Return Values
To have a function return a value, you must declare its type after an arrow (`->`). Inside the function, you use the `return` keyword to send the value back to the code that called it.

```boba
fn get_greeting(name: string) -> string {
  return f"Hello, {name}!"
}

let message = get_greeting(name: "Boba")
print(message) // Outputs: Hello, Boba!
```

## Function Calls: Mandatory Named Arguments

A common source of subtle bugs in many languages occurs when arguments are passed to a function in the wrong order. For example, a function call like `create_user("Admin", 123)` might silently succeed when the function actually expected `(id: int, role: string)`. Boba solves this problem by requiring named arguments by default.

To maximize clarity, Boba requires function arguments to be called with their names by default. This makes function call sites self-documenting. This approach is built into the language to achieve the clarity that developers in other languages like JavaScript or Python often simulate by passing a single 'options' object to a function.

### The Default: Named Arguments

All arguments at a function call site _must_ be called with their name, using a colon (`:`) as a separator.

```boba
// This function requires named arguments.
pub fn connect(host: string, port: int, timeout: int) { /* ... */ }

// Correct call:
connect(host: "boba.dev", port: 9000, timeout: 5000)

// COMPILE ERROR: Positional arguments not allowed for this function.
// connect("boba.dev", 9000, 5000)
```

### Opting-In to Positional Arguments

For a parameter to be callable positionally, its name in the function _declaration_ must be prefixed with an underscore (`_`). The function's author uses this to signal that the argument's order is natural and unambiguous, like the operands in an addition function.

```boba
// This function allows positional arguments.
pub fn add(_ a: int, _ b: int) -> int { return a + b }

// Correct calls:
add(5, 3)
add(a: 5, b: 3) // Named calls are still allowed for clarity.
```

### Controlling Visibility: Public vs. Private Functions

Now that you know how to define a function, it's important to understand who can call it. Boba is designed for safety and clear organization, so it has a simple rule: by default, everything you create is private.

When a function is private, it means it can only be seen and used by code within the very same file where it is defined. It is completely invisible to the outside world. This is a powerful feature that lets you write internal helper functions without worrying that they will be used incorrectly by other parts of a large program.

To make a function part of a file's public API so that it can be used by other files, you must explicitly mark it as public using the pub keyword at the beginning of its definition.

You can think of it like building a house:
- A private function (the default) is like a bedroom or a utility closet—it's essential for the house to work, but it's only meant to be used by the people living inside.
- A public function (marked with pub) is like the front door or the mailbox—it's the official, designated way for guests and visitors to interact with the house from the outside.

You may have noticed the pub keyword in some of the previous examples. This new understanding explains why it was there: those functions were being designed as public, reusable tools. This concept of public versus private will apply to other things you create later, such as structs and enums.

### Mixing Named and Positional Arguments

If a function has both positional and named arguments, all positional arguments must come first.

```boba
// This function mixes positional and named arguments.
pub fn create_user(_ id: int, name: string, is_admin: boolean) { /* ... */ }

// Correct call: Positional arguments first.
create_user(101, name: "Ada", is_admin: false)

// COMPILE ERROR: Positional argument cannot follow a named argument.
// create_user(name: "Ada", 101, is_admin: false)
```

### Default Parameters
You can make function arguments optional by providing a default value. This is done by adding `= value` after the parameter's type. If the argument is omitted in the function call, the default value is used.

```boba
fn connect(host: string, port: int = 8080, use_tls: boolean = true) {
  print(f"Connecting to {host}:{port} (TLS: {use_tls})")
}

connect(host: "boba.dev") // Uses default port and TLS setting
connect(host: "boba.dev", port: 9000) // Overrides port, uses default TLS
```

### Chaining Functions with the Pipe Operator

Boba includes a special pipe operator (`|>`) to make chaining function calls more readable. It takes the result of the expression on its left and passes it as the first argument to the function on its right.

This operator is purely for developer ergonomics. It transforms deeply nested calls that must be read "from the inside-out" into a linear sequence of steps that can be read "from left-to-right," which more closely matches how we think about a data transformation pipeline.

Consider a set of functions to process text:

```boba
fn trim(s: string) -> string { /* ... */ }
fn to_uppercase(s: string) -> string { /* ... */ }
fn emphasize(s: string) -> string { f"**{s}**" }
```

Without the pipe operator, processing a message requires nesting the calls, which is read from the inside out and can be hard to follow:

```boba
let message = "  hello world  "
let formatted = emphasize(to_uppercase(trim(message)))
// formatted is "**HELLO WORLD**"
```

With the pipe operator, you can express the same logic as a clear, left-to-right sequence of transformations:

```boba
let message = "  hello world  "
let formatted = message |> trim() |> to_uppercase() |> emphasize()
// formatted is "**HELLO WORLD**"
```

The pipe operator is especially powerful when combined with functions that take both positional and named arguments. It passes its result as the first positional argument, allowing you to cleanly chain operations that feed into more complex functions.

```boba
// From our previous example of a mixed-argument function
fn create_user(_ id: int, name: string, is_admin: boolean) {
  print(f"Creating user {id}: {name} (Admin: {is_admin})")
}

let user_id = 101

// The pipe passes `user_id` as the first argument to `create_user`
user_id |> create_user(name: "Ada", is_admin: false)
// Outputs: Creating user 101: Ada (Admin: false)
```

This style is a cornerstone of functional programming and is highly encouraged in Boba for creating readable data processing pipelines.

## Chapter 4: Manipulating Data: Operators

Now that you know about variables and data types, let's look at how to manipulate them using operators. Operators are special symbols that perform operations on your data.

## Arithmetic Operators

Boba provides a standard set of arithmetic operators for performing mathematical calculations.

| Operator | Description      | Example                |
| :------- | :--------------- | :--------------------- |
| `+`      | Addition         | `5 + 2` results in `7`   |
| `-`      | Subtraction      | `5 - 2` results in `3`   |
| `*`      | Multiplication   | `5 * 2` results in `10`  |
| `/`      | Division         | `5.0 / 2.0` results in `2.5`, `5 / 2` results in `1` |
| `%`      | Modulo (remainder) | `5 % 2` results in `1`   |
| `^`      | Power (Note: This differs from Python and JavaScript, which use `**` for exponentiation.) | `5 ^ 2` results in `25`  |

```boba
let score = 10
let bonus = score * 2
let total_score = score + bonus
let final_level = total_score / 10

print(f"Final level is: {final_level}") // Outputs: Final level is: 3
// When dividing two integers, Boba performs integer division, which
// discards any fractional remainder and returns an integer.
```

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

```boba
let score = 85
let is_passing = score >= 60

print(f"Is the student passing? {is_passing}") // Outputs: Is the student passing? true
```

### Checking for Containment with 'in'

To determine if a list contains a specific element, a map contains a certain key, or a string contains a substring, Boba provides the highly readable `in` operator.

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
let has_key = true
let is_door_locked = false

if has_key and not is_door_locked {
  print("You can enter the room.") // This will print.
}
```

> #### **Time to Practice!**
>
> You now have the tools to manipulate data. The next set of exercises in your `boba-learning` course will test your knowledge of all these operators to solve small challenges.

## Chapter 5: Making Decisions: if/else Expressions

In Boba, conditional logic is used not only to control which code runs (as a statement), but also to evaluate to a value (as an expression). This makes `if/else` a powerful tool for both program flow and variable assignment. This allows developers to write more declarative code, often eliminating the need for temporary mutable variables, leading to safer and more concise logic.

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

### Using if as an Expression

In Boba, `if/else` blocks are expressions. The final expression in the chosen branch is the value that the entire block evaluates to. This value can then be assigned to a variable or returned from a function.

```boba
let health: int = 75

// The entire if/else expression evaluates to a single value.
let status: string = if health > 50 { "Healthy" } else { "Injured" }

print(f"Player status: {status}") // Outputs: Player status: Healthy
```

This concept isn't limited to single lines. Full `if/else` blocks are also expressions, meaning they can evaluate to a value that can be returned or assigned. This allows for very clean and readable logic without temporary mutable variables.

In Boba, `if/else` blocks are expressions. The final expression in the chosen branch is the value that the entire block evaluates to. This value can then be assigned to a variable or returned from a function.
```boba
let player_health = 75

let armor_message: string = if player_health == 100 {
    print("Player is at full health.")
    "Wearing pristine, shining armor."
} else if player_health > 50 {
    "Wearing battle-worn, dented armor."
} else {
    "Wearing cracked and broken armor."
}

print(armor_message) // Outputs: Wearing battle-worn, dented armor.
```

Any statements before the final expression are executed for their side effects, but they do not affect the return value of the block. In that example, `print(...)` runs, and then the string literal that follows it becomes the value of that branch.

## Chapter 6: Repeating Actions: for and while Loops

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

**2. Iterating Over a Range of Numbers** To repeat an action a specific number of times, you can use a range. A range is created with the `..` (exclusive) or `..=` (inclusive) operator. A range is a temporary sequence of numbers created on-the-fly, specifically for the purpose of iteration.

```boba
// A range from 0 up to, but not including, 5 (0, 1, 2, 3, 4).
// This will run 5 times.
for i in 0..5 {
  print(f"Executing task {i}...")
}

// An inclusive range from 1 up to, and including, 3.
for i in 1..=3 {
  print(f"This is message number {i}.")
}
// Output:
// This is message number 1.
// This is message number 2.
// This is message number 3.
```

#### The `while` Loop

The while loop continues to execute a block of code as long as a specified condition remains true. You should use a while loop when you don't know ahead of time how many times you need to loop.
```boba
var countdown = 3

    / Loop as long as countdown is greater than 0.
    while countdown > 0 {
    print(f"{countdown}...")
    countdown = countdown - 1 // Decrement the counter.
    }

    print("Liftoff!")
    // Output:
    // 3...
    // 2...
    // 1...
    // Liftoff!
```

> **A Word of Caution**
> Since a `while` loop's continuation depends on a condition you manage manually, you are responsible for ensuring the condition will eventually become `false` to prevent an infinite loop.

> #### **Time to Practice!**
>
> Iteration is fundamental to programming. Your next exercises will have you using `for` and `while` loops to process collections and repeat actions, solidifying your understanding of how to control program flow.

## Chapter 7: Grouping Data: list and map

While primitive types are the basic building blocks for data, most real-world programs need to work with collections of data. Boba provides two primary, built-in collection types for this purpose: `list` and `map`.

### `list`

A `list` is an ordered collection of values of the same type. Lists are dynamic, meaning you can add or remove items.

```boba
// A list of numbers
var highScores: int[] = [100, 95, 80]

// A list of strings
var ingredients: string[] = ["flour", "sugar", "boba pearls"]
```

Lists declared with `let` are immutable, meaning their contents cannot be changed after creation. If you try to modify a list created with `let`, the Boba compiler will report an error.

```boba
let starting_gear: string[] = ["tunic", "dagger"]
// starting_gear.push("shield") // This would cause a compile error because the list is immutable.
```

You can perform many operations on lists, like getting their size or adding new items.

```boba
print(ingredients.len()) // Outputs: 3

// Add a new item to the end
ingredients.push("tapioca pearls")
print(ingredients.len()) // Outputs: 4

// Access items by their index (starting from 0)
print(ingredients[0]) // Outputs: "flour"

Boba lists are "zero-indexed," which means the first item is at index 0, the second at index 1, and so on.
```

### `map`

A `map` is a collection of key-value pairs. Think of a map like a dictionary, where each 'key' is a unique word and the 'value' is its definition. Each key must be unique, and all keys must be of the same type, as must all values.

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

To read a value from a map, you use square brackets `[]` with the key.

```boba
let adas_score = scores["ada"]
print(f"Ada's score is: {adas_score}") // Outputs: Ada's score is: 100
```

But what happens if you try to access a key that doesn't exist? In many languages, this can lead to unexpected crashes (like a `KeyError` in Python) or silent errors (like returning `undefined` in JavaScript). Boba prevents these problems. Accessing a key in a map doesn't return the value directly. Instead, it returns a special `Option` type, which safely handles cases where the key might not exist. We will cover this powerful feature in a later chapter.

## Chapter 8: Defining State with enums

While Boba provides powerful built-in enums like `Option` and `Result`, one of its key features is the ability to define your own. An **enum** (short for enumeration) is a custom type that can only be one of a specific, fixed set of possible values, called 'variants'.

This is incredibly useful for modeling state. For example, if you are tracking the status of a job, you can define an enum to ensure the status can *only* be one of the states you've defined, preventing bugs from invalid string values.

### Defining an Enum

You define an enum with the `enum` keyword, listing all its possible variants.

```boba
// This enum can only be one of three possible values.
enum JobStatus {
  Pending,
  Complete,
  Failed
}
```

### Using an Enum

Once defined, you can use the enum as a type for variables and function parameters. You access a specific variant using `EnumName.VariantName`.

```boba
// Create a variable of type JobStatus.
let current_status: JobStatus = JobStatus.Pending

// You can use enums with `match` for exhaustive state handling.
match current_status {
  JobStatus.Pending => print("The job is waiting to be processed."),
  JobStatus.Complete => print("The job finished successfully."),
  JobStatus.Failed => print("The job failed to complete.")
}
```

By using an enum, you leverage the Boba compiler as a safety net. It becomes impossible for a `JobStatus` variable to ever hold an invalid value like "in-progress" or "error". This eliminates an entire category of bugs at compile time.

This chapter provides a foundation for creating your own types. In the next chapter, you'll learn about `structs`, which let you group related data together.

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
print(f"Player name: {ada.name}") // Prints "Player name: Ada"
```

### Field Visibility and the `pub` Keyword

By default, all fields in a struct are **private**. This means they can only be accessed by code in the same file where the struct is defined. This is a core principle of encapsulation, preventing external code from relying on the internal structure of your data.

To make a field part of the struct's public API, you must explicitly mark it with the `pub` keyword.

Think of it like a building: some rooms (private fields) are for internal staff only, while the reception area (`pub` fields) is accessible to the public.

This principle of encapsulation allows the author of a struct to later refactor or change the internal, private fields without breaking the code of users who depend on it, as long as the public API (the `pub` fields) remains consistent.

```boba
// in a file named `user.boba`

pub struct User {
  pub id: int,      // This field is public and can be accessed from other files.
  username: string, // This field is private to `user.boba`.
  email: string,    // This is also private.
}
```

If you tried to access `some_user.username` from a different file, the compiler would stop you, enforcing the privacy rules you've defined.
### Mutating a Struct
To create a mutable instance whose fields you can modify, you must declare the variable using `var`. If a struct instance is bound using `let`, it is deeply immutable—neither the variable can be reassigned, nor can its fields be changed.
```boba
// Create a mutable Player instance
var boba_dev: Player = { name: "Boba Dev", score: 0, is_active: false }
print(f"Initial score: {boba_dev.score}") // Outputs: Initial score: 0

// Mutate the score field
boba_dev.score = 150
print(f"Updated score: {boba_dev.score}") // Outputs: Updated score: 150
```

### Time to Practice!

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
    // Creates a new Player with default health.
    pub fn new(name: string) -> Player {
        return Player{
            name: name,
            health: 100
        }
    }
}
```

You call an associated function directly on the type. Here's how you would create a new `Player` using the `new` function:

```boba
let player = Player.new(name: "Ada")
```

## Methods and the `self` Parameter

A **method** is a function within an `impl` block that takes `self` as its first parameter. `self` represents the specific instance of the struct the method is being called on. By default, the `self` parameter provides immutable, read-only access to the struct's instance.

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
```

To be able to call a method that mutates its instance, the instance itself must be declared as mutable using `var`. The compiler will prevent you from calling a `mut self` method on an immutable `let` binding. Here is a full example:

```boba
// First, create a mutable Player instance named boba_dev using var.
var boba_dev = Player.new(name: "Boba Dev")

// Next, print the player's initial health.
print(f"Initial health: {boba_dev.health}") // Outputs: Initial health: 100

// Then, call the take_damage method on boba_dev.
boba_dev.take_damage(amount: 25)

// Finally, print the player's health again to show it has been reduced.
print(f"Updated health: {boba_dev.health}") // Outputs: Updated health: 75
```

## Chapter 11: Structuring Your Project: Modules

As your programs grow larger, it becomes important to organize your code into multiple files. In Boba, the module system is designed to be simple and intuitive. The rules are:

1.  **Every file is a module.** Each `.boba` file you create is its own module, a private container for its contents.
2.  **Items are private by default.** All items you define in a file—functions, structs, enums, etc.—are private to that module. They can only be used within the same file.
3.  **Use `pub` to create a public API.** To make an item accessible from other modules, you must explicitly mark it with the `pub` keyword. This makes it part of the module's public API.
4.  **Use `import` to access public items.** The `import` keyword is the mechanism to use public items from one module in another.

This revised structure is more logical. It starts with the container (the file/module), explains the visibility rules within it (private/`pub`), and then explains how to cross the container boundary (`import`). This eliminates repetition and builds the concepts in a more orderly way.

> For the following examples, assume you have two files, `utils.boba` and `main.boba`, located together in the same directory.

## Importing Specific Items

To import specific items from a file, you use the `import { item } from "path"` syntax. You can list items by name inside curly braces `{}`, and can optionally rename them with `as`.

```boba
// in utils.boba
pub fn say_hello() {
    print("Hello!")
}
pub fn say_goodbye() {
    print("Goodbye!")
}

// in main.boba
// The `./` is important! It tells Boba to look in the current directory.
say_hello() // Prints "Hello!"
farewell() // Prints "Goodbye!"
```

## Importing Everything as a Namespace

To import all public items from a file as a single namespace, you can use the `import * as namespace from "path"` syntax.

```boba
// in utils.boba
pub fn say_hello() {
    print("Hello!")
}
pub fn say_goodbye() {
    print("Goodbye!")
}

// in main.boba
// The `import * as ...` syntax imports all public items under a single namespace.
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

## Unit Testing Your Code

While you can write tests in the same file as your code, the idiomatic way to organize them in Boba is to use the "Designated Tester" pattern. This pattern uses a simple file naming convention to link your implementation to its tests. The convention is to create a test file named with a `_test` suffix (e.g., `my_module_test.boba`) and link it to the implementation file using the `#[file: test]` attribute at the top of the test file.

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

The real power of the `#[file: test]` attribute is that it grants the test file special permission to access the private, non-pub items from its corresponding implementation file. This allows you to test your internal implementation details without making them public.

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

This ability to test private functions is a key feature of Boba's unit testing philosophy. This allows you to write thorough tests for your module's internal logic while still maintaining a strictly controlled public API for consumers of your library.

## Integration Testing Your Public API

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

Boba's `test` module and attributes provide more tools for specific situations.

### Advanced Testing Techniques

#### Testing Panics

To verify that your code correctly panics under error conditions, add the `#[should_panic]` attribute to your test function. This test will now pass if the code inside panics, and fail if it does not.

```boba
#[test]
#[should_panic]
fn test_add_overflow_panics() {
    let max_int = 9223372036854775807 // int.MAX
    add(max_int, 1)
}
```

#### Testing Documentation Examples

To ensure your documentation is always correct, Boba can run your `@example` blocks as tests. Run the `test` command with the `--doc` flag:

```sh
boba test --doc
```

This will execute the code inside every `@example` block across your project and report any failures. This powerful feature ensures that your documentation never becomes outdated or incorrect, guaranteeing that your examples always work as advertised.

#### Other Assertions

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

## Chapter 13: Handling Failures: The Result Type

In any real-world application, things can go wrong. A file might not exist, a network request might fail, or user input might be invalid. While other languages often rely on exceptions and `try...catch` blocks to handle these situations, Boba encourages a more explicit approach using the `Result` enum. The benefit of this approach is that using `Result` makes a function's potential for failure an honest part of its type signature, forcing the caller to acknowledge and handle potential errors at compile time.

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

Before the `?` operator was introduced, handling nested `Result` values required explicit `match` statements. For example, to get a value from a fallible operation and continue, you would write:

```boba
fn do_something() -> Result<string, error> {
    let result = might_fail() // This returns a Result

    let value = match result {
        Ok(v) => v, // Extract the value and continue
        Err(e) => return Err(e), // On failure, return immediately
    }

    // ... continue working with `value`
    return Ok(f"Success with {value}")
}
```

The `?` operator is a concise shorthand for that entire `match` block.

Let's look at an example:

```boba
// A struct to hold our configuration data
struct Config {
  hostname: string,
  port: int,
  enable_https: boolean
}

The true power of the `?` operator becomes apparent when chaining multiple operations that can each fail, as it allows you to write a clean "happy path" while correctly propagating any error that occurs at any step.

The following function, `load_config`, is a great example of this. It will read a file and parse it as JSON. Both of these operations can fail, making them perfect candidates for using `Result` and the `?` operator.

fn load_config() -> Result<Config, error> {
    var content = read_file("config.json")?
    var config = parse_json(content)?

    print("Config loaded!")

    return Ok(config)
}

### Time to Practice!

Now it's your turn. Look for opportunities in your own code to refactor functions to return a `Result`. Use the `?` operator to clean up your error handling and make your code more robust and readable.

## Chapter 14: Handling Absence: The Option Type

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

A common way to handle an `Option` is to use a `match` statement to provide a default value in the `None` case.

```boba
let timeout_option: Option<int> = user_settings.get("timeout")

let timeout: int = match timeout_option {
    Some(value) => value,
    None => 5000, // Default to 5000ms
}
```

## Shortcut: Unwrapping with a Default using ??

The `??` operator is a clean shorthand specifically for the common pattern of unwrapping a `Some` value or providing a default value if it's `None`.

```boba
// If the left side is Some(t), use t. If it's None, use the right side.
let value = config_map.get("timeout") ?? 5000
```

This operator makes your code cleaner by removing the boilerplate of a match statement for the simple "use this or a default" pattern.

## When to Use Option vs. Result

Both `Option` and `Result` deal with the possibility of a value not being what you expect, so when do you use which? The guideline can be framed as a question the developer should ask themselves.

*   For **`Option<T>`**, the question is: **"Is it normal and expected for a value to be absent here?"**
    *   `find_user_by_id()`: A user might not exist. This isn't an error; "user not found" is an expected, valid outcome of a search.
    *   `map.get(key)`: A key may not be in a map. This is normal.
    *   Getting the first element of a list: This could be `None` if the list is empty, which is a normal state.

*   For **`Result<T, E>`**, the question is: **"Is this an operation that is supposed to succeed, but could plausibly fail due to circumstances beyond my control?"**
    *   `fs.read_file()`: You expect to read a file, but it might fail due to permissions or the disk being full. A disk being full is an external failure, not an expected outcome of reading a file.
    *   `json.parse()`: You expect to parse a string, but it might fail because the string is malformed.
    *   Parsing a string into a number: This should succeed but could return an `Err` if the string is malformed (an operational failure).

> #### **Time to Practice!**
>
> Now it's time to put `Option` to work. The next exercises will challenge you to write functions that return an `Option` and then use `match` to safely handle both the `Some` and `None` cases.

## Chapter 15: Powerful Control Flow: Pattern Matching

Boba's primary tool for control flow is the powerful `match` statement. It allows you to check a value against a series of patterns in a clean and expressive way. Its key strength is that the compiler enforces **exhaustiveness**, which is why it is the perfect tool for safely working with enum types like `Option` and `Result`.

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

`match` works just as effectively on the `Result` type. Here's how you can handle a function that might return an error:

```boba
fn read_config_file() -> Result<string, error> {
    // This function might return Ok("file content") or Err({message: "..."})
    // ...
}

match read_config_file() {
    Ok(content) => print("Config file content: {content}"),
    Err(err) => print("Failed to read config: {err.message}")
}
```

While `_` is necessary for matching on types with a near-infinite number of values (like `int` or `string`), it should be used cautiously with enums. Using it can sometimes bypass the compiler's exhaustiveness check. For example, if a new variant is added to an enum later, the wildcard `_` will catch it silently instead of causing a helpful compile error that would force you to handle the new case explicitly.

This exhaustiveness is what makes `match` so safe and powerful. It's important to understand this is not just a convention; it's a guarantee. If you were to write a `match` statement for an `Option` and forget to handle the `None` case, your code would not compile. The compiler guarantees that you have considered both the `Some` and `None` cases, or the `Ok` and `Err` cases, before your program can run.

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
```

> #### **Time to Practice!**
>
> The final set of exercises will challenge you to solve problems by writing `match` statements that handle both `Option` and `Result` types, reinforcing the learning from the last three chapters.

## Chapter 16: Guaranteed Cleanup: defer and panic

## Guaranteed Cleanup with `defer`

The `defer` statement schedules a function call to be executed right before the current function exits, regardless of whether the function returns normally, propagates an error with the `?` operator, or exits due to a `panic`.

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

If a function has multiple `defer` statements, they are executed in **Last-In, First-Out (LIFO)** order. The last `defer` scheduled is the first one to run when the function exits. This is a crucial rule for correct resource management when multiple resources are acquired.

## Unrecoverable Errors with `panic`

Whereas `Result` is used for expected, recoverable errors, `panic` is reserved for unrecoverable errors that signify a bug in the program's logic. A panic is an abrupt, unrecoverable error that stops the normal execution of your program. `panic` must not be used for ordinary, expected errors like a file not being found or invalid user input; those are cases where `Result` is the appropriate tool.

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
### Time to Practice!

It's time to practice what you've learned. The next exercises will challenge you to refactor a function to use `defer` for resource cleanup and write a function that correctly panics when its input violates a critical precondition.

## Chapter 17: Asynchronous Programming: async/await

Asynchronous programming is essential for building responsive and efficient applications, especially when dealing with tasks like network requests or file I/O that can take time. Boba makes writing asynchronous, non-blocking code as easy and readable as traditional, synchronous code.

## The `async` and `await` Keywords

Boba's concurrency model is built around two keywords: `async` and `await`.

-   **`async`**: A keyword that modifies a function declaration (`async fn ...`). An `async` function does not block when called. Its return type is implicitly wrapped in a `Future<T>`. A **`Future`** is a placeholder object that represents a computation that hasn't finished yet. It's a promise that a value of type `T` will be available at some point in the future.
-   **`await`**: An operator that can only be used inside an `async` function. It pauses the execution of the async function until the `Future` it is waiting on has completed.

## A Simple Async Example

To understand the core mechanic of `async`/`await`, let's look at a complete example that doesn't involve errors. We'll simulate a network request that takes some time to complete.

```boba
// This async function simulates fetching data from a server.
// It returns a Future that will resolve to a string.
async fn fetch_greeting() -> string {
  // In a real app, this would be a network call.
  // Here, we'll just pretend it takes a moment.
  sleep(1000) // Pauses for 1000 milliseconds
  return "Hello from the server!"
}

// The main entry point of our program must also be async
// so that we can use the `await` keyword inside it.
async fn main() {
  print("Requesting greeting...")
  // We `await` the result of the async function.
  // Our program pauses here until fetch_greeting() is done.
  let greeting = await fetch_greeting()
  print(f"Received: {greeting}")
}
```

When you run this, you'll see "Requesting greeting...", a one-second pause, and then "Received: Hello from the server!". This shows the fundamental flow: calling an `async` function gives you a future, and `await`ing it pauses your current function to get the result.

> **What is an Async Runtime?**
>
> You might be wondering what is actually scheduling and running these `async` functions. Boba includes a built-in **async runtime**. This is a part of the language's standard library that manages a pool of threads and knows how to efficiently run thousands of `async` tasks, pausing them when they are waiting (like for our `sleep` or a real network call) and resuming them when they are ready to make progress. You don't need to configure or manage it; you can just write `async` code and Boba handles the rest.

## The Power of Composition: `await` with `?`

Now that you understand the basics of `async` and `await`, we can combine this knowledge with what you learned about error handling. Things get really powerful when an `async` function can also fail, returning a `Result`. Boba lets you compose `await` and the `?` operator to handle both asynchrony and errors in a single, clean expression.

```boba
// This async function can fail, so it returns a Result.
async fn fetch_user(id: int) -> Result<User, error> { /* ... */ }

// Note the `?` after await!
let user = await fetch_user(user_id: user_id)?
```
This one line does two things in a specific order. First, the `await` keyword acts, pausing the function until the `Future<Result<...>>` is resolved into a plain `Result<...>` value. Only then does the `?` operator inspect that `Result`:

- If the result is an `Err`, the `?` operator propagates it immediately.
- If it's `Ok`, it unwraps the `User` value and assigns it to the variable.

This elegant composition is key to writing robust, readable asynchronous Boba code.

### Time to Practice!

You're ready to tackle asynchronous tasks. The next exercises will prompt you to convert synchronous functions to be `async` and to use `await` to retrieve their results, preparing you for real-world I/O tasks.

## Chapter 18: Writing Professional Code: Idiomatic Boba

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

The `boba fmt` tool handles formatting automatically, ensuring all code in the ecosystem is instantly familiar. Having one official formatting tool eliminates all arguments over code style. It ensures that any Boba code a developer encounters will be instantly familiar, reducing the cognitive load of reading and contributing to new projects.

## BobaDoc: The Standardized Documentation Engine

Good code is well-documented. Boba has a built-in standard for documentation called BobaDoc, which is designed to be easy to write, human-readable, and machine-parsable.

-   **`///` (Outer Comment):** Documents the single item immediately following it.
-   **`//!` (Inner Comment):** Documents the item that contains it, most often used at the very top of a file to document the entire module.

BobaDoc uses simple `@` tags for structured data:

-   `@param name: description` - Describes a parameter.
-   `@returns: description` - Describes the return value.
-   `@panics: description` - Describes conditions that will cause a panic.
-   `@example:` - Marks a following code block as an example.

Code within `@example` blocks can be automatically tested by running the `boba test --doc` command, ensuring documentation is always accurate.

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

## What's Next?

Congratulations on completing this foundational tour of the Boba language! You've taken a significant step from writing your first "Hello, world!" to understanding the principles of idiomatic, professional Boba code.

You have mastered the core concepts of the language, including variables, control flow, functions, and custom `struct` types. More importantly, you've learned about the features that make Boba robust and safe, such as the `Option` and `Result` types for explicit error handling and the powerful built-in testing framework for verifying your code's correctness.

Your journey doesn't end here. To continue growing as a Boba developer, we encourage you to explore the following steps:

-   **Explore the official Boba Standard Library documentation.** Familiarize yourself with the rich set of tools and modules available to you.
-   **Build a small, complete project from scratch.** Apply what you've learned to create something new, like a command-line tool or a simple web server.
-   **Read through the source code of idiomatic Boba projects.** Learning from experienced developers is one of the fastest ways to deepen your understanding of best practices.
-   **Join the community.** A programming language is its ecosystem and its community. Join our Discord server or forums to ask questions, share what you've learned, and connect with other Boba developers.
