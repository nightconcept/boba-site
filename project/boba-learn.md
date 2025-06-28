# learn

Welcome to Boba! The best way to start learning any new programming language is to write a program. Let's write one that prints the classic message: "Hello, world!".

#### Step 1: Create Your File

First, create a new file named `hello.boba`.

#### Step 2: Write the Code

Open `hello.boba` in your favorite text editor and type the following single line of code:
```boba
print("Hello, world!")
```

This line uses Boba's built-in `print()` function to display text, called a `string`, to your console.

#### Step 3: Run Your Program

Now, open your terminal, navigate to the directory where you saved `hello.boba`, and run the following command:
```sh
boba run hello.boba
```

The `boba` command-line tool will compile and execute your file.

#### Step 4: See the Output!

You should see the following output in your terminal:
```plaintext
Hello, world!
```

**Congratulations!** You have just written and run your very first Boba program. You've already used a built-in function (`print`) and a data type (`string`) without even thinking about it.

Now that you've seen a complete program in action, let's break down the fundamental building blocks of the language, starting with how to store data in variables and constants.

In Boba, you can store data in variables. A core principle of the language is **immutability by default**, which helps you write safer, more predictable code.

### `let`: Immutable Bindings

The `let` keyword declares an **immutable binding**. Once a value is assigned, it cannot be changed. This should be your default choice for everything, as it prevents accidental modification.
```boba
// An immutable binding for a regular variable.
let message = "Hello, Boba!"
```
// This would be a COMPILE ERROR: // message = "Hello again!"

### Convention: Using `let` for Constants
For universal, program-wide constants, we still use `let`, but we adopt the widely-used `SCREAMING_SNAKE_CASE` naming convention. This signals to other developers that the value has a special, constant role.

```boba
let MAX_HEALTH = 100
let PI = 3.14159
```

### `var`: Mutable Variables

You should only use the `var` keyword when you have a specific and necessary reason to change a value after it's been created.

```boba
// A mutable variable, used only when mutation is required.
var counter = 0
counter = counter + 1 // This is allowed.
```

By defaulting to `let` for everything, you make your code's intent clearer and safer.

import { Aside } from '@astrojs/starlight/components';

In the last chapter, you learned how to create variables and constants. Now, let's explore the fundamental data types you'll use to store different kinds of information in Boba.

## Primitive Types

Boba has a set of primitive types that are the building blocks of data in your programs.

### `int`

The `int` type is used to represent a 64-bit signed integer (a whole number). It is the ideal type for counting, indexing into collections, representing IDs, and any situation where fractional values are not needed.
```boba
let score: int = 100
let quantity: int = 3
let current_level = 10 // Inferred as int
```

##### Writing Numbers in Different Bases

In addition to standard decimal (base-10) numbers, Boba supports hexadecimal and binary notations, which are common in systems programming, graphics, and data manipulation.

- **Hexadecimal (base-16):** Prefix the number with `0x`. Uses digits `0-9` and letters `a-f`.
- **Binary (base-2):** Prefix the number with `0b`. Uses only digits `0` and `1`.

No matter how you write the number, it's still just an `int` with the same value.
```boba
// All of these variables hold the exact same integer value: 255
let decimal_value: int = 255
let hex_value: int = 0xFF
let binary_value: int = 0b11111111

print(decimal_value == hex_value) // true
print(hex_value == binary_value) // true
```

##### Improving Readability with `_`

Long number literals can be difficult to read. Boba allows you to use an underscore `_` as a visual separator anywhere inside a number. The compiler completely ignores it.

This works for `int` and `float` types, as well as for hex and binary notations.
```boba
// These are easier to read thanks to the '_' separator.
let one_billion: int = 1_000_000_000
let pi: float = 3.141_592_653

// This is especially useful for hex and binary values.
let packed_color: int = 0xFF_AB_00_FF
let permission_flags: int = 0b1010_1111
```

### `float`

