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

## Chapter 2: Core Building Blocks: Variables & Data Types

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

### Convention: Using `let` for Constants
Boba uses a combination of an immutable `let` binding and a naming convention for program-wide constants. By convention, these values are given `SCREAMING_SNAKE_CASE` names to signal to other developers that they represent a foundational, constant value within the program's domain.

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

### Type Inference: Letting Boba Do the Work

In the examples, you may have noticed that sometimes we declare a type (`let score: int = 100`) and sometimes we don't (`let current_level = 10`). When you assign a value as you declare a variable, Boba can usually figure out, or infer, the type for you. `10` is clearly an `int`, `"Ada"` is a `string`, and `true` is a `boolean`. This is a convenience feature to keep your code concise. You should add an explicit type annotation when it helps improve clarity or when you want to be more specific than the inferred default (e.g., `let price: float = 20` instead of letting it be an `int`).

## Primitive Types

Boba has a set of primitive types that are the building blocks of data in your programs.

### `int`

The `int` type is used to represent a 64-bit signed integer (a whole number). It is the ideal type for counting, indexing into collections, representing IDs, and any situation where fractional values are not needed.
```boba
let score: int = 100
let current_level = 10 // Inferred as int

var quantity: int = 3
var drinks_bought = 50 // Inferred as int
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

print(decimal_value == hex_value) // Prints "true"
print(hex_value == binary_value) // Prints "true"
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
let PI: float = 3.14159 // Constant
let milk_percentage = 0.02 // Inferred as float due to the decimal point.

var piggy_bank_value: float = 50.43
var temperature = 25.5
var test_grade = 90.0 // Inferred as float due to the decimal point when it is .0
```
Note: While floats are powerful, be mindful of standard precision limitations inherent to floating-point arithmetic.

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

Accessing a key in a map returns a special `Option` type to safely handle cases where the key might not exist. We will cover this powerful feature in a **later chapter**.

## Chapter Summary

- Use `let` for immutable bindings by default, which is Boba's version of a constant.
- Use `var` only when you specifically need to change a variable's value.
- Boba has familiar primitive types (`int`, `float`, `string`, `boolean`) and composite types (`list`, `map`).
- Boba often uses type inference to determine a variable's type from its initial value.

## Chapter 3: Manipulating Data: Operators

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

Boba's operators follow a standard order of operations, often remembered by acronyms like PEMDAS or BODMAS. For example, multiplication and division are performed before addition and subtraction. When in doubt, or to make your code clearer for other readers, always use parentheses `()` to group operations and ensure they are evaluated in the order you intend.

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

##### Explicit Comparisons Required

In Boba, a condition must explicitly evaluate to a boolean. Unlike languages such as JavaScript or Python, you cannot use non-boolean values in a boolean context (sometimes called "truthy" or "falsy" values). This is a safety feature that prevents common bugs.

```boba
// WRONG: This will cause a compile error because 'score' is an integer, not a boolean.
var score: int = 100
// if score { ... }

// RIGHT: The result of the '!=' comparison is a boolean.
if score != 0 {
    print("You have a non-zero score!")
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
```

### Advanced: Working with Bits

While arithmetic operators work on a number's mathematical value, bitwise operators manipulate its individual 1s and 0s (bits). This is an advanced technique used for performance-critical code, data packing, or managing sets of flags efficiently.
A common use-case is for permissions. Imagine each permission is a unique bit:

```boba
let CAN_INVITE: int = 1 // Binary: ...0001
let CAN_KICK:   int = 2 // Binary: ...0010
let CAN_PROMOTE:int = 4 // Binary: ...0100

// Grant permissions with the bitwise OR operator `|`
let permissions = CAN_INVITE | CAN_PROMOTE // ...0101 (value is 5)

// Check for a permission with the bitwise AND operator `&`
if permissions & CAN_PROMOTE != 0 {
    print("This user can promote members.")
}
```
Boba also supports `^` (XOR), `~` (NOT), and shift operators (`<<`, `>>`).

## Chapter 4: Controlling Program Flow

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

