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

This page will host the formal EBNF (Extended Backus-Naur Form) grammar for Boba Lang.
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
Boba supports `for`, `while`, `foreach`, and `repeat` loops.

## `for` loop

```boba
for i in 1 to 5 by 1 { // these are ALWAYS numbers
  print("I am print #{i}!") // Standard support for f-strings like Python. \\{ and \\} will support escaping
}
```

## `while` loop

```boba
var j: number = 0
while j < 10 do {
  j++
  print("I am print #{j}!")
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
var x: number = 2
y, z: number = 3, 4 // y and z must be the same type
```

## `const`

Use `const` to declare immutable constants.

```boba
const A: number = 1
struct Point = { x: number, y: number }
const p: Point = { x = 10, y = 20 }
var x: Point = { x = 15, y = 25 }

// Is this line a compile error?
p.x = 30 // COMPILE ERROR: Cannot assign to 'x' because it is a constant.
p = x // COMPILE ERROR: Cannot assign to 'p' because it is a constant.
```