The `float` type is used to represent a 64-bit double-precision floating-point number. It is the correct type for scientific calculations, measurements, or any value that may have a fractional component.
```boba
let price: float = 19.99
const PI: float = 3.14159
var temperature = 25.5 // Inferred as float
```
Note: While floats are powerful, be mindful of standard precision limitations inherent to floating-point arithmetic.

### `string`

The `string` type is used to represent text.

```boba
var message: string = "Hello, Boba!"
var playerName = "Ada" // Inferred as a string
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
var isGameOver: boolean = false
var hasKey = true // Inferred as a boolean
```

## Composite Types

Boba also has composite types, which are made up of primitive types.

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

Accessing a key in a map returns a special `Option` type to safely handle cases where the key might not exist. We will cover this powerful feature in a later chapter.

In the next chapter, we'll look at how to use these types with operators to perform calculations and make comparisons.

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

##### Compound Assignment Operators

> To modify a variable in-place, Boba provides a convenient shorthand: compound assignment operators. They combine an arithmetic or bitwise operation with an assignment.

```boba
var score: int = 100
// Instead of: score = score + 25
score += 25 // score is now 125

var mana: int = 50
mana -= 10 // mana is now 40

var base_damage = 10
base_damage *= 2 // base_damage is now 20
```

### Numeric Operations and Conversions

When you mix integer (`int`) and floating-point (`float`) numbers, Boba follows simple rules to keep things predictable.

1.  **Mixed-Type Math**: If you perform math (`+`, `-`, `*`) between an `int` and a `float`, the result is always a `float`.
    -   `10 (int) + 2.5 (float)` results in `12.5 (float)`.

2.  **Division Always Returns a Float**: The division operator `/` always produces a `float` to avoid bugs where whole number division gives unexpected results.
    -   `5 (int) / 2 (int)` results in `2.5 (float)`.

3.  **Explicit Conversion**: To turn a `float` into an `int`, you must be explicit with the `as` keyword, which truncates the decimal.
    -   `let my_float: float = 9.9; let my_int = my_float as int; // my_int is 9`

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

In Boba, comparisons must be explicit. You can't use a non-boolean value in a context that expects a boolean.

```boba
// WRONG
var score: int = 100
// if (score) { ... } // This will cause a compile error.

// RIGHT
if score != 0 { ... } // The result of `!=` is a boolean.
```

## Logical Operators

Logical operators are used to combine boolean values.

| Operator | Description | Example                               |
| :------- | :---------- | :------------------------------------ |
| `and`    | Logical AND | `true and false` results in `false` |
| `or`     | Logical OR  | `true or false` results in `true`   |
| `not`    | Logical NOT | `not true` results in `false`       |

```boba
var hasKey = true
var isDoorLocked = false

if hasKey and not isDoorLocked {
  print("You can open the door!")
}
```

### Bitwise Operators: Working with Individual Bits

While arithmetic operators work on a number's mathematical value, **bitwise operators** allow you to manipulate the individual `1`s and `0`s (bits) that make up an `int`. This is a powerful technique for efficiently storing sets of on/off flags, working with certain data formats, and performance-critical code.

#### The Scenario: Player Permissions

Let's imagine we're building a game where a player has guild permissions. We can store all their permissions in a single `int`. First, we define each permission as a constant, using powers of two to ensure each one occupies a unique bit.

```boba
// Each permission corresponds to a single bit.
const CAN_INVITE:  int = 1  // Binary: ...0001
const CAN_KICK:    int = 2  // Binary: ...0010
const CAN_PROMOTE: int = 4  // Binary: ...0100
```

#### Combining Flags with OR (`|`)

To grant a player multiple permissions, we use the bitwise OR operator. It combines the bits from both numbers.
```boba
// Let's grant a player permission to invite AND kick members.
let player_perms: int = CAN_INVITE | CAN_KICK
// In binary: 0001 | 0010  =  0011 (Decimal 3)
```

#### Checking for a Flag with AND (`&`)

To check if a player has a _specific_ permission, we use the bitwise AND operator. This is the most common bitwise operation.