## Repeating Actions with Loops

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
```

## Exhaustive Pattern Matching with `match`

Boba provides a powerful `match` statement for checking a value against a series of patterns. It is a clean and expressive way to handle multiple distinct cases, and it works hand-in-hand with Boba's type system to guarantee that you've handled every possibility. You can think of `match` as a super-powered `switch` statement. However, its key strength is that the Boba compiler guarantees exhaustiveness—you are required to handle every possible case.

### The Rule of Exhaustiveness

A `match` statement in Boba must be **exhaustive**. This means you must provide a branch for every possible value the type can have. The Boba compiler will give you an error if you forget a case, preventing a whole class of bugs.

The `match` statement is most powerful when used with types that have a fixed number of variations. A perfect example of this is an `enum`, a custom type that we'll cover in more detail later. For now, just know that an `enum` lets us define a type that can only be one of a few specific values. Let's define a `TrafficLight` enum:
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
```

## Chapter Summary

- Use `if`, `else if`, and `else` for basic conditional logic.
- Use a one-line `if/else` expression for concisely assigning one of two values.
- Iterate over collections and ranges with `for..in` loops, or loop based on a condition with `while`.
- Use the powerful `match` statement for exhaustive pattern matching, which ensures all possible cases are handled at compile time.

## Chapter 5: Reusing Code: Functions

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
```

### Private Functions

By default, functions are private, meaning they can only be called from within the same file. To make a function accessible from other files, you must use the `pub` keyword.

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

## Understanding Return Values

As you've seen, you can specify a function's return type using `-> Type`. A function can return a value of any type, from a simple `int` to a complex `struct` you've defined. If you do not specify a return type, the function returns a special 'unit' type (similar to `void`). This signifies that the function is called for its side effects—like printing to the console—rather than to produce a result.

## The Pipe Operator `|>`

Boba supports the pipe operator `|>` for chaining function calls in a more readable way. The result of the expression on the left is passed as the first argument to the function call on the right. This is a highly idiomatic way to write Boba code as it emphasizes a clear, sequential flow of data transformations. It's especially powerful because, as you'll see in more advanced topics, functions in Boba are first-class citizens and can be passed around just like any other value.

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

## Chapter 6: Creating Custom Data Types: Structs

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

You now know how to bundle related data together. This is the first half of creating powerful custom types. In the next chapter, we will bring this data to life by giving our structs behavior with methods.

## Chapter 7: Adding Behavior: Methods & Implementations

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
```

Here is the complete `impl` block and its usage:

```boba
struct Player {
  name: string,
  health: int
}

impl Player {
    /// Creates a new Player with default health.
    pub fn new(name: string) -> Player {
        return Player{
            name: name,
            health: 100
        }
    }

    /// A method that prints the player's status.
    pub fn print_status(self) {
        print("{self.name}'s health is {self.health}.")
    }

    /// Reduces the player's health by a given amount.
    pub fn take_damage(mut self, amount: int) {
        self.health -= amount
        print("{self.name} takes {amount} damage!")
    }
}

// Create an immutable player
let player1 = Player.new(name: "Ada")
player1.print_status() // Outputs: Ada's health is 100.

// To call a mutating method, the instance must be mutable.
var player2 = Player.new(name: "Boba")
player2.take_damage(amount: 25) // This is allowed because player2 is mutable.
player2.print_status()  // Outputs: Boba's health is 75.
```

## Chapter Summary

- Use an `impl` block to define functions associated with a `struct`.
- **Associated functions** (like `Player.new()`) belong to the struct type itself.
- **Methods** (like `player.print_status()`) are called on a specific instance and take `self` as the first parameter.
- To modify an instance's data, a method must take `mut self`, and the instance variable must be declared with `var`.

## Chapter 8: Structuring a Project: Modules & Imports

As your programs grow larger, it becomes important to organize your code into multiple files. Boba allows you to do this using modules and the `import` keyword.

