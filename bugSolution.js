function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed as input.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

try {
  console.log(foo(null, 2)); // Throws Error: Null values are not allowed as input.
} catch (error) {
  console.error(error.message);
}

try {
  console.log(foo(1, null)); // Throws Error: Null values are not allowed as input.
} catch (error) {
  console.error(error.message);
}

try {
  console.log(foo(null, null)); // Throws Error: Null values are not allowed as input.
} catch (error) {
  console.error(error.message);
}