```boba
// Does our player (perms value is 3) have permission to kick?
// The result will be non-zero only if the CAN_KICK bit is set.
if player_perms & CAN_KICK != 0 {
  print("Yes, this player can kick.") // This will print.
}

// Do they have permission to promote?
if player_perms & CAN_PROMOTE == 0 {
  print("No, this player cannot promote.") // This will print.
}
```

#### Other Bitwise Operators

Boba also supports other standard bitwise operators for advanced use cases:

- **`^` (XOR):** Toggles a bit (useful for flipping a state).
- **`~` (NOT):** Flips all bits in a number.
- **`<<` (Left Shift) and `>>` (Right Shift):** Move all bits to the left or right (useful for low-level data packing and fast multiplication/division by two).
```boba
let x: int = 4 // Binary: 0100

// Left shift by 1 (multiplies by 2)
print(x << 1) // Outputs 8 (Binary: 1000)

// Right shift by 2 (divides by 4)
print(x >> 2) // Outputs 1 (Binary: 0001)
```
With these operators, you can start writing more complex and interesting programs. In the next chapter, we'll explore how to control the flow of your program using conditionals.

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

Conditional logic is a fundamental part of programming. In the next chapter, we'll look at another crucial concept for controlling program flow: loops.

---

### New Section: Concise Conditionals with One-Liner `if/else`

> For simple conditional assignments, you can use `if/else` as a one-line expression without curly braces. This is a clean and readable way to choose between two values.

```boba
let health: int = 75

// The entire if/else expression evaluates to a single value.
let status: string = if health > 50 { "Healthy" } else { "Injured" }

print(f"Player status: {status}") // Outputs: Player status: Healthy
```

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

## Chapter 7: Exhaustive Pattern Matching with `match`

Boba provides a powerful `match` statement for checking a value against a series of patterns. It is a clean and expressive way to handle multiple distinct cases, and it works hand-in-hand with Boba's type system to guarantee that you've handled every possibility.

### The Rule of Exhaustiveness

A `match` statement in Boba must be **exhaustive**. This means you must provide a branch for every possible value the type can have. The Boba compiler will give you an error if you forget a case, preventing a whole class of bugs.

Let's see this with an `enum`.
```boba
enum TrafficLight {
    RED,
    YELLOW,
    GREEN
}

var light = TrafficLight.RED

// This match is exhaustive, so it will compile.
match light {
    TrafficLight.RED => print("Stop!"),
    TrafficLight.YELLOW => print("Caution!"),
    TrafficLight.GREEN => print("Go!")
}

// If you were to comment out the GREEN case, for example,
// the compiler would produce an error!
```

This exhaustiveness is what makes `match` so safe and powerful, especially when working with the `Option` and `Result` types we'll see later. It guarantees at compile time that you have considered both the `Some` and `None` cases.

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

### Advanced Pattern Matching

Boba's `match` statement can do much more than simple value checking. You can bind matched values to new variables and use `where` clauses for complex conditions.

```boba
// Assume we have a function that returns a Result<int, string>
var result = my_api.fetch_data()

match result {
    // Bind the value inside Ok to the variable 'n'
    Ok(n) where n > 100 => print("Received a big number: {n}"),
    Ok(n) => print("Received a smaller number: {n}"),

    // Bind the value inside Err to the variable 'msg'
    Err(msg) => print("An error occurred: {msg}")
}

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

To maximize clarity, Boba requires function arguments to be called with their names by default. This makes function call sites self-documenting.

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
```

### Private Functions

By default, functions are private, meaning they can only be called from within the same file. To make a function accessible from other files, you must use the `pub` keyword. The `pub` keyword makes your functions available to other files, a concept we'll explore in the final chapter on Imports.

```boba
// This function can only be called from this file.
fn myPrivateFunction() {
  print("This is a secret!")
}
```

### BobaDoc: The Standardized Documentation Engine

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

## Default Parameters

Boba allows you to provide default values for function parameters. This makes the function more flexible, as you can call it with fewer arguments.