By default, all items you define in a file—functions, structs, etc.—are private, meaning they can only be used within that same file. To make an item part of a file's public API so it can be imported elsewhere, you must mark it with the `pub` keyword.

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
```

## A Note on Paths

Import paths are always relative to the current file.

## Chapter Summary

- Use the `pub` keyword to make items in a file (functions, structs, etc.) public and importable.
- Use `import { item1, item2 as alias } from "./path/to/file.boba"` to import and optionally rename specific items.
- Use `import * as namespace from "./path/to/file.boba"` to import all public items from a file under a single namespace.

## Chapter 9: Handling Potential Absence: The Option Type

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

A helpful analogy is to think of `Option<T>` as a sealed box: the box is either empty (`None`) or it contains a value of type `T` (`Some(T)`).

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

## Safely Unwrapping with `match`

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

## Shortcut: Unwrapping with a Default using ??

A very common task when working with Option is to unwrap the value if it exists, or use a default value if it's None. While you can always do this with a match statement, Boba provides a much cleaner shorthand. For this common case, you can use the null coalescing operator, `??`. This works identically to the nullish coalescing operator (`??`) in modern JavaScript.

Let's say you want to get a value from a map, but provide a default if the key isn't found.

The match way:
```boba
// map.get(key) returns an Option
let value = match config_map.get("timeout") {
    Some(t) => t,
    None => 5000, // The default value
}
```

The ?? shortcut:
The ?? operator does the exact same thing in a single, highly readable line.

```boba
// If the left side is Some(t), use t. If it's None, use the right side.
let value = config_map.get("timeout") ?? 5000
```

This operator makes your code cleaner by removing the boilerplate of a match statement for the simple "use this or a default" pattern.

## The Safety of the `Option<T>` Model

To understand the safety `Option<T>` provides, it's helpful to contrast Boba's model with that of languages that use `null`:

-   **In languages with `null` (like Java or JavaScript):** A variable of type `User` could be a `User` object or `null`. You must remember to check for `null` every time. If you forget, your program can crash.

-   **In Boba:** A variable of type `Option<User>` is a container that might hold a `User`. The compiler requires you to handle both the `Some(User)` and `None` cases, guaranteeing that you cannot accidentally use a value that isn't there.

## Chapter Summary

- Boba does not have `null`. Instead, it uses the `Option<T>` enum to represent values that may be absent.
- `Option<T>` has two variants: `Some(T)` for a present value and `None` for an absent value.
- The compiler forces you to handle both `Some` and `None` cases, preventing null-related runtime errors.
- Use a `match` statement to safely unwrap and handle both possibilities.
- Use the `??` operator as a concise shortcut to provide a default value when an `Option` is `None`.

## Chapter 10: Handling Recoverable Errors: The Result Type

In any real-world application, things can go wrong. While other languages often rely on exceptions and `try...catch` blocks, Boba encourages a more explicit approach to error handling using the `Result` enum. A file might not exist, a network request might fail, or user input might be invalid. Boba encourages a robust approach to error handling using the `Result` enum.

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

What is the `E` or `error` type? It can be anything you want, but it's typically a custom struct that contains detailed information. A good error struct might include a unique code for programmatic checking, and a human-readable message:
```boba
struct FileSystemError {
    code: string, // e.g., "FILE_NOT_FOUND"
    message: string,
}
```
This makes your errors much more powerful than simple strings.

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

## Chapter Summary

- Use the `Result<T, E>` enum for functions that can fail in a recoverable way.
- `Result<T, E>` has two variants: `Ok(T)` for success and `Err(E)` for failure.
- The `?` operator is the idiomatic way to handle `Result` values. It unwraps the value from an `Ok` or returns the `Err` from the current function.
- This model encourages explicit, robust error handling throughout your application.

## Chapter 11: Ensuring Cleanup: The defer Statement

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

The `defer` statement schedules a function call to be executed right before the current function exits. It doesn't matter *how* the function exits—whether by a `return`, by reaching the end, or by propagating an error with `?`. For developers coming from other languages, `defer` serves a similar purpose to a `finally` block in a `try...catch...finally` statement, but is often more ergonomic.

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

## Multiple defer Statements: LIFO Order

You can have more than one `defer` statement in a function. When the function exits, the deferred calls are executed in Last-In, First-Out (LIFO) order. Think of it as a stack of cleanup tasks—the last one you add is the first one to be performed.
```boba
fn process() {
    print("Start Processing")
    defer print("Cleanup Task 1 (Last to run)")
    defer print("Cleanup Task 2 (First to run)")
    print("Finish Processing")
}

