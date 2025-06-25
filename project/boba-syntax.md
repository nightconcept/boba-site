Boba supports classes and inheritance.

```boba
class Enemy = {
  health: number = 100

  fn take_damage(amount: number) -> void {
    self.health = self.health - amount
  }
}

class Goblin extends Enemy = {
  gold: number = 12

  fn taunt() {
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
fn myFunction() -> void {
  print("This is a function")
}

fn myFunctionWithArgs(a: number, b: number) -> number {
  return a + b
}

private fn myPrivateFunction() -> void {
  print("Don't tell anyone about this!")
}
This page will host the formal EBNF (Extended Backus-Naur Form) grammar for Boba Lang.
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

```boba
null and false --> null
false and null --> false
not true --> false
0 and 20 --> 20
10 and 20 --> 20
Boba supports the pipe operator `|>` for chaining function calls.

```js
var ingredients: string = ["flour", "sugar", "boba pearls"]

ingredients[0] |> upper() |> print() // Outputs "FLOUR"
In Boba, you can define custom data structures for your objects using the `type` keyword.

## Defining a Structure

Use the `type` keyword to define the blueprint for a new data structure.

```boba
// This defines a "Player" structure.
type Player = {
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
Boba uses `table` to represent both lists and maps.

## Lists

```boba
// A list of numbers. Type is spread. No need for something like number[]
var high_scores: number = [100, 95, 80]

// A list of strings
var ingredients: string = ["flour", "sugar", "boba pearls"]

print(ingredients[0]) // Outputs "flour"
ingredients[2] = "tapioca pearls" // Changes the value
```

## Maps

```boba
var player = {
    name: string = "Ada",
    score: number = 100,
    is_active: boolean = true
}

print(player.name)   // Outputs "Ada"
player.score = 105   // Update the score
Boba Lang supports the following primitive types:

- `string`
- `number`
- `function`
- `boolean`

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
```

