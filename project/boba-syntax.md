Boba supports classes and inheritance.

```boba
class Enemy = {
  health: number = 100

  pub fn take_damage(amount: number) -> void {
    self.health = self.health - amount
  }

  // Class private functions are only accessible within the class
  heal(amount: number) -> void {
    self.health = self.health + amount
  }
}

class Goblin extends Enemy = {
  gold: number = 12

  pub fn taunt() {
    print("Heh heh heh! I have {self.health} health left!")
  }
}

Boba supports two types of comments.

## Single-line comments

```boba
// This is a comment
```

## Block comments

```boba
/*
This is a block comment
*/
Boba uses `if`, `else if`, and `else` for conditional logic.

```boba
if (hungry and thirsty) {
  print("Hungry and thirsty.")
}
else if (hungry) {
  print("Only hungry.")
}
else {
  print("Neither hungry nor thirsty")
}

Boba has the following built-in constants:

- `null`
- `false`
- `true`
## Enumerations

```boba
enum Color {
  RED,
  GREEN,
  BLUE
}
var my_color = Color.GREEN
```
## Result Enum

```boba
enum Result<T, E> {
  Ok(T),    // The 'Success' compartment, holds a value of type T
  Err(E)    // The 'Failure' compartment, holds a value of type E
}
```
- `T` is a generic placeholder for the type of data you expect on success.
- `E` is a generic placeholder for the type of data you expect on failure.

Example usage:
```boba
// You define this struct somewhere in your project.
// It represents the data you expect to get from your config file.
struct Config = {
  hostname: string,
  port: number,
  enable_https: boolean
}

fn load_config() -> Result<Config, error> {

    // 1. Call read_file. It returns a Result<string, error>.
    // 2. The '?' operator checks that Result.
    //    - If it's Err(e), '?' IMMEDIATELY stops this function and returns that Err(e).
    //    - If it's Ok(s), '?' unwraps the box, takes out the string 's', and assigns it to 'content'.
    var content = read_file("config.json")?

    // 3. This line is only reached if read_file succeeded.
    // 4. Call parse_json with the content. It returns a Result<Config, error>.
    // 5. The '?' operator checks that Result again.
    //    - If it's Err(e), '?' IMMEDIATELY stops this function and returns that Err(e).
    //    - If it's Ok(c), '?' unwraps the box, takes out the Config object 'c', and assigns it to 'config'.
    var config = parse_json(content)?

    print("Config loaded!")

    return Ok(config)
}
```

Functions are defined using the `fn` keyword. You can specify argument types and return types.

```boba
// Public function
pub fn myFunction() -> void {
  print("This is a function")
}

pub fn myFunctionWithArgs(a: number, b: number) -> number {
  return a + b
}

// Private functions are only accessible within the file declared in.
// Not having pub makes a function private.
fn myPrivateFunction() -> void {
  print("Don't tell anyone about this!")
}

## Overloading

Allowed. An overload resolution algorithm must be implemented.

## Default Parameters

Allowed.

## Guidance

Use Overloading for Different Semantics or Types. The core behavior of the function changes based on the type of input.

```boba
// Behavior is different for a number vs. a list
pub fn create_buffer(size: number) { /* Allocate a new buffer */ }
pub fn create_buffer(from_data: number[]) { /* Copy data into a new buffer */ }
```

Use Default Arguments for Optional Configuration. The core behavior is the same, but you are providing optional flags or parameters to tweak it.
```boba
// Behavior is always connecting, but port and ssl are optional tweaks
pub fn connect(host: string, port: number = 5432, use_ssl: boolean = true) { ... }
```

An overload set should not contain functions that only differ by parameters with default values.

## Imports

Individual functions (they must be public) and all functions from a file can be imported. All overloads are also imported.

Circular imports are disallowed.

Imported functions can be renamed.

```boba
import func1, func2 from "relative/path/from/this/file.boba"
import * from "relative/path/from/this/file2.boba"
import func1 as func3 from "relative/path/from/this/file3.boba"
```
## Lists

```boba
// A list of numbers
var high_scores: number[] = [100, 95, 80]

// A list of strings
var ingredients: string[] = ["flour", "sugar", "boba pearls"]

print(ingredients[0]) // Outputs "flour"
ingredients[2] = "tapioca pearls" // Changes the value
```

## 2-D Lists

```boba
// A 2x3 matrix (2 rows, 3 columns)
var matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

// A "jagged" list is also possible
var jagged: number[][] = [
  [10, 20],
  [30, 40, 50],
  [60]
]

// Accessing elements
var value: number = matrix[1][2] // value would be 6
print(jagged[1][1]) // prints 40
```
Boba supports `for`, `while`, `foreach`, and `repeat` loops.