// Calling process() will print:
// Start Processing
// Finish Processing
// Cleanup Task 2 (First to run)
// Cleanup Task 1 (Last to run)
```
This LIFO order is deliberate and very useful. It ensures that resources are de-initialized in the reverse order of their initialization, which is almost always what you want.

## Chapter Summary

- The `defer` statement schedules a function call to be executed just before the current function exits.
- This guarantees that cleanup code (like `file.close()`) runs, regardless of how the function returns (normally, via `return`, or via `?`).
- Place `defer` statements immediately after acquiring a resource to make code safer and more readable.
- Multiple `defer` statements are executed in Last-In, First-Out (LIFO) order.

## Chapter 12: Handling Critical Failures: Panics

In the last chapters, we learned how to handle expected failures using `Result` and how to guarantee cleanup using `defer`. But what happens when something goes wrong that should be _impossible_? This is where Boba's `panic` mechanism comes in.

## Recoverable vs. Unrecoverable Errors

First, let's understand the difference:

- **Recoverable Error:** An error that is expected to happen sometimes. A user might enter a bad file path, or a network request might time out. We use `Result<T, E>` to handle these because our program can gracefully continue.
```boba
// Trying to open a file is an action that can reasonably fail.
let file_result = fs.open(path: "my_file.txt")
```

- **Unrecoverable Error (A Bug):** An error that indicates a critical problem with the program's logic itself. For example, trying to access a list element at an index that doesn't exist, or a mathematical impossibility. If these things happen, the program is in an unknown, unpredictable state, and continuing could lead to more errors or data corruption. For these situations, Boba **panics**.

### When to Use `Option` vs. `Result`

Both `Option` and `Result` deal with the possibility of a value not being what you expect, so when do you use which? The guideline is based on whether a situation is an expected absence or a failure.

* Use **`Option<T>`** when a value could be absent, and this is a normal, expected outcome. It answers the question: "Is there a value here or not?"
    * `find_user_by_id()`: A user might not exist. This isn't an error.
    * `map.get(key)`: A key may not be in a map. This is normal.

* Use **`Result<T, E>`** when a function that is *supposed* to succeed could fail for some external reason. It answers the question: "Did this operation work or not?"
    * `fs.read_file()`: You expect to read a file, but it might fail due to permissions or the disk being full.
    * `json.parse()`: You expect to parse a string, but it might fail because the string is malformed.


## What is a Panic?

A panic is an abrupt, unrecoverable error that stops the normal execution of your program.

When a panic occurs, the program will stop what it's doing and begin to **unwind the stack**. As it unwinds, it will print an error message and a stack trace to help you debug the problem.

Most importantly, as the stack unwinds, the runtime will execute any **`defer`** statements it finds along the way. This is a crucial safety feature that ensures that even during a crash, critical cleanup tasks (like closing files or releasing resources) are still performed.

## Implicit Panics: Integer Overflow

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

## Explicit Panics: The `panic()` Function

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
```
For those familiar with languages like Java, C#, or JavaScript, `panic` is similar to throwing an un-caught exception. The key philosophical difference in Boba is that panics are reserved exclusively for unrecoverable errors that indicate a bug, not for regular error conditions, which should always be handled with `Result`.

## Summary: The Boba Safety Model

Congratulations, you've now seen all the pieces of Boba's model for safety and error handling. Here is a simple guide for when to use each tool:

* **Is a value sometimes absent? (This is expected)**
    * Use **`Option<T>`** to represent `Some(value)` or `None`.
* **Can an operation fail? (This is recoverable)**
    * Use **`Result<T, E>`** to return `Ok(value)` or `Err(error)`. Use `?` to propagate errors.
* **Does my function need to clean up a resource? (File, network connection, etc.)**
    * Use **`defer`** to guarantee cleanup code runs before the function exits.
* **Has my code entered an impossible state? (This is a bug)**
    * Use **`panic!()`** to stop the program immediately. This signals a programmer error that must be fixed.

This compile-time toolkit is designed to help you write exceptionally robust and predictable programs.

## Chapter 13: Concurrent Programming: async and await

Asynchronous programming is essential for building responsive and efficient applications, especially when dealing with tasks like network requests or file I/O that can take time. Boba makes writing asynchronous, non-blocking code as easy and readable as traditional, synchronous code.

## The `async` and `await` Keywords

Boba's concurrency model is built around two keywords: `async` and `await`.

-   **`async`**: A keyword that modifies a function declaration (`async fn ...`). An `async` function does not block when called. Its return type is implicitly wrapped in a `Future<T>` (or a similar construct) that is managed by the Boba runtime.
-   **`await`**: An operator that can only be used inside an `async` function. It pauses the execution of the async function until the `Future` it is waiting on has completed, at which point it unwraps the result. While the function is paused, the Boba runtime is free to execute other tasks.

