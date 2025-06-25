# Boba Lang

Welcome to Boba! Let's start with the fundamentals: how to store and manage data in your programs. In Boba, you have two ways to do this: variables and constants.

## Variables

Variables are used to store values that can change. You declare a variable using the `var` keyword.

```boba
// Declare a variable `score` of type `number` and initialize it to 100.
var score: number = 100

// You can change the value of a variable.
score = 120
```

### Type Inference

Boba is a smart language! If you don't explicitly specify the type of a variable, Boba will infer it from the value you assign.

```boba
// Boba infers that `health` is a `number`.
var health = 100

// Boba infers that `playerName` is a `string`.
var playerName = "Boba Fett"
```

### Multiple Declarations

You can declare multiple variables of the same type on a single line.

```boba
var x, y, z: number = 1, 2, 3
```

## Constants

Constants are used to store values that will not change. You declare a constant using the `const` keyword.

```boba
const MAX_PLAYERS: number = 4
```

Once a constant is declared, you cannot change its value. This is useful for values that should remain constant throughout your program, like a configuration value or a mathematical constant.

```boba
const PI: number = 3.14159

// This would cause a compile error:
// PI = 3.14
```

## Built-in Constants

Boba provides a few built-in constants for convenience:

- `true`: A boolean value representing truth.
- `false`: A boolean value representing falsehood.
- `null`: Represents the intentional absence of any object value.

Now that you know how to create variables and constants, let's move on to the different types of data you can store in them.

In the last chapter, you learned how to create variables and constants. Now, let's explore the fundamental data types you'll use to store different kinds of information in Boba.

## Primitive Types

Boba has a set of primitive types that are the building blocks of data in your programs.

### `number`

The `number` type is used to represent 64-bit floating-point numbers. This is suitable for a wide range of applications, from simple arithmetic to more complex calculations.

```boba
var price: number = 19.99
var quantity: number = 3
var total = price * quantity // total is inferred as a number
```

*Note: While Boba's `number` type is versatile, be mindful of standard floating-point precision limitations when working with very large integers (greater than 2^53).*

### `string`

The `string` type is used to represent text.

```boba
var message: string = "Hello, Boba!"
var playerName = "Ada" // Inferred as a string
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
var highScores: number[] = [100, 95, 80]

// A list of strings
var ingredients: string[] = ["flour", "sugar", "boba pearls"]
```

### `map`

A `map` is a collection of key-value pairs. Each key must be unique, and all keys must be of the same type, as must all values.

```boba
// A map with string keys and number values
var scores: [string:number] = {
  "ada": 100,
  "grace": 95
}
```

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
| `^`      | Power            | `5 ^ 2` results in `25`  |

### Unary Arithmetic Operators

You can also increment or decrement a number by one using the `++` and `--` operators.

```boba
var score = 10
score++ // score is now 11
score-- // score is now 10
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

In Boba, comparisons must be explicit. You can't use a non-boolean value in a context that expects a boolean.

```boba
// WRONG
var score: number = 100
// if (score) { ... } // This will cause a compile error.

// RIGHT
if (score != 0) { ... } // The result of `!=` is a boolean.
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

if (hasKey and not isDoorLocked) {
  print("You can open the door!")
}
```

With these operators, you can start writing more complex and interesting programs. In the next chapter, we'll explore how to control the flow of your program using conditionals.

In programming, you often need to execute different code depending on certain conditions. Boba uses the familiar `if`, `else if`, and `else` keywords to handle conditional logic.

## The `if` Statement

The `if` statement executes a block of code only if a specified condition is `true`.

```boba
var temperature = 30

if (temperature > 25) {
  print("It's a hot day!")
}
```

## The `else` Statement

You can use the `else` statement to provide a block of code to execute if the `if` condition is `false`.

```boba
var score = 85