## `for` loop

```boba
for i in 1 to 5 by 1 { // these are ALWAYS numbers
  print("I am print {i}!") // Standard support for f-strings like Python. \\{ and \\} will support escaping
}
```

## `while` loop

```boba
var j: number = 0
while j < 10 do {
  j++
  print("I am print {j}!")
  if j == 5 then break
}
```

## `foreach` loop

`foreach` can only iterate through lists and maps. The 

```boba
foreach page in book {
  read(page)
}
```

## `repeat` loop

```boba
var k: number = 0
repeat {
  print("Repeating!")
  k++
} until k == 10
## Maps

```boba
// Explicit types
var scores: [string: number] = {
  "ada": 100,
  "grace": 95
}

// Inferenced types
var actions = {
  "add": "added",
  "subtract": "subtracted"
}
```
## Match

```boba
// Hypothetical Boba match statement
match my_variable {
  1 => print("It was one!"),
  x where x > 100 => print("It's a big number: {x}"),
  s: string => print("It's a string of length {s.len()}"),
  _ => print("Default case") // `_` is a wildcard
}
```

Boba supports a variety of operators.

### Comparisons

Comparisons must be boolean.

#### Wrong
```boba
var score: number = 100
if (score) { ... } // COMPILE ERROR: Expected 'boolean', but got 'number'.

var name: string = "Ada"
if (name) { ... } // COMPILE ERROR: Expected 'boolean', but got 'string'.

var items: number[] = [1, 2, 3]
if (items) { ... } // COMPILE ERROR: Expected 'boolean', but got 'number[]'.
```
### Correct

```boba
var score: number = 100
if (score != 0) { ... } // Correct: The '!=' operator produces a boolean.

var name: string = "Ada"
if (name != "") { ... } // Correct: Be explicit about checking for an empty string.

var items: number[] = [1, 2, 3]
if (items.len() > 0) { ... } // Correct: Be explicit about checking the list's size.
```

## Relational (binary)

```boba
// eq    lt   gt     le    ge
   ==    <     >     <=    >=
```

## Not equal

```boba
!=
```

## Arithmetic (binary)

```boba
//add    sub    mul    div    mod    pow
   +      -      *      /      %      ^
```

## Arithmetic (unary)

```boba
++
--
```

## Logic

| Type    | == / != Behavior                                                                           | Example                                                                     |   |   |
|---------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|---|---|
| number  | Compares the numerical values.                                                             | `5 == 5.0` is `true`                                                        |   |   |
| boolean | Compares the boolean values                                                                | `true == true` is `true`                                                    |   |   |
| string  | Compares the contents of the strings character by character                                | `"hello" == "hello"` is `true`                                              |   |   |
| list    | Compares references. Two lists are equal only if they are the same exact object in memory. | `var a = [1] var b = [1] a == b` is `false`.   `var c = a a == c` is `true` |   |   |
| struct  | Compares by value. Two structs are equal if all their fields are equal.                    | `var p1 = {x=1} var p2 = {x=1}` `p1 == p2` is `true`                        |   |   |
| class   | Compares references, just like lists.                                                      | `var g1 = new G()` `var g2 = new G()` `g1 == g2` is `false`                 |   |   |
Boba supports the pipe operator `|>` for chaining function calls. The return of the initial call will be passed into the first parameter of the next function. Piping will call the object method first if it exists, then attempt to use a global method.

```js
var ingredients: string = ["flour", "sugar", "boba pearls"]

ingredients[0] |> upper() |> print() // Outputs "FLOUR"
In Boba, you can define custom data structures for your objects using the `struct` keyword.

## Defining a Structure

Use the `struct` keyword to define the blueprint for a new data structure.

```boba
// This defines a "Player" structure.
struct Player = {
  name: string,
  score: number,
  is_active: boolean
}
```

## Creating an Instance

Once you have defined a structure, you can create variables that use it. When you create an instance of a structure, you don't need to specify the types of the fields again.

```boba
// Create a new variable "ada" of type "Player"
var ada: Player = { name = "Ada", score = 100, is_active = true }
``` 
Boba Lang supports the following primitive types:

- `string`
- `number` - C double underneath the hood
- `function`
- `boolean`
- `list` - Dynamic array underneath the hood
- `struct`
- `class`

*Note: Boba's number type is a 64-bit floating-point number. While suitable for a vast range of applications, programmers should be aware of standard floating-point precision limitations when dealing with very large integers (greater than 2^53).*
In Boba, you can declare variables using the `var` and `const` keywords.

## `var`

Use `var` to declare mutable variables. You must specify a type.

```boba
// Typing can be explicit or implicit

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