For JavaScript/TypeScript developers, this model is identical to `async/await` with `Promise<T>`. A Boba `Future<T>` is conceptually the same as a JavaScript `Promise<T>`.

## Example: A Single Asynchronous Call

Let's start with a simple case. Imagine we just want to fetch a user from a database, which is a slow operation. The `async fn` doesn't block our program.

```boba
async fn fetch_user_by_id(id: int) -> User { /* ... */ }

// In another function
print("About to fetch user...")
// The `await` keyword pauses this function until the user data is returned.
let user = await fetch_user_by_id(101)
print("Fetch complete! User is {user.name}")
```

This allows other tasks to run while the function is waiting for the database.

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

## Pattern: Concurrent Fetching

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

## Chapter Summary

- Use the `async fn` syntax to create a non-blocking, asynchronous function that returns a `Future<T>`.
- Use the `await` keyword inside an `async fn` to pause execution and wait for a `Future` to complete.
- Compose `await` with the `?` operator (`await ... ?`) to elegantly handle `async` functions that return a `Result`.
- To run multiple `async` functions concurrently, call them first to get their `Future`s, and only then `await` the results.

## Chapter 14: Writing Idiomatic Boba

Welcome to the final step in your learning journey: moving from writing code that works to writing code that is truly idiomatic. Idiomatic code is clear, maintainable, and leverages the language's strengths in the way its designers intended. This chapter covers the conventions for structure, naming, documentation, and feature usage that define professional Boba code. Adherence to these principles is enforced by the official `boba fmt` tool, ensuring all code in the ecosystem is instantly familiar.

## 1. File & Module Structure

A well-organized file is easy to navigate. All Boba files (`.boba`) should follow this structure from top to bottom:

- **Module-level Documentation:** A `//!` comment that describes the purpose of the entire file.
- **Import Statements:** All `import` statements grouped at the top.
- **Constants:** All program-wide constants (declared with `let` and `SCREAMING_SNAKE_CASE`).
- **Type Definitions:** All `struct` and `enum` definitions for the module.
- **Public Implementations & Functions:** All `pub impl` blocks and `pub fn` functions that form the module's public API.
- **Private Implementations & Functions:** Any private helper functions or `impl` blocks used by the public API, grouped at the bottom.

## 2. Naming Conventions

Consistent naming makes code predictable.

- **`PascalCase` for Types:** All `struct` and `enum` types.
  - `struct PlayerProfile`, `enum RequestStatus`
- **`snake_case` for Values:** All functions, methods, and variables.
  - `fn get_user_data`, `let current_score`, `var remaining_attempts`
- **`SCREAMING_SNAKE_CASE` for Constants:** Global or module-level constants declared with `let`.
  - `let MAX_CONNECTIONS = 100`

## 3. Formatting (boba fmt)

The `boba fmt` tool handles this automatically, but these are the core rules:

- **Indentation:** 2 spaces. No tabs.
- **Braces:** The opening brace (`{`) always goes on the same line as the declaration (`struct`, `fn`, `if`, etc.).
- **Line Length:** A soft limit of 100 characters. For readability, `boba fmt` may exceed this for long string literals or complex signatures. Long function calls or struct literals should be broken into multiple lines.

```boba
// Good: A long struct literal broken into multiple lines.
let player = Player {
    name: "Ada Lovelace",
    score: 100,
    is_active: true,
}
```

## 4. Documentation (BobaDoc)

Documenting your public API is essential for a healthy ecosystem.

- **Use `///` for Public APIs:** Every `pub struct`, `pub enum`, and `pub fn` must have a documentation comment.
- **Use `//!` for Module-Level Docs:** Explain the purpose of the file at the top.
- **Use Standard Tags:** Use `@param`, `@returns`, and `@panics` to provide structured information.
- **Include an `@example`:** A runnable example is the best documentation.

## 5. Comments

- Use BobaDoc (`///`) to explain the *what* and *how* for users of your API. This is for the public interface.
- Use inline comments (`//`) to explain the *why* for maintainers of your code. Explain complex logic, non-obvious choices, or the reasoning behind a particular algorithm. Avoid comments that just restate what the code does (e.g., `// increment score`).

## 6. Error Handling Idioms

- **Prefer `?` for Propagation:** Use the `?` operator to propagate errors cleanly up the call stack. This is the primary and most idiomatic way to handle `Result` types.
- **Use `match` for Specific Error Handling:** Only use a `match` statement on a `Result` when you need to handle different error types in different ways or need to add specific recovery logic.

