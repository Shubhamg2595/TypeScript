//?  Arrays in Typescript

// Typed Arrays : arrays where each Element is some consistent type of value

// const carMakers: string[] = ["ford", "Toyota"]; // annotation
// const carMakers = ["ford", "Toyota"]; // inference

// const dates = [new Date(), new Date()];

// const carsByMake = [
//     ['f150'],['corola'],['camaro']
// ]
// const carsByMake: string[][]

// ? why typed Arrays

// - TS can do type inference when extracting values from an Array

const carMakers: string[] = ["ford", "Toyota"];

const car = carMakers[0]; //const car: string
const poppedCar = carMakers.pop(); //const poppedCar: string

// - TS can prevent us from adding incompatible values to the array

carMakers.push(213213123); //Argument of type '213213123' is not assignable to parameter of type 'string'.

// - we can get help with 'map' , 'forEach', 'reduce' functions

carMakers.map((car: string): string => {
  return car.toLowerCase();
  // all utils provided for string values
});

// - Flexible - arrays can still contain multiple different types

const importantDates: (Date | string)[] = [new Date(), "2013-10-10"]; //const importantDates: (string | Date)[]

importantDates.push(new Date());
importantDates.push("2013-10-12");

//? where to use?

//  anytime we need to represent a collection of records with some arbitrary sort order.