```boba
pub fn connect(host: string, port: int = 5432, use_ssl: boolean = true) {
  // ... connection logic ...
}

// Call with all arguments
connect("myhost.com", 8080, false)

// Call with only the required argument
connect("myhost.com")
```

## The Pipe Operator `|>`

Boba supports the pipe operator `|>` for chaining function calls in a more readable way. The result of the expression on the left is passed as the first argument to the function call on the right.

```boba
fn add_one(n: int) -> int {
  return n + 1
}

fn square(n: int) -> int {
  return n * n
}

// The following is equivalent to square(add_one(5))
var result = 5 |> add_one() |> square()

print(result) // Outputs: 36
```

Functions are the building blocks of any Boba program. In the next chapter, we'll explore how to group related data together using structs.

Structs, short for structures, allow you to create your own custom data types by grouping together related variables. This is a powerful way to organize and manage complex data in your programs.

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

Structs are perfect for organizing data. In the next chapter, we'll learn how to give our structs behavior by adding functions directly to them.

In the last chapter, we learned how to group data using `structs`. Now, let's give them behavior by implementing functions on them, called **methods**. We do this using an `impl` (implementation) block.

### Defining an `impl` Block

The `impl` block is where you define all the functions that belong to a `struct`.

```boba
struct Player {
  name: string,
  health: int
}

impl Player {
  /// A method that prints the player's status.
  /// The `self` parameter gives us read-only access to the instance.
  pub fn print_status(self) {
    print("{self.name}'s health is {self.health}.")
  }
}
```

### Creating Instances: The `new()` Convention

To create an instance of a struct with behavior, the Boba convention is to create an associated function inside the `impl` block, typically named `new`. This acts as our constructor.

```boba
// ... inside impl Player ...
impl Player {
    pub fn new(name: string) -> Player {
      return Player{
        name: name,
        health: 100 // Default health
      }
    }
}
```

Now we can create a `Player` like this:

```boba
let player1 = Player.new("Ada")
player1.print_status() // Outputs: Ada's health is 100.
```

### Modifying State with `mut self`

By default, `self` is immutable. If a method needs to _change_ the struct's data, you must mark the parameter as `mut self`. This is an explicit signal that the method has side effects on the instance.

```boba
// ... inside impl Player ...
impl Player {
    pub fn take_damage(self: mut Player, amount: int) {
      self.health -= amount
      print("{self.name} takes {amount} damage!")
    }
}
```

To call a mutating method, the variable holding the struct instance must also be declared with `var`.

```boba
var player2 = Player.new("Boba")
player2.take_damage(25) // This is allowed because player2 is mutable.
player2.print_status()  // Outputs: Boba's health is 75.

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

## Working with `Option<T>`

If a variable can be absent, you must declare it with the `Option<T>` type.

```boba
// A function that might not find a user
fn find_user(id: int): Option<string> {
    if id == 1 {
        return Some("Alice")
    }
    return None
}

var user = find_user(1) // user is Option<string>
var missing_user = find_user(2) // missing_user is also Option<string>
```

### Safely Unwrapping with `match`

The primary way to work with an `Option<T>` is the `match` statement. It allows you to safely "unwrap" the value from the `Some` variant while ensuring you handle the `None` case.

```boba
match user {
    Some(name) => {
        // The 'name' variable is the string "Alice"
        print("Found user: " + name)
    },
    None => {
        print("User not found.")
    }
}

