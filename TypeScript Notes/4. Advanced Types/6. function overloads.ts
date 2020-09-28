// ! function overloads : multiple ways of calling a function with diff parameters

// without fn overloads

// type combinable = string | number;

// function add(a: combinable, b: combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// let sum1 = add(12,12)
// let sum2 = add('asd','asdsad')
// sum2.split('s'); //Property 'split' does not exist on type 'combinable'. Property 'split' does not exist on type 'number'
// ? using overLoads

type combinable = string | number;
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

let sum1 = add(12, 12);
let sum2 = add("asd", "asdsad");
sum2.split("s"); //Property 'split' does not exist on type 'combinable'. Property 'split' does not exist on type 'number'
