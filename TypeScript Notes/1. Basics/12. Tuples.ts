//! Tuples in typeScript

//* Tuples : Array like structure where each element represent some property of a record.

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
  };
  
  // creating Type alias
  
  type Drink = [string, boolean, number];
  
  const pepsi: Drink = ["brown", true, 49];
  const Dew: Drink = ["green", true, 42];
  
  // ? why tuples
  
  const carSpecs: [number, number] = [400, 3311];
  
  
  const carStats = {
      horsePower: 400,
      weight: 3354
  }