## 7. Mutability

- **`let` is the Default:** Always declare variables with `let`.
- **Use `var` Sparingly:** Only use `var` when you have a clear, intentional need for a value to be mutated after its creation. If you find yourself using `var` frequently, consider if your function could be rewritten to transform data and return a new value instead.

## Putting It All Together: An Example Module

This example file, `config.boba`, demonstrates all the style guide rules in practice. It defines a simple module for loading and parsing a JSON configuration file.

```boba
//! A module for loading and parsing application configuration from a JSON file.
//! This provides a safe, structured way to access config values.
// Naming: `SCREAMING_SNAKE_CASE` for a module-level constant.
let DEFAULT_TIMEOUT_MS = 5000

// Naming: `PascalCase` for a struct type.
/// Represents the application's configuration structure.
/// All public fields should be documented.
pub struct Config {
    /// The hostname of the server to connect to.
    pub hostname: string,
    /// The port number for the connection.
    pub port: int,
    /// The connection timeout in milliseconds.
    pub timeout_ms: int,
}

// Organization: `impl` block for the public `Config` type.
impl Config {
    /// Safely loads, parses, and validates the configuration from a given path.
    ///
    /// @param path: The file system path to the `config.json` file.
    /// @returns: A `Result` containing the valid `Config` on success, or an
    ///           `error` if the file cannot be read, parsed, or validated.
    /// @example:
    ///   let my_config = Config.load("path/to/config.json")?
    pub fn load(path: string) -> Result<Config, error> {
        // Comments: Explain the *why*. We use a helper for testability.
        let raw_text = fs.read_file(path)?
        return Self.parse_and_validate(raw_text)
    }

    /// A private helper function to separate parsing logic from file I/O.
    /// This makes the function easier to test by passing in string content directly.
    fn parse_and_validate(content: string) -> Result<Config, error> {
        let parsed_json = json.parse(content)?

        // Use `match` for detailed error handling when `?` is not enough.
        match parsed_json {
            // Pattern matching to extract values.
            { hostname: h: string, port: p: int } => {
                // Logic: Use the ?? operator to provide a default value if one isn't present.
                let timeout = parsed_json["timeout_ms"] ?? DEFAULT_TIMEOUT_MS

                // Formatting: Long struct literal is broken into multiple lines.
                return Ok(Config{
                    hostname: h,
                    port: p,
                    timeout_ms: timeout,
                })
            },
            // Handle the case where the JSON is valid but missing required fields.
            _ => return Err({
                code: "INVALID_CONFIG",
                message: "Config is missing required 'hostname' or 'port' fields.",
            }),
        }
    }
}

## Chapter Summary

- **Structure:** Organize files consistently (docs, imports, constants, types, public API, private helpers).
- **Naming:** Use `PascalCase` for types, `snake_case` for values, and `SCREAMING_SNAKE_CASE` for constants.
- **Formatting:** Trust `boba fmt` to handle formatting automatically.
- **Error Handling:** Prefer `?` for propagating `Result` errors; use `match` for specific recovery logic.
- **Mutability:** Default to `let` for immutability; use `var` only when mutation is necessary.
- Following these idioms makes your code clear, predictable, and easy for any Boba developer to understand.

## Conclusion: Your Journey with Boba

**Congratulations!** You have completed the Boba language tutorial. You've progressed from writing your first "Hello, world!" to understanding the advanced features that make Boba a safe, clear, and powerful language.

You now have a solid foundation in Boba's core concepts, including:
* **Safety and Robustness:** Using `Option`, `Result`, `defer`, and `panic` to write code that handles errors gracefully and predictably.
* **Clarity and Intent:** Leveraging immutable-by-default design, mandatory named arguments, and a strong type system to make your code's purpose clear.
* **Modern Concurrency:** Writing clean, non-blocking code with `async` and `await`.

Your journey as a Boba developer is just beginning. To continue building your skills, we recommend you:
* **Build a Project:** Try creating a small command-line tool or a simple web server to apply what you've learned.
* **Explore the Standard Library:** Dive into the official documentation to discover the rich set of functions available for lists, maps, strings, and more.
* **Read Idiomatic Code:** Find open-source projects written in Boba and see how experienced developers structure their applications.

Welcome to the community. Happy coding!
