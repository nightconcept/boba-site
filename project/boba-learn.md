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

Now that you know how to create variables and constants, let's move on to the different types of data you can store in them.

import { Aside } from '@astrojs/starlight/components';

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

<Aside type="note">
Under the hood, Boba's `number` is an IEEE 754 double-precision floating-point number. This design choice prioritizes simplicity over the granular control offered by multiple integer and floating-point types found in languages like C or C#. However, it means that integer values above 2^53 (9,007,199,254,740,991) may begin to lose precision.
</Aside>

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
// A map with string keys and number values
var scores: [string:number] = {
  "ada": 100,
  "grace": 95
}
```

You can access values in a map using their key. Accessing a map key returns an `Option` type, which is Boba's safe way of handling values that might not exist. We'll cover `Option` in detail in a later chapter, but for now, just know that it's a container that can be either `Some(value)` or `None`.

```boba
// The type of ada_score is Option<number>
var ada_score = scores["ada"] // ada_score is Some(100)

// Let's add a new score
scores["boba"] = 105

print(scores.len()) // Outputs: 3
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

Conditional logic is a fundamental part of programming. In the next chapter, we'll look at another crucial concept for controlling program flow: loops.

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

## Controlling Loop Flow

You can control the flow of your loops with `break` and `continue`.

### Exiting with `break`

The `break` statement exits the current loop prematurely. It's often used inside a conditional statement.

```boba
var j: number = 0
while j < 10 {
  j++
  if j == 5 {
    break // Exits the loop when j is 5
  }
  print("I am print {j}!")
}
```

### Skipping an Iteration with `continue`

The `continue` statement skips the current iteration of a loop and moves to the next one.

```boba
// Let's print only the odd numbers from 1 to 10
for i in 1 to 10 by 1 {
  // If the number is even, skip to the next iteration.
  if (i % 2 == 0) {
    continue
  }
  print(i)
}
// Output: 1, 3, 5, 7, 9
```

Loops are a powerful tool for automating repetitive tasks. In the next chapter, we'll learn how to define our own custom data types with enums.

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

Enums are a powerful feature for making your code more expressive and safe. They become even more powerful when combined with the `match` statement, which we'll explore in the very next chapter.

Boba provides a powerful `match` statement for checking a variable against a series of possible values. It's a clean and expressive way to handle multiple distinct cases, especially when working with `enum` types.

A `match` statement is often used with `enum` types.

```boba
enum TrafficLight {
  RED,
  YELLOW,
  GREEN
}

var light = TrafficLight.RED

match light {
  TrafficLight.RED => print("Stop!"),
  TrafficLight.YELLOW => print("Caution!"),
  TrafficLight.GREEN => print("Go!"),
  _ => print("Light is broken.") // `_` is a wildcard for any other case
}
```

## Advanced Pattern Matching

Boba's `match` statement can do much more than simple value checking. You can also match on types and use `where` clauses for complex conditions.

```boba
var myVariable = 150

match myVariable {
  1 => print("It was one!"),
  x where x > 100 => print("It's a big number: {x}"),
  s: string => print("It's a string of length {s.len()}"),
  _ => print("Default case")
}
```

With `match`, you can write incredibly clear and robust logic. In the next chapter, we'll learn how to organize our code into reusable blocks called functions.

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

By default, functions are private, meaning they can only be called from within the same file. To make a function accessible from other files, you must use the `pub` keyword. The `pub` keyword makes your functions available to other files, a concept we'll explore in the final chapter on Imports.

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

Functions are the building blocks of any Boba program. In the next chapter, we'll explore how to group related data together using structs.

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

Structs are a great way to model the data in your application. Now that we can group data, let's look at how Boba helps us handle data that might be missing in the next chapter.

In many programming languages, the absence of a value is represented by `null`. While seemingly convenient, `null` is often called the "billion-dollar mistake" because it can lead to unexpected runtime errors...