match missing_user {
    Some(name) => {
        print("Found user: " + name)
    },
    None => {
        // This branch will be executed
        print("User not found.")
    }
}
```

This pattern guarantees that you can only access the inner value when it is actually present (`Some`), and you are forced to provide a code path for when it is not (`None`).

## The Safety of the `Option<T>` Model

To understand the safety `Option<T>` provides, it's helpful to contrast Boba's model with that of languages that use `null`:

-   **In languages with `null` (like Java or JavaScript):** A variable of type `User` could be a `User` object or `null`. You must remember to check for `null` every time. If you forget, your program can crash.

-   **In Boba:** A variable of type `Option<User>` is a container that might hold a `User`. The compiler requires you to handle both the `Some(User)` and `None` cases, guaranteeing that you cannot accidentally use a value that isn't there.

By embracing `Option<T>`, Boba helps you write safer, more predictable code from the start. Now that you've seen how to handle the *absence* of a value, let's look at how to handle operations that can *fail* in the next chapter.

In any real-world application, things can go wrong. A file might not exist, a network request might fail, or user input might be invalid. Boba encourages a robust approach to error handling using the `Result` enum.

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

Here's how it works:

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
    // To demonstrate this, we'll use Boba's built-in `read_file` and `parse_json`
    // functions, which are designed to return a `Result`.

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
```

This approach to error handling makes your code cleaner and more reliable. But what happens when a function that can fail also needs to clean up resources, like closing a file? In the next chapter, we'll see how `defer` solves this problem perfectly.

Welcome to the next step in your Boba journey! We've seen how to handle potential problems with `Result` and `?`. Now, let's learn how to make sure our program always cleans up after itself, no matter what happens.

## The Problem: Forgetting to Clean Up

Imagine you're working with a file. You need to open it, read some data, and then—most importantly—close it. If you don't close the file, you can cause problems like resource leaks.

This gets tricky when your function has multiple ways to exit.

```boba
pub fn process_file(path: string) -> Result<string, error> {
    var file = fs.open(path)?

    var data = file.read_all()?
    if data.is_empty() {
        file.close() // We have to close it here...
        return Err({ message = "File is empty" })
    }

    file.close() // ...and we have to close it here too.
    return Ok("Processed data!")
}
```

It's easy to forget one of those `file.close()` calls, leading to bugs.

## The Solution: `defer`

Boba provides a simple and powerful keyword to solve this: `defer`.

The `defer` statement schedules a function call to be executed right before the current function exits. It doesn't matter *how* the function exits—whether by a `return`, by reaching the end, or by propagating an error with `?`.

Let's rewrite our example using `defer`:

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

By placing `defer file.close()` right after `fs.open(path)?`, we make our code cleaner, safer, and easier to read. The cleanup code is right next to the resource it's cleaning up.

Now that you've mastered writing robust Boba code, let's look at how to handle situations that are truly unrecoverable.

### Chapter 14: Unrecoverable Errors and Panics

In the last chapters, we learned how to handle expected failures using `Result` and how to guarantee cleanup using `defer`. But what happens when something goes wrong that should be _impossible_? This is where Boba's `panic` mechanism comes in.

#### Recoverable vs. Unrecoverable Errors

First, let's understand the difference:

- **Recoverable Error:** An error that is expected to happen sometimes. A user might enter a bad file path, or a network request might time out. We use `Result<T, E>` to handle these because our program can gracefully continue.
```boba
// Trying to open a file is an action that can reasonably fail.
let file_result = fs.open(path: "my_file.txt")
```

- **Unrecoverable Error (A Bug):** An error that indicates a critical problem with the program's logic itself. For example, trying to access a list element at an index that doesn't exist, or a mathematical impossibility. If these things happen, the program is in an unknown, unpredictable state, and continuing could lead to more errors or data corruption. For these situations, Boba **panics**.
    

#### What is a Panic?

A panic is an abrupt, unrecoverable error that stops the normal execution of your program.

When a panic occurs, the program will stop what it's doing and begin to **unwind the stack**. As it unwinds, it will print an error message and a stack trace to help you debug the problem.

Most importantly, as the stack unwinds, the runtime will execute any **`defer`** statements it finds along the way. This is a crucial safety feature that ensures that even during a crash, critical cleanup tasks (like closing files or releasing resources) are still performed.

#### Implicit Panics: Integer Overflow

To protect against a common and dangerous type of bug, Boba will automatically panic on integer overflow in development and test builds.

In many languages, adding 1 to the maximum possible integer value silently "wraps around" to a large negative number, leading to unpredictable behavior. Boba considers this a bug.