if (score >= 60) {
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

if (hunger == "hungry" and thirst == "thirsty") {
  print("You are hungry and thirsty.")
} else if (hunger == "hungry") {
  print("You are only hungry.")
} else if (thirst == "thirsty") {
  print("You are only thirsty.")
} else {
  print("You are neither hungry nor thirsty.")
}
```

## The `match` Statement

Boba also provides a powerful `match` statement for more complex pattern matching. It's a clean way to handle multiple conditions on a single variable.

```boba
var myVariable = 150

match myVariable {
  1 => print("It was one!"),
  x where x > 100 => print("It's a big number: {x}"),
  s: string => print("It's a string of length {s.len()}"),
  _ => print("Default case") // `_` is a wildcard for any other case
}
```

Conditionals are a fundamental part of programming. In the next chapter, we'll look at another crucial concept for controlling program flow: loops.

Loops are used to execute a block of code multiple times. Boba provides several types of loops to handle different situations.

## The `for` Loop

The `for` loop is ideal when you want to repeat a block of code a specific number of times.

```boba
// This loop will print numbers from 1 to 5
for i in 1 to 5 by 1 {
  print("I am print {i}!")
}
```

## The `while` Loop

The `while` loop continues to execute a block of code as long as a specified condition is `true`.

```boba
var j: number = 0
while j < 10 {
  j++
  print("I am print {j}!")
  if j == 5 then break // `break` exits the loop
}
```

## The `foreach` Loop

The `foreach` loop is used to iterate over the elements of a list or map.

```boba
var ingredients: string[] = ["flour", "sugar", "boba pearls"]

foreach ingredient in ingredients {
  print("We need {ingredient}.")
}
```

## The `repeat` Loop

The `repeat` loop is similar to a `while` loop, but the condition is checked at the end of the loop. This means the loop will always execute at least once.

```boba
var k: number = 0
repeat {
  print("Repeating!")
  k++
} until k == 10
```

Loops are a powerful tool for automating repetitive tasks. In the next chapter, we'll learn how to organize our code into reusable blocks called functions.

Functions are blocks of code that you can name and call from other parts of your program. They are essential for organizing your code and making it reusable.

## Defining and Calling Functions

You define a function using the `fn` keyword. You can also specify the types of the arguments and the return value.

```boba
// A simple function that takes no arguments and returns nothing.
pub fn sayHello() -> void {
  print("Hello, Boba!")
}

// Call the function
sayHello()
```

### Functions with Arguments and Return Values

Functions can take input values (arguments) and produce an output value (return value).

```boba
pub fn add(a: number, b: number) -> number {
  return a + b
}

var sum = add(5, 3) // sum will be 8
```

### Private Functions

By default, functions are private, meaning they can only be called from within the same file. To make a function accessible from other files, you must use the `pub` keyword.

```boba
// This function can only be called from this file.
fn myPrivateFunction() -> void {
  print("This is a secret!")
}
```

## Default Parameters

Boba allows you to provide default values for function parameters. This makes the function more flexible, as you can call it with fewer arguments.

```boba
pub fn connect(host: string, port: number = 5432, use_ssl: boolean = true) {
  // ... connection logic ...
}

// Call with all arguments
connect("myhost.com", 8080, false)

// Call with only the required argument
connect("myhost.com")
```

## The Pipe Operator `|>`

Boba supports the pipe operator `|>` for chaining function calls in a more readable way. The result of one function is passed as the first argument to the next function.

```boba
var ingredients: string[] = ["flour", "sugar", "boba pearls"]

ingredients[0] |> upper() |> print() // Outputs "FLOUR"
```

Functions are the building blocks of any Boba program. In the next chapter, we'll explore how to group related data and functions together using structs.

Structs, short for structures, allow you to create your own custom data types by grouping together related variables. This is a powerful way to organize and manage complex data in your programs.

## Defining a Struct

You define a struct using the `struct` keyword. Inside the struct definition, you list the variables (called fields) that make up the struct.

```boba
// Define a `Player` struct
struct Player = {
  name: string,
  score: number,
  is_active: boolean
}
```

## Creating an Instance of a Struct

Once you have defined a struct, you can create instances of it, just like you would with any other data type.

```boba
// Create a new variable `ada` of type `Player`
var ada: Player = { name = "Ada", score = 100, is_active = true }
```

## Accessing Struct Fields

You can access the fields of a struct instance using dot notation.

```boba
print("Player name: {ada.name}") // Prints "Player name: Ada"

// You can also modify the fields of a struct instance
ada.score = 110
```

Structs are a great way to model the data in your application. In the next chapter, we'll look at another way to create custom types: enums.

Enums, short for enumerations, are a way to define a custom type that has a fixed set of possible values. This is useful when you have a variable that can only be one of a few possible things.

## Defining an Enum

You define an enum using the `enum` keyword, followed by the name of the enum and a list of its possible values (called variants).

```boba
enum Color {
  RED,
  GREEN,
  BLUE
}
```

## Using an Enum

Once you have defined an enum, you can use it as a type for your variables. The variants are accessed through the enum type itself.

```boba
// The type of `myColor` is inferred as `Color`
var myColor = Color.GREEN

// You can use enums in comparisons
if (myColor == Color.GREEN) {
  print("The color is green!")
}
```

## Enums with Data

Boba enums can also hold data. This is particularly useful for error handling, as we'll see in the next chapter.

```boba
enum Result<T, E> {
  Ok(T),    // The 'Success' variant, holds a value of type T
  Err(E)    // The 'Failure' variant, holds a value of type E
}
```

Enums are a powerful feature for making your code more expressive and safe. In the next chapter, we'll dive into error handling and see how enums play a crucial role.

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
struct Config = {
  hostname: string,
  port: number,
  enable_https: boolean
}

fn load_config() -> Result<Config, error> {
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

This approach to error handling makes your code cleaner and more reliable. In the next chapter, we'll explore how to use classes to create more complex objects with both data and behavior.

Classes are a powerful feature in Boba that allow you to create complex objects that have both data (properties) and behavior (methods). They are similar to structs, but with the added ability to define methods and use inheritance.

## Defining a Class

You define a class using the `class` keyword.

```boba
class Enemy = {
  health: number = 100

  pub fn take_damage(amount: number) -> void {
    self.health = self.health - amount
  }

  // Class private functions are only accessible within the class
  fn heal(amount: number) -> void {
    self.health = self.health + amount
  }
}
```

## Creating an Instance of a Class

You create an instance of a class using the `new` keyword.

```boba
var enemy = new Enemy()
```

## Accessing Properties and Methods

You can access the properties and methods of a class instance using dot notation.

```boba
enemy.take_damage(20)
print("Enemy health: {enemy.health}") // Prints "Enemy health: 80"
```

## Inheritance

Boba supports inheritance, which allows you to create a new class that inherits the properties and methods of an existing class. This is a great way to reuse code and create a hierarchy of related objects.

```boba
class Goblin extends Enemy = {
  gold: number = 12

  pub fn taunt() {
    print("Heh heh heh! I have {self.health} health left!")
  }
}

var goblin = new Goblin()
goblin.take_damage(10)
goblin.taunt() // Prints "Heh heh heh! I have 90 health left!"
```

Classes are a cornerstone of object-oriented programming. In the final chapter of this tutorial, we'll look at how to organize your code into multiple files using imports.

As your programs grow larger, it becomes important to organize your code into multiple files. Boba allows you to do this using the `import` keyword.

## Importing from Other Files

You can import public functions, classes, and other declarations from other Boba files. This allows you to break your code into logical modules and reuse code across your project.

### Importing Specific Items

To import specific items from a file, you list them by name.

```boba
// in utils.boba
pub fn sayHello() -> void {
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
pub fn sayHello() -> void { ... }
pub fn sayGoodbye() -> void { ... }

// in main.boba
import * from "./utils.boba"

sayHello()
sayGoodbye()
```

### Renaming Imports

You can rename an imported item using the `as` keyword. This is useful to avoid naming conflicts.

```boba
// in utils.boba
pub fn sayHello() -> void { ... }

// in main.boba
import sayHello as greet from "./utils.boba"

greet() // Prints "Hello!"
```

## A Note on Paths

Import paths are always relative to the current file.

---

Congratulations! You have completed the Boba language tutorial. You now have a solid foundation in the core concepts of the language. From here, you can explore the rest of the documentation to learn about more advanced features and start building your own Boba applications.

Classes are blueprints for creating objects. They bundle data (properties) and functions that operate on that data (methods) into a single unit. Classes in Boba support inheritance, allowing you to create a new class that builds upon an existing one.

## Defining a Class

You define a class using the `class` keyword.

```boba
class Enemy = {
  // Properties
  health: number = 100
  mana: number = 50

  // A public method (accessible from outside the class)
  pub fn take_damage(amount: number) -> void {
    // `self` refers to the current instance of the class
    self.health = self.health - amount
    print("Enemy took {amount} damage. Health is now {self.health}.")
  }

  // A private method (only accessible within the class)
  fn regenerate_mana() -> void {
    self.mana = self.mana + 5
  }
}
```

### Properties
Properties are variables that belong to a class instance. They define the state of the object. In the example above, `health` and `mana` are properties.

### Methods
Methods are functions that belong to a class. They define the behavior of the object.
-   **Public Methods**: Declared with the `pub` keyword, they can be called from anywhere you have an instance of the class.
-   **Private Methods**: Declared without `pub`, they can only be called by other methods within the same class.
-   **The `self` Keyword**: Inside a method, the `self` keyword is used to access the properties and other methods of the current object instance.

## Creating an Instance

To create an object from a class, you use the `new` keyword.

```boba
var basic_enemy = new Enemy()
basic_enemy.take_damage(15) // Prints: "Enemy took 15 damage. Health is now 85."
```

## Inheritance

Inheritance allows a class (the child or subclass) to inherit the properties and methods of another class (the parent or superclass). This is a core concept of object-oriented programming that promotes code reuse.

You use the `extends` keyword to create a subclass.

```boba
// Goblin is a subclass of Enemy
class Goblin extends Enemy = {
  // Add new properties specific to Goblin
  gold: number = 12

  // Add new methods specific to Goblin
  pub fn taunt() {
    print("Heh heh heh! I have {self.health} health left!")
  }

  // You can also override parent methods (not shown, but possible)
}
```

An instance of `Goblin` has all the properties and methods of `Enemy`, plus its own.

```boba
var goblin_scout = new Goblin()

// Call a method inherited from Enemy
goblin_scout.take_damage(20) // Prints: "Enemy took 20 damage. Health is now 80."

// Access a property from Goblin
print("The goblin has {goblin_scout.gold} gold.") // Prints: "The goblin has 12 gold."

// Call a method from Goblin
goblin_scout.taunt() // Prints: "Heh heh heh! I have 80 health left!"
```

Comments are annotations in your code that are ignored by the compiler. They are used to explain what your code does, making it more understandable for yourself and others.

Boba supports two types of comments.

## Single-line comments

Single-line comments start with `//` and continue to the end of the line. They are useful for short explanations.

```boba
// This is a comment
var x = 5 // This is also a comment
```

## Block comments

Block comments start with `/*` and end with `*/`. They can span multiple lines and are useful for longer explanations.

```boba
/*
This is a block comment.
It can span multiple lines.
*/
```
Conditional statements allow you to execute different blocks of code based on whether a certain condition is true or false. Boba provides `if`, `else if`, `else`, and a `match` statement for this purpose.

## `if`, `else if`, and `else`

This structure is used for straightforward conditional logic.

-   `if`: Executes a block of code if its condition is `true`.
-   `else if`: If the preceding `if` (or `else if`) condition is `false`, this block is checked. You can have multiple `else if` blocks.
-   `else`: If all preceding conditions are `false`, this block is executed.

```boba
var temperature = 20

if (temperature > 30) {
  print("It's a hot day!")
} else if (temperature < 10) {
  print("It's a cold day!")
} else {
  print("The weather is moderate.")
}
```

## `match` Statement

The `match` statement is a powerful tool for pattern matching that provides a more structured and readable alternative to long `if-else if` chains, especially when checking one variable against multiple possible values or patterns.

```boba
// Hypothetical Boba match statement
match my_variable {
  1 => print("It was one!"),
  x where x > 100 => print("It's a big number: {x}"),
  s: string => print("It's a string of length {s.len()}"),
  _ => print("Default case") // `_` is a wildcard that matches any value
}
```

Key features of `match`:
-   It compares a single value against multiple patterns.
-   It can bind values to new variables (e.g., `x` and `s`).
-   It can include conditional logic with `where` clauses.
-   The wildcard `_` acts as a default case, catching any values not matched by other arms.

Constants are special, unchangeable values that are built directly into the Boba language. They represent fundamental concepts.

Boba has the following built-in constants:

-   `true`: A `boolean` value representing truth.
-   `false`: A `boolean` value representing falsehood.
-   `null`: Represents the intentional absence of any object value. It is often used to indicate that a variable has no value.

```boba
var is_active: boolean = true
var has_key: boolean = false
var user_data = null // Could be used before user data is loaded
```

For creating your own unchangeable values, see [Variables and Constants](learn/01-variables-and-constants.mdx) and the `const` keyword.
Enumerations (or enums) allow you to define a custom type by listing its possible values, known as variants. They make code clearer and safer by restricting a variable to a known set of values.

## Defining a Simple Enum

You define an enum with the `enum` keyword.

```boba
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST
}
```

## Using an Enum

Once defined, you can use the enum as a type. Variants are accessed directly through the enum's name.

```boba
var player_direction: Direction = Direction.NORTH

if (player_direction == Direction.NORTH) {
  print("You are heading north.")
}
```

## Enums with Data (Associated Values)

Boba enums can also hold additional data, making them incredibly powerful. This is a key feature for patterns like the `Result` type used in [Error Handling](./error-handling.mdx).

Each variant can have different types and amounts of associated data.

```boba
enum Shape {
  Circle(radius: number),
  Rectangle(width: number, height: number)
}

var my_shape = Shape.Circle(radius = 10.5)
var another_shape = Shape.Rectangle(width = 5, height = 10)
```

This allows you to store more detailed information within the enum itself, creating rich, expressive data structures.
Boba promotes robust error handling using the `Result` enum and the `?` operator. This approach makes it clear when a function can fail and encourages you to handle potential errors explicitly.

## The `Result` Enum

The `Result` enum is a generic type with two variants:

-   `Ok(T)`: Represents a successful result, containing a value of type `T`.
-   `Err(E)`: Represents an error, containing a value of type `E`.

```boba
enum Result<T, E> {
  Ok(T),    // The 'Success' compartment, holds a value of type T
  Err(E)    // The 'Failure' compartment, holds a value of type E
}
```

Functions that can fail should return a `Result` to make their behavior predictable.

## The `?` Operator for Error Propagation

The `?` operator provides a concise way to handle `Result` values. It simplifies the process of propagating errors up the call stack.

When you append `?` to a `Result` value:
-   If the value is `Ok(T)`, the `?` operator unwraps it and gives you the inner value `T`.
-   If the value is `Err(E)`, the `?` operator immediately stops the execution of the current function and returns the `Err(E)` value.

### Example Usage

Consider a function that reads a configuration file and parses it as JSON.

```boba
// Assume this struct is defined elsewhere
struct Config = {
  hostname: string,
  port: number,
  enable_https: boolean
}

// This function returns a Result because reading or parsing could fail.
fn load_config() -> Result<Config, error> {

    // 1. `read_file` returns a `Result<string, error>`.
    // 2. The `?` operator checks the Result:
    //    - If it's `Err(e)`, `load_config` immediately returns that `Err(e)`.
    //    - If it's `Ok(s)`, `?` unwraps it, and the string `s` is assigned to `content`.
    var content = read_file("config.json")?

    // 3. This line is only reached if `read_file` succeeded.
    // 4. `parse_json` returns a `Result<Config, error>`.
    // 5. The `?` operator checks this Result again, propagating any error.
    var config = parse_json(content)?

    print("Config loaded successfully!")

    // 6. If both operations succeed, the final Config is wrapped in `Ok` and returned.
    return Ok(config)
}
```

This pattern makes error handling explicit and clean, avoiding deep nesting of `if-else` blocks and ensuring that errors are dealt with.

Functions are reusable, named blocks of code that perform a specific task. They are a fundamental building block for organizing and structuring your programs.

## Defining a Function

Functions are defined using the `fn` keyword. You can specify argument types and a return type.

```boba
// A public function with no arguments and no return value
pub fn my_function() -> void {
  print("This is a function")
}

// A function with arguments and a return value
pub fn add(a: number, b: number) -> number {
  return a + b
}

// A private function (only accessible within the current file)
fn my_private_function() -> void {
  print("Don't tell anyone about this!")
}
```

-   **Visibility**: Use `pub` to make a function public (callable from other files). Without `pub`, a function is private by default.
-   **Return Type**: The `->` syntax specifies the type of the value the function will return. If a function doesn't return a value, use `void`.

## Parameters and Arguments

-   **Parameters**: The variables listed in the function definition (e.g., `a` and `b` in `add`).
-   **Arguments**: The actual values passed to the function when it is called (e.g., `5` and `10` in `add(5, 10)`).

## Advanced Features

### Default Parameters

You can assign a default value to a parameter, making it optional when the function is called.

```boba
// The `port` and `use_ssl` parameters are optional.
pub fn connect(host: string, port: number = 5432, use_ssl: boolean = true) { 
  // ... connection logic ...
}

connect("example.com") // Uses default port and SSL settings
connect("example.com", 8080) // Overrides the port
```

### Overloading

Boba allows you to define multiple functions with the same name but different parameter lists (either different types or a different number of parameters). The compiler will choose the correct function to call based on the arguments you provide.

#### Guidance on When to Use Overloading vs. Default Parameters

-   **Use Overloading for Different Semantics or Types**: Choose overloading when the function's core behavior changes based on the input types.

    ```boba
    // The behavior is fundamentally different for a size vs. existing data
    pub fn create_buffer(size: number) { /* Allocate a new buffer */ }
    pub fn create_buffer(from_data: number[]) { /* Copy data into a new buffer */ }
    ```

-   **Use Default Arguments for Optional Configuration**: Use default arguments when the core behavior is the same, but you want to provide optional flags or parameters to tweak it.

    ```boba
    // The behavior is always connecting, but port and ssl are optional tweaks
    pub fn connect(host: string, port: number = 5432, use_ssl: boolean = true) { 
      // ... 
    }
    ```

**Restriction**: An overload set cannot contain functions that only differ by parameters with default values, as it would create ambiguity.

Imports allow you to use code defined in other files, enabling you to organize your project into modules. You can import public functions, classes, structs, and enums.

## Import Syntax

Import statements are placed at the top of a Boba file.

### Importing Specific Items

You can import one or more specific items from a file. This is the most common way to import.

```boba
// Imports `func1` and `func2` from the specified file.
import func1, func2 from "relative/path/from/this/file.boba"
```

### Importing All Items

You can import all public items from a file using the `*` wildcard. Use this with caution, as it can pull in many names and potentially cause conflicts.

```boba
// Imports all public members from file2.boba
import * from "relative/path/from/this/file2.boba"
```

### Renaming Imports

You can rename an imported item using the `as` keyword. This is useful for avoiding naming collisions or for giving an item a more descriptive name in the current context.

```boba
// Imports `func1` but renames it to `func3` in the current file.
import func1 as func3 from "relative/path/from/this/file3.boba"
```

## Important Rules

-   **Paths**: Import paths are always relative to the file containing the import statement.
-   **Visibility**: You can only import items that are marked as `pub` (public) in the other file.
-   **Overloads**: When you import a function, all of its overloads are imported as well.
-   **Circular Imports**: File A cannot import File B if File B already imports File A (or if there is a longer chain of imports that leads back to File A). This is disallowed and will result in a compile error.
Lists are ordered, resizable collections of items of the same type. They are one of the most common ways to group data in Boba.

## Creating a List

You define a list by specifying the type of its elements followed by `[]`.

```boba
// A list of numbers
var high_scores: number[] = [100, 95, 80]

// A list of strings
var ingredients: string[] = ["flour", "sugar", "boba pearls"]

// An empty list must have its type declared
var empty_list: string[] = []
```

## Accessing and Modifying Elements

You access elements in a list using zero-based indexing (the first element is at index 0).

```boba
print(ingredients[0]) // Outputs "flour"

// You can change the value at a specific index
ingredients[2] = "tapioca pearls"
print(ingredients) // Outputs ["flour", "sugar", "tapioca pearls"]
```

## Multi-dimensional Lists

Boba supports multi-dimensional lists (lists of lists), which can be used to create matrices or grids.

### Uniform 2D Lists (Matrices)

```boba
// A 2x3 matrix (2 rows, 3 columns)
var matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

// Accessing an element
var value: number = matrix[1][2] // value is 6
```

### Jagged Lists

You can also create lists where the inner lists have different lengths.

```boba
var jagged: number[][] = [
  [10, 20],
  [30, 40, 50],
  [60]
]

print(jagged[1][1]) // prints 40
```
Loops are control flow structures that allow you to execute a block of code repeatedly. Boba provides several types of loops to handle different scenarios.

## `for` loop

The `for` loop is used to iterate a specific number of times. It includes a start value, an end value, and a step value.

```boba
// Iterates from 1 up to and including 5, incrementing by 1
for i in 1 to 5 by 1 {
  // String interpolation is supported using {variable_name}
  print("I am print {i}!")
}

// To escape curly braces, use a double backslash: \\{ and \\}
```

## `while` loop

The `while` loop executes a block of code as long as a given condition remains `true`. The condition is checked *before* each iteration.

```boba
var j: number = 0
while j < 10 {
  j++
  print("I am print {j}!")
  if j == 5 then break // The `break` keyword exits the loop immediately
}
```

## `foreach` loop

The `foreach` loop is the idiomatic way to iterate over all elements in a collection, such as a list or a map.

```boba
var book: string[] = ["Chapter 1", "Chapter 2", "Chapter 3"]

foreach page in book {
  read(page)
}
```

## `repeat` loop

The `repeat` loop (also known as a do-while loop in other languages) is similar to a `while` loop, but the condition is checked *after* each iteration. This guarantees that the loop body will be executed at least once.

```boba
var k: number = 0
repeat {
  print("Repeating!")
  k++
} until k == 10
```
Maps are collections of key-value pairs. Each key in a map must be unique. They are useful for storing associated data, like a dictionary or a lookup table.

## Creating a Map

You can create a map using curly braces `{}` and specifying key-value pairs.

### Explicit Typing

You can explicitly declare the types for the keys and values.

```boba
// A map with string keys and number values
var scores: [string:number] = {
  "ada": 100,
  "grace": 95
}
```

### Type Inference

Boba can also infer the types from the data you provide.

```boba
// Types are inferred as [string:string]
var actions = {
  "add": "added",
  "subtract": "subtracted"
}
```

## Accessing and Modifying Values

You can access and modify values in a map using their keys.

```boba
print(scores["ada"]) // Outputs 100

scores["grace"] = 98 // Updates the value for the key "grace"
scores["boba"] = 105 // Adds a new key-value pair
```
The `match` statement is a powerful control flow construct that allows you to compare a value against a series of patterns and execute code based on which pattern matches. It is often more readable and expressive than a long chain of `if-else if` statements.

## Structure of a `match` Statement

A `match` statement consists of the `match` keyword followed by an expression, and a block of `=>` separated arms. Each arm has a pattern and an expression to execute if the pattern matches.

```boba
match my_variable {
  pattern_1 => expression_1,
  pattern_2 => expression_2,
  _ => default_expression // The wildcard `_` is the default case
}
```

## Patterns

`match` arms can use a variety of patterns:

-   **Literal Values**: Match against a specific value.
    ```boba
    match status_code {
      200 => print("OK"),
      404 => print("Not Found"),
      _ => print("Some other status")
    }
    ```
-   **Variable Binding**: Bind the matched value to a new variable.
    ```boba
    match some_value {
      s: string => print("It's a string of length {s.len()}"),
      n: number => print("It's a number: {n}")
    }
    ```
-   **Guards**: Add a `where` clause to an arm for more complex conditions.
    ```boba
    match some_number {
      x where x > 100 => print("It's a big number: {x}"),
      x where x < 0 => print("It's a negative number: {x}"),
      _ => print("It's a number between 0 and 100")
    }
    ```
-   **Wildcard**: The `_` pattern acts as a catch-all, matching any value that wasn't caught by the preceding arms. It is required for ensuring the `match` is exhaustive.

## Exhaustiveness

A `match` statement must be exhaustive, meaning that every possible value of the matched expression must be covered by one of the arms. The wildcard `_` is often used to satisfy this requirement.

Operators are special symbols that perform operations on operands (values and variables). Boba supports a range of arithmetic, comparison, and logical operators.

## Arithmetic Operators

These operators perform mathematical calculations.

| Operator | Description      | Example              |
| :------- | :--------------- | :------------------- |
| `+`      | Addition         | `5 + 2`  // 7         |
| `-`      | Subtraction      | `5 - 2`  // 3         |
| `*`      | Multiplication   | `5 * 2`  // 10        |
| `/`      | Division         | `5 / 2`  // 2.5       |
| `%`      | Modulo/Remainder | `5 % 2`  // 1         |
| `^`      | Power            | `5 ^ 2`  // 25        |

### Unary Arithmetic

These operators modify a single numeric variable.

-   `++`: Increments the value by 1.
-   `--`: Decrements the value by 1.

```boba
var score = 10
score++ // score is now 11
```

## Comparison and Relational Operators

These operators compare two operands and return a `boolean` (`true` or `false`).

| Operator | Description               |
| :------- | :------------------------ |
| `==`     | Equal to                  |
| `!=`     | Not equal to              |
| `<`      | Less than                 |
| `>`      | Greater than              |
| `<=`     | Less than or equal to     |
| `>=`     | Greater than or equal to  |

### Strict Boolean Evaluations

In conditional contexts like `if` statements, Boba requires an actual `boolean` value. You cannot use non-boolean types as a shorthand for `true` or `false`.

-   **Wrong**: `if (score) { ... }` where `score` is a `number`.
-   **Correct**: `if (score != 0) { ... }` which produces a `boolean`.

## Logical Operators

These operators are used to combine `boolean` expressions.

-   `and`: Logical AND (returns `true` if both operands are `true`).
-   `or`: Logical OR (returns `true` if at least one operand is `true`).
-   `not`: Logical NOT (inverts a `boolean` value).

## Equality `==` and `!=` Behavior

The behavior of the equality operators depends on the type of the operands.

| Type    | Behavior                                                                           | Example                                                                     |
| :------ | :--------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `number`  | Compares numerical values.                                                         | `5 == 5.0` is `true`                                                        |
| `boolean` | Compares the boolean values.                                                       | `true == true` is `true`                                                    |
| `string`  | Compares the contents of the strings character by character.                       | `"hello" == "hello"` is `true`                                              |
| `list`    | **Compares by reference**. Two lists are equal only if they are the *same object*. | `var a = [1]; var b = [1]; a == b` is `false`. `var c = a; a == c` is `true`. |
| `struct`  | **Compares by value**. Two structs are equal if all their corresponding fields are equal. | `var p1 = {x=1}; var p2 = {x=1}; p1 == p2` is `true`.                        |
| `class`   | **Comares by reference**. Two class instances are equal only if they are the *same object*. | `var g1 = new G(); var g2 = new G(); g1 == g2` is `false`.                 |
Boba supports the pipe operator `|>` for chaining function calls. The return of the initial call will be passed into the first parameter of the next function. Piping will call the object method first if it exists, then attempt to use a global method.

```js
var ingredients: string = ["flour", "sugar", "boba pearls"]

ingredients[0] |> upper() |> print() // Outputs "FLOUR"
Structures (or `structs`) are custom data types you can define to group together related variables into a logical unit. They are a way to create more complex, organized data.

## Defining a Structure

You define a structure using the `struct` keyword, followed by the name of the struct and a block of fields with their types.

```boba
// This defines a "Player" structure.
struct Player = {
  name: string,
  score: number,
  is_active: boolean
}
```

## Creating an Instance

Once a struct is defined, you can create instances (variables) of that type.

```boba
// Create a new variable "ada" of type "Player"
var ada: Player = { name = "Ada", score = 100, is_active = true }

// You can also let Boba infer the type
var boba_player = { name = "Boba", score = 9001, is_active = true }
```

## Accessing and Modifying Fields

You access the data within a struct instance using dot (`.`) notation.

```boba
print("Player's score: {ada.score}") // Outputs: Player's score: 100

// Fields of a `var` instance can be modified
ada.score = ada.score + 10
print("New score: {ada.score}") // Outputs: New score: 110
```

## Structs vs. Classes

Structs are similar to [Classes](./classes.mdx), but with a key difference:

-   **Structs (Value Types)**: When you assign a struct to a new variable or pass it to a function, a *copy* of the data is made. They are compared by their values.
-   **Classes (Reference Types)**: When you work with classes, you are working with a *reference* to the object. They are compared by their reference in memory.

Choose a struct when you need a simple data container. Choose a class when you need more complex behavior, methods, and inheritance. 
A type is a classification that tells the compiler or interpreter how a programmer intends to use a piece of data. Boba is a statically-typed language, meaning the type of every variable is known at compile time.

## Primitive Types

Primitive types are the most basic data types available in Boba.

### `string`

A `string` is a sequence of characters used to represent text.

```boba
var name: string = "Boba Fett"
let constant_string = "Immutable" // Type is inferred
```

### `number`

The `number` type represents a 64-bit floating-point number (double-precision). It's used for both integer and fractional values.

```boba
var price: number = 20.0
var quantity = 3 // Type is inferred
let pi: number = 3.14159
```

> **Note on Precision**: Boba's number type is suitable for a vast range of applications, but be aware of standard floating-point precision limitations when dealing with very large integers (greater than 2^53).

### `boolean`

A `boolean` represents one of two values: `true` or `false`. It's primarily used for conditional logic.

```boba
var is_active: boolean = true
let has_permission = false // Type is inferred
```

## Composite Types

Composite types, also known as aggregate types, are composed of primitive types and other composite types.

### `list`

A `list` is an ordered, resizable collection of elements of a single type.

For more details, see the [`list`](/docs/reference/lists/) reference.

```boba
var scores: number[] = [100, 95, 88]
let names: string[] = ["Ada", "Grace", "Hedy"]
```

### `map`

A `map` is an unordered collection of key-value pairs. All keys must be of the same type, and all values must be of the same type.

For more details, see the [`map`](/docs/reference/maps/) reference.

```boba
var user_scores: [string:number] = {
  "ada": 100,
  "grace": 95
}
```

### `struct`

A `struct` (or structure) is a custom composite type that lets you group related variables of different types into a named collection.

For more details, see the [`struct`](/docs/reference/structures/) reference.

```boba
// Definition
struct Point {
  x: number,
  y: number,
}

// Usage
var p1: Point = Point(x: 10, y: 20)
```

### `enum`

An `enum` (or enumeration) allows you to define a custom type by enumerating its possible values.

For more details, see the [`enum`](/docs/reference/enumerations/) reference.

```boba
// Definition
enum Status {
  Pending,
  InProgress,
  Completed,
  Failed,
}

// Usage
var current_status: Status = Status.InProgress
```

### `class`

A `class` is a blueprint for creating objects. It bundles data (properties) and methods (functions) that operate on that data.

For more details, see the [`class`](/docs/reference/classes/) reference.

```boba
// Definition
class Player {
  name: string
  score: number = 0

  pub fn new(name: string) {
    self.name = name
  }

  pub fn increase_score(amount: number) {
    self.score += amount
  }
}

// Usage
var player1 = Player("Zoe")
player1.increase_score(10)
```

## Other Types

### `function`

Functions are also a type in Boba. This allows them to be passed as arguments to other functions or assigned to variables.

For more details, see the [`function`](/docs/reference/functions/) reference.

```boba
fn add(a: number, b: number) -> number {
  return a + b
}

// Assign a function to a variable
var operation: fn(number, number) -> number = add

// Use the variable to call the function
var result = operation(5, 10) // result is 15
```
In Boba, you can declare variables using the `var` and `const` keywords.

## `var`

Use var to declare mutable variables. The type can be specified explicitly or inferred by the compiler from the value assigned at declaration.

```boba
var x: number = 2
y, z: number = 3, 4 // y and z must be the same type

// Types are inferenced at declaration
var a = 5
var name = "Boba"
```

## `const`

Use `const` to declare immutable constants.

```boba
const A: number = 1
struct Point = { x: number, y: number }
const BEST_POINT: Point = { x = 10, y = 20 }
var x: Point = { x = 15, y = 25 }

A = 10 // COMPILE ERROR: Cannot assign to 'A' because it is a constant.
BEST_POINT.x = 30 // COMPILE ERROR: Cannot assign to 'x' because it is a constant.
BEST_POINT = x // COMPILE ERROR: Cannot assign to 'BEST_POINT' because it is a constant.
```

