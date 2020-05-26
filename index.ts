// ! Type annotation
// code we add to tell TS what type of value a variable will refer to

// ! Type inference
// TS tries to figure what type of value, a variable refers to.

// ! Annotations

const apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;
let nothingMuchMore: undefined = undefined;

// using built-in objects

let date: Date = new Date();

// array
let colors: string[] = ["red", "green"];
let numbersArr: number[] = [1, 2, 3];
let booleanArr: boolean[] = [true, false];

// classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