To prevent this entire class of errors, Boba was designed without `null`. Instead, it provides a robust, built-in enum called `Option<T>` to handle values that might be absent.

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
fn find_user(id: number): Option<string> {
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
struct Config = {
  hostname: string,
  port: number,
  enable_https: boolean
}

fn load_config() -> Result<Config, error> {
    // (In this example, read_file and parse_json are assumed to be
    // functions from Boba's standard library.)

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
    if (data.is_empty()) {
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
    if (data.is_empty()) {
        // We can just return. `defer file.close()` will run automatically.
        return Err({ message = "File is empty" })
    }

    // `defer file.close()` will also run automatically before this return.
    return Ok("Processed data!")
}
```

By placing `defer file.close()` right after `fs.open(path)?`, we make our code cleaner, safer, and easier to read. The cleanup code is right next to the resource it's cleaning up.

Now that you've mastered writing robust Boba code, let's move on to object-oriented programming with classes in the next chapter.

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

The `self` keyword refers to the current instance of the class, allowing you to access its properties and methods.

## Creating an Instance of a Class

You create an instance of a class using the `new` keyword.

```boba
var enemy = new Enemy()
```

## Initializers

Classes have a special `init` block that acts as a constructor. It's called when you create a new instance and is perfect for setting up the initial state of an object. You can even add parameters to it.

```boba
class Enemy = {
  health: number

  // This init block takes a parameter to set the starting health
  init(start_health: number) {
    self.health = start_health
  }

  pub fn take_damage(amount: number) -> void {
    self.health = self.health - amount
  }
}

// Create a regular enemy and a powerful boss
var minion = new Enemy(100)
var boss = new Enemy(500)

print("Boss health: {boss.health}") // Prints "Boss health: 500"
```

## Accessing Properties and Methods

You can access the properties and methods of a class instance using dot notation.

```boba
enemy.take_damage(20)
print("Enemy health: {enemy.health}") // Prints "Enemy health: 80"
```

## Inheritance

Boba supports inheritance, which allows you to create a new class (a "child" or "subclass") that inherits the properties and methods of an existing class (a "parent" or "superclass").

When a child class has its own `init` block, it **must** call the parent's initializer using `super()`. This ensures that the parent part of the object is properly set up before the child adds its own properties.

Let's see it in action.

```boba
// --- The Parent Class ---
class Enemy {
  health: number
  name: string

  // The parent initializer requires a name to be provided.
  init(name: string) {
    self.health = 100
    self.name = name
    print("{self.name} (an Enemy) has been created.")
  }

  pub fn take_damage(amount: number) -> void {
    self.health = self.health - amount
  }
}


// --- The Child Class ---
class Goblin extends Enemy {
  gold: number

  // The Goblin's initializer takes the arguments it needs.
  init(name: string, gold_pieces: number) {
    // 1. Call the parent's init FIRST and pass the required 'name' up to it.
    // This is mandatory.
    super(name)

    // 2. Now that the 'Enemy' part is initialized, we can initialize
    //    the fields specific to the Goblin.
    self.gold = gold_pieces
    print("...and it's a Goblin with {self.gold} gold!")
  }

  pub fn taunt() {
    // We can now safely use 'self.health' because super() was called.
    print("{self.name} the Goblin taunts! Health: {self.health}, Gold: {self.gold}")
  }
}


// --- Usage ---
var weak_goblin = new Goblin("Gribbly", 12)
// Output:
// > Gribbly (an Enemy) has been created.
// > ...and it's a Goblin with 12 gold!

weak_goblin.taunt()
// Output:
// > Gribbly the Goblin taunts! Health: 100, Gold: 12
```

Classes are a cornerstone of object-oriented programming. But now that you know about both structs and classes, when should you use each one? We'll answer that critical question in the next chapter.

import { Aside } from '@astrojs/starlight/components';

In Boba Lang, both `structs` and `classes` allow you to create custom data structures, but they have one fundamental difference that impacts how you use them: the way they are handled when assigned or passed to functions. Understanding this distinction is crucial for writing correct and efficient code.

The core difference is **value semantics** vs. **reference semantics**.

-   **Structs** are *value types*. When you assign a struct to a new variable or pass it to a function, the entire struct is *copied*.
-   **Classes** are *reference types*. When you assign a class instance to a new variable, you are not creating a copy. Instead, you are creating a *reference* (or a pointer) to the exact same object in memory.

## A Practical Example

Let's see this in action.

### Structs: Copies on Assignment

Imagine we have a simple `Point` struct. When we assign `p1` to `p2`, we create a completely independent copy. Changing `p2` has no effect on `p1`.

```boba
// Struct (Value Type)
struct Point {
    x: number
}

var p1 = Point { x: 10 }
var p2 = p1 // p2 is a NEW copy of p1

// Modify the copy
p2.x = 20

print("p1.x is still \{p1.x}") // Output: p1.x is still 10
print("p2.x is now \{p2.x}")   // Output: p2.x is now 20
```

### Classes: References on Assignment

Now, consider an `Enemy` class. When we assign `e1` to `e2`, both variables point to the *same object*. Modifying the object through `e2` will be reflected when we access it through `e1`.

```boba
// Class (Reference Type)
class Enemy {
    var health = 100

    fn take_damage(amount: number) {
        self.health = self.health - amount
    }
}

var e1 = new Enemy()
var e2 = e1 // e2 is a REFERENCE to the SAME object as e1

// Modify the single object via the second reference
e2.take_damage(20)

print("e1.health is now \{e1.health}") // Output: e1.health is now 80
print("e2.health is now \{e2.health}") // Output: e2.health is now 80
```

<Aside type="note">
**Stack vs. Heap: A Deeper Look**

For those with a background in systems programming (like C or C++), you can think of this in terms of memory allocation.

-   **Value types** like `structs` are typically stored on the **stack**. The stack is a simple, efficient region of memory for fixed-size data. When you assign a struct, its data is copied directly on the stack.
-   **Reference types** like `classes` are stored on the **heap**. The heap is a more flexible (but slightly slower) region of memory for dynamically sized or long-lived data. The object itself lives on the heap, and what you pass around is just a small, fixed-size pointer to that memory location.
</Aside>

## When to Use Which?

Here are some simple rules of thumb for deciding between a `struct` and a `class`:

**Use a `struct` when:**

-   The data is simple and self-contained (e.g., a 2D point, an RGB color, a size).
-   You want to ensure that the data is not changed by another part of your program unexpectedly.
-   The primary purpose is to group a few related values together.
-   You don't need inheritance.

**Use a `class` when:**

-   You need a single, shared instance of an object that multiple parts of your program can interact with and modify (e.g., a game character, a database connection, a user profile).
-   The object has a distinct identity and lifecycle.
-   You want to use inheritance to create specialized versions of a base class.
-   The object's behavior (methods) is as important as its data.

With this knowledge, you can build well-structured and efficient Boba applications. In the final chapter, we'll learn how to organize your code into separate files.

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

## Project Mode

This mode is active when you run `boba` commands like `build`, `run`, or `test` without a file path.

-   **Invocation:** `boba build`, `boba run`, `boba test`

-   **Behavior:** The `boba` tool will look in the current directory (and parent directories) for a `boba.toml` file.
    -   If it finds one, it considers that directory the project root.
    -   All operations are now relative to this root. For example, `boba run` will know to look for a `src/main.boba` file and execute its `main()` function. `boba build` will place artifacts in a `build/` or `target/` directory within the project root.

## Designing `boba init`

The `boba init` command is your user's entry point into Project Mode. It's your chance to establish a clean, standard project structure that solves the "ecosystem tax" from day one.

When a user runs `boba init my_awesome_project`, the tool should create the following structure:

```text
my_awesome_project/
├── .gitignore
├── boba.toml
└── src/
    └── main.boba
```

### `boba.toml`: A pre-populated project manifest

```toml
[project]
name = "my_awesome_project"
version = "0.1.0"
license = "MIT"

[dependencies]

# To specify a git repository, you use an inline table.
# At a minimum, you must provide the git URL.
# By default, Boba will use the latest commit on the default branch.
http = { git = "https://github.com/boba-lang/http" }

# To pin to a specific version tag (BEST PRACTICE for releases)
json = { git = "https://github.com/boba-lang/json", tag = "v1.2.0" }

# To pin to a specific commit hash for absolute reproducibility
data_structures = { git = "https://github.com/user/boba-dstruct", rev = "f4aa7b123c..." }

# To pin to a specific branch (for development or bleeding-edge versions)
# WARNING: This is not recommended for stable applications.
logging = { git = "https://github.com/boba-lang/log", branch = "feature/new-format" }

```

### `src/main.boba`: A default entry point file

```boba
// The main entry point for the project.
// This function is executed when you run `boba run` in the project directory.
pub fn main() -> void {
  print("Hello, world!")
}
