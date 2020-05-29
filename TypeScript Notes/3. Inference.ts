
// ! Type inference
// TS tries to figure what type of value, a variable refers to.
// if declaration and initialization are on the same line,TS will figure out the type of value assigned to the variable on its own.




let apples = 5;



// let apples;
// apples = 5;


// why and when to use annotation and inference


1. Annotations

- when we declare a variable on one line and then initialize it later
- when we want a variable to have a type that can't be inferred
- when a Function returns the 'any' type and we need to clarify the value


2. inference

- Always

