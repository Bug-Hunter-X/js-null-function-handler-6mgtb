# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript: incorrect handling of null values within a function. The initial code simply returns null when encountering null input.  The solution provides more robust error handling, making the code more informative and less prone to unexpected behavior.

## Bug

The `foo` function checks for null values.  While this prevents errors in some cases, returning null without additional context can mask the issue's root cause.  A more robust solution is needed.

## Solution

The improved `foo` function throws an error when null values are encountered.  This makes it easier to debug and prevents unexpected null values from propagating through the program.
