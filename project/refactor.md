Instructions for Chapter 6: Making Decisions: if/else Expressions

The content here is solid, but we can better highlight a powerful feature of Boba: if being an expression. This is a key concept for writing concise, idiomatic code.

    Renumber the chapter. Change the heading from ## Chapter 6 to ## Chapter 5.

    At the beginning of the chapter, directly under the main heading, insert the following introductory paragraph. This sets the stage for understanding if as both a statement and an expression.

        In Boba, conditional logic is used not only to control which code runs (as a statement), but also to evaluate to a value (as an expression). This makes if/else a powerful tool for both program flow and variable assignment.

    The section on the one-liner if/else can be expanded to reveal the full power of if expressions.

        Change the heading from ### Concise Conditionals with One-Liner if/else to ### Using if as an Expression.

        The current example shows a one-liner. To demonstrate that multi-line blocks are also expressions, insert the following text and code block immediately after the first example.

        This concept isn't limited to single lines. Full if/else blocks are also expressions, meaning they can evaluate to a value that can be returned or assigned. This allows for very clean and readable logic without temporary mutable variables.
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

    Notice how the last line in each block becomes the value that the if expression returns.

Instructions for Chapter 7: Repeating Actions: for and while Loops

The goal here is to simplify the examples to ensure they only use concepts that have already been taught, keeping the learner's focus squarely on the loop itself.

    Renumber the chapter. Change the heading from ## Chapter 7 to ## Chapter 6.

    In the section "2. Iterating Over a Range of Numbers," the second example uses a method call (player.take_poison_damage) on a player object, which hasn't been introduced.

        Replace the second code block in that section with this simpler, self-contained example:

```boba
// An inclusive range from 1 up to, and including, 3.
for i in 1..=3 {
  print(f"This is message number {i}.")
}
// Output:
// This is message number 1.
// This is message number 2.
// This is message number 3.
```

In the section "The while Loop," the example introduces an unmentioned timer module and the compound assignment operator +=. This adds unnecessary cognitive load.

    Replace the entire while loop section's content (the paragraph and code block) with the following more focused example:

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
At the very end of the chapter, add the following callout to guide the learner to their practice exercises.

> #### **Time to Practice!**
>
> Iteration is fundamental to programming. Your next exercises will have you using `for` and `while` loops to process collections and repeat actions, solidifying your understanding of how to control program flow.