```boba
// For this example, let's pretend the max value for an int is 1_000.
let max_score: int = 1_000
var current_score = 995

current_score += 5 // This is okay. current_score is now 1_000.

// This next line will cause the program to stop and panic!
current_score += 1

// The program will crash with a message like:
// panic: integer overflow occurred on addition.
```

This turns a silent, hard-to-find bug into a loud, obvious crash that you can fix immediately.

#### Explicit Panics: The `panic()` Function

Sometimes, you need to signal an unrecoverable error yourself. If your code reaches a state that you believe should be logically impossible, you can trigger a panic manually with the built-in `panic()` function.

Let's imagine a function in our game that gets a player's guild status, but it should only ever be called for players who are actually in a guild.

```boba
fn get_guild_rank(player: Player) -> string {
  // This function assumes the player is in a guild.
  // We can get their rank from an Option type.
  let rank_option = player.guild_rank() // Returns Option<string>

  match rank_option {
    Some(rank) => return rank,
    None => {
      // If we get here, it means another part of our code called this
      // function with a player who wasn't in a guild. This is a bug
      // in our program's logic.
      panic(f"Critical error: get_guild_rank called on non-guild member {player.name}!")
    }
  }
}

While Boba is a multi-paradigm language and not strictly functional, its design and standard library conventions strongly encourage a pure functional style wherever possible.

A **pure function** is a function that has two key properties:

1.  **Deterministic:** Given the same input, it will always return the same output.
2.  **No Side Effects:** It does not modify any state outside of its own scope (like changing a global variable or writing to a file).

Writing code with pure functions makes it easier to test, reason about, and verify, both for humans and for automated tools.

## The Guideline: Transform Data, Don't Mutate

This philosophy is a design guideline, not a strict compiler rule. The core idea is that functions that transform data should return **new** data rather than modifying their inputs in-place.

A function that *does* mutate its input should have a name that makes this behavior explicit (e.g., `sort_in_place`).

### Example: Purity in the Standard Library

Let's see how this principle applies to a common task: sorting a list.

```boba
let original_list = [3, 1, 2]

// PURE: The sorted() function returns a NEW, sorted list.
let sorted_list = original_list.sorted()

// The original list is untouched.
print(original_list) // Output: [3, 1, 2]

// The new list contains the sorted data.
print(sorted_list) // Output: [1, 2, 3]
```

For cases where performance is critical and you want to avoid allocating a new list, a separate, clearly-named "impure" version is provided.

```boba
// IMPURE (but clearly named): The sort_in_place() method modifies the list.
var mutable_list = [3, 1, 2]
mutable_list.sort_in_place()

// The original list has been mutated.
print(mutable_list) // Output: [1, 2, 3]
```

By embracing this philosophy, you can build more robust and maintainable systems in Boba. This style makes your program's data flow explicit and predictable.

As your programs grow larger, it becomes important to organize your code into multiple files. Boba allows you to do this using the `import` keyword.

## Importing from Other Files

You can import public functions, structs, enums, and other declarations from other Boba files. This allows you to break your code into logical modules and reuse code across your project.

### Importing Specific Items

To import specific items from a file, you list them by name.

```boba
// in utils.boba
pub fn sayHello() {
  print("Hello!")
}

// in main.boba
import sayHello from "./utils.boba"

sayHello() // Prints "Hello!"
```

### Importing Everything

To import everything from a file, you can use the `*` wildcard.

```boba
// in utils.boba
pub fn sayHello() { ... }
pub fn sayGoodbye() { ... }

// in main.boba
import * from "./utils.boba"

sayHello()
sayGoodbye()
```

### Renaming Imports

You can rename an imported item using the `as` keyword. This is useful to avoid naming conflicts.

```boba
// in utils.boba
pub fn sayHello() { ... }

// in main.boba
import sayHello as greet from "./utils.boba"

