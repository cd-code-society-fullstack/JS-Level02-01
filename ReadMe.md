# Make Chocolate

**Problem Statement**

You are given an integer array of size n. Your task is to implement a function named `makeChocolate` that simulates a scenario where you are trying to make a package of `goal` kilos of chocolate using small bars (1 kilo each) and big bars (5 kilos each). The function should return the number of small bars to use, given that we always use big bars before small bars. If it is not possible to reach the goal using the available bars, return -1.

The `makeChocolate` function should accept three parameters:
1. `small`: an integer value representing the number of small bars.
2. `big`: an integer value representing the number of big bars.
3. `goal`: an integer value representing the goal weight in kilos.

Here are some examples:

- `makeChocolate(4, 1, 9)` should return `4`, as we can use one big bar (5 kilos) and four small bars (4 kilos) to reach the goal.

{Try It!}(node .guides/01-makeChocolate/try-it-01.js)

- `makeChocolate(4, 1, 10)` should return `-1`, as it is not possible to reach 10 kilos with the given bars.

{Try It!}(node .guides/01-makeChocolate/try-it-02.js)

- `makeChocolate(4, 1, 7)` should return `2`, as we can use one big bar (5 kilos) and two small bars (2 kilos) to reach the goal.

{Try It!}(node .guides/01-makeChocolate/try-it-03.js)

**Hint**

First, calculate how many big bars you can use without exceeding the goal. If it's less or equal to the available big bars, then check if the remaining weight (goal - big bars weight) can be achieved by the small bars. If it's more than the available big bars, check if the remaining weight after using all big bars can be achieved by the small bars.

## Submit 

```
console.log(makeChocolate(4, 1, 9));  // Output: 4
console.log(makeChocolate(4, 1, 10));  // Output: -1
console.log(makeChocolate(4, 1, 7));  // Output: 2
console.log(makeChocolate(6, 2, 12));  // Output: 2
console.log(makeChocolate(6, 2, 14));  // Output: 4
```

# Count Evens

**Problem Statement**

You are given an integer array. Your task is to implement a function named `countEvens` that counts and returns the number of even integers in the given array. 

The `countEvens` function should accept one parameter:
1. `nums`: an array of integers.

Here are some examples:

- `countEvens([2, 1, 2, 3, 4])` should return `3`, as there are three even numbers (2, 2, and 4) in the array.

{Try It!}(node .guides/secure/03-countEvens/try-it-01.js)

- `countEvens([2, 2, 0])` should return `3`, as all numbers in the array are even.

{Try It!}(node .guides/secure/03-countEvens/try-it-02.js)

- `countEvens([1, 3, 5])` should return `0`, as there are no even numbers in the array.

{Try It!}(node .guides/secure/03-countEvens/try-it-03.js)

**Hint**

You can use the modulus operator (`%`) to check if a number is even. A number is even if the remainder when divided by 2 is zero, i.e., `num % 2 == 0`.

## Submit 

**Test Runner**
```
node .guides/secure/03-countEvens/testRunner.js
[2, 1, 2, 3, 4] -> 3
[2, 2, 0] -> 3
[1, 3, 5] -> 0
```

## Length of word

**Problem Statement**

You are given a string consisting of words and spaces. Your task is to implement a function named `lengthOfLastWord` that returns the length of the last word in the string. 

A word is defined as a maximal substring consisting of non-space characters only.

The `lengthOfLastWord` function should accept one parameter:
1. `s`: a string value.

Here are some examples:

- `lengthOfLastWord("Hello World")` should return `5`, as the last word is "World" with length 5.

{Try It!}(node .guides/01-LengthOfLastWord/try-it-01.js)

- `lengthOfLastWord("   fly me   to   the moon  ")` should return `4`, as the last word is "moon" with length 4.

{Try It!}(node .guides/01-LengthOfLastWord/try-it-02.js)

- `lengthOfLastWord("luffy is still joyboy")` should return `6`, as the last word is "joyboy" with length 6.

{Try It!}(node .guides/01-LengthOfLastWord/try-it-03.js)

**Hint**

Split the string by space characters and return the length of the last non-empty string in the resulting array.

## Submit 

**Test Runner**
```
node .guides/secure/01-LengthOfLastWord/testRunner.js
Hello World -> 5
   fly me   to   the moon  -> 4
luffy is still joyboy -> 6
```