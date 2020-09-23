// ! Annotation around functions
// - code we add to tell TS what type of arguments a function will receive and what type of values it will return

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// ? annotations for anonymous functions

const multiply = function (a: number, b: number): number {
    return a * b;
  };
  
  // ! Type inference around functions
  
  // - TS tries to figure out what type of value a function will return
  
  // ? inference by TS : const add: (a: number, b: number) => number
  const add = (a: number, b: number) => {
    return a + b;
  };
  