greet() // Prints "Hello!"
```

## A Note on Paths

Import paths are always relative to the current file.

---

Congratulations! You have completed the Boba language tutorial. You've learned about variables, data types, control flow, functions, and how to structure your code. You now have a solid foundation in the core concepts of the language.

The journey doesn't end here. The next logical step is to explore the guides on how to configure your project and use the Boba tooling effectively. Happy coding!

Asynchronous programming is essential for building responsive and efficient applications, especially when dealing with tasks like network requests or file I/O that can take time. Boba makes writing asynchronous, non-blocking code as easy and readable as traditional, synchronous code.

## The `async` and `await` Keywords

Boba's concurrency model is built around two keywords: `async` and `await`.

-   **`async`**: A keyword that modifies a function declaration (`async fn ...`). An `async` function does not block when called. Its return type is implicitly wrapped in a `Future<T>` (or a similar construct) that is managed by the Boba runtime.
-   **`await`**: An operator that can only be used inside an `async` function. It pauses the execution of the async function until the `Future` it is waiting on has completed, at which point it unwraps the result. While the function is paused, the Boba runtime is free to execute other tasks.

### Example: Concurrent Data Fetching

Let's look at a practical example where we need to fetch a user's profile and their permissions from two different API endpoints concurrently.

```boba
//! Example of fetching data concurrently.

/// Fetches the user profile from one API.
async fn fetch_user(id: int) -> Result<User, error> { /* ... */ }

/// Fetches the user's permissions from another API.
async fn fetch_permissions(id: int) -> Result<Permissions, error> { /* ... */ }

/// Gets a complete user profile by running fetches concurrently.
async fn get_full_profile(user_id: int) -> Result<FullProfile, error> {
  print("Starting profile fetch for user {user_id}")

  // Start both fetches without blocking.
  // The `async` functions immediately return a Future.
  let user_future = fetch_user(user_id: user_id)
  let perms_future = fetch_permissions(user_id: user_id)

  // Now, `await` the results.
  // The code will pause here until `user_future` is complete.
  let user = await user_future?
  // Then it will pause here until `perms_future` is complete.
  let permissions = await perms_future?

  print("Both fetches complete. Assembling profile.")
  return Ok(FullProfile{ user: user, permissions: permissions })
}
```

By starting both operations before awaiting either, we allow the Boba runtime to work on both tasks in parallel, significantly reducing the total wait time. This powerful pattern is fundamental to writing high-performance Boba applications.

A single, consistent code style is a cornerstone of the Boba ecosystem. It eliminates debates over formatting and makes all Boba code instantly familiar, which significantly improves readability and maintainability.

The official tool, `boba-fmt`, automatically formats your code to match these rules.

## The `boba-fmt` v1.0 Ruleset

### Naming Conventions

-   **`PascalCase`** for all types (`struct`, `enum`).
-   **`snake_case`** for all values (functions, methods, variables).
-   **`SCREAMING_SNAKE_CASE`** for compile-time `const` declarations.

### Formatting

-   **Indentation:** 2 spaces.
-   **Braces:** Opening brace (`{`) on the same line as the declaration (e.g., `fn my_func() {`).
-   **Line Length:** A soft limit of 100 characters. `boba-fmt` will try to adhere to this, but may exceed it for readability.

### Documentation

-   All `pub` items (functions, structs, etc.) should have BobaDoc comments. This is a strong convention that makes your public APIs easy to understand and use.

## Example of "Perfect" Boba Code

Here is a small example that follows all the `boba-fmt` style rules.

```boba
//! A module for managing player data.

const DEFAULT_HEALTH: int = 100

/// Represents a player in the game.
struct Player {
  name: string,
  score: int,
}

/// Creates a new player with a default score.
/// @param name: The name for the new player.
/// @returns: A new `Player` struct.
pub fn new_player(name: string) -> Player {
  return Player{
    name: name,
    score: 0,
  }
}
```

---

**Congratulations!** You have completed the Boba language tutorial. You've learned about variables, data types, control flow, functions, and how to structure your code. You now have a solid foundation in the core concepts of the language.

The journey doesn't end here. The next logical step is to explore the guides on how to configure your project and use the Boba tooling effectively. Happy coding!
