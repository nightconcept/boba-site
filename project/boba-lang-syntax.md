# Boba Syntax

## Cheat Sheet

### Types

- string
- number
- function
- boolean
- table

### Comments

```boba
// comments
fun_function()
/*
This is a block comment
*/
```

### Invoking Functions

```boba
print()
print("Hello World")
```

### Variables

```boba
var x: number = 2
y, z: number = 3, 4 // y and z must be the same type
const A: number = 1
```

### Tables (List/Maps)

```boba
// A list of numbers. Type is spread. No need for something like number[]
var high_scores: number = [100, 95, 80]

// A list of strings
var ingredients: string = ["flour", "sugar", "boba pearls"]

print(ingredients[0]) // Outputs "flour"
ingredients[2] = "tapioca pearls" // Changes the value

// This is a List of Numbers.
var my_list: number = [1, 2, 3]

// The line below would cause a clear, helpful error in the editor:
// "A list of numbers can only hold numbers. You tried to add text."
my_list[2] = "hello" // ERROR

var player = {
    name: string = "Ada",
    score: number = 100,
    is_active: boolean = true
}

print(player.name)   // Outputs "Ada"
player.score = 105   // Update the score
```

Notes: 0 or 1 index? 1-index for low levels, 0 for highest level.

### Functions

```boba
fn myFunction() -> void{
  print("This is a function")
}

fn myFunctionWithArgs(a: number, b: number) -> number{
  return a + b
}

private fn myPrivateFunction() -> void
{
  print("Don't tell anyone about this!")
}
```

### Piping

```js
var ingredients: string = ["flour", "sugar", "boba pearls"]

ingredients[0] |> upper() |> print() // Outputs "FLOUR"
```

### Conditionals

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
```

### Loops

```boba
for i in 1 to 5 by 1 { // these are ALWAYS numbers
  print("I am print #{i}!") // Standard support for f-strings like Python. \\{ and \\} will support escaping
}

var j: number = 0
while j < 10 do {
  j++
  print("I am print #{j}!")
  if j == 5 then break
}

foreach page in book {
  read(page)
}

var k: number = 0
repeat {
  print("Repeating!")
  k++
} until k == 10
```

### Classes

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
```

### Constants

```boba
null
false
true
```

### Relational

```boba
-- Relational (binary)
// eq    lt   gt     le    ge
   ==    <     >     <=    >=

// Not equal
   !=

// Arithmetic (binary)
//add    sub    mul    div    mod    pow
   +      -      *      /      %      ^

// Arithmetic (unary)
++
--
```

### Logic

```boba
null and false --> null
false and null --> false
not true --> false
0 and 20 --> 20
10 and 20 --> 20
```
