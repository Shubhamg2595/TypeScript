//  ! Interfaces in TS

// Interfaces: creates a new type, describing the property names and value types of an object

// const oldCivic = {
//   name: "civic",
//   year: 2000,
//   broken: true,
// };

// const printVehicles = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }) => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
// };

// printVehicles(oldCivic);

//  fixing above long annotation with interface

// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   //   handling methods of objects
//   summary(): string;
// }

// const oldCivic = {
//   name: "civic",
//   year: 2000,
//   //   isbroken: true,
//   broken: true,
//   summary: function (): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printVehicles = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
//   console.log(`broken: ${vehicle.summary()}`);
// };

// ? functions in interfaces

// interface Reportable {
//   summary(): string;
// }

// const oldCivic = {
//   name: "civic",
//   year: 2000,
//   //   isbroken: true,
//   broken: true,
//   summary: function (): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printSummary = (item: Reportable): void => {
//   console.log(`broken: ${item.summary()}`);
// };

// printSummary(oldCivic);


// ? code reuse with interface


interface Reportable {
    summary(): string;
  }
  
  const oldCivic = {
    name: "civic",
    year: 2000,
    //   isbroken: true,
    broken: true,
    summary: function (): string {
      return `Name: ${this.name}`;
    },
  };
  
  const drink = {
      color: 'brown',
      carbonated: true,
      sugar: 43,
      summary(): string {
          return `my drink has this ${this.color} color`
      }
  
  }
  
  
  const printSummary = (item: Reportable): void => {
    console.log(`broken: ${item.summary()}`);
  };
  // we were successful in creating a generic function i.e printSummary that can be used with different types of containing having need of one common function with quite similar functionalities. 
  
  
  printSummary(drink)
  printSummary(oldCivic)
  
  //  General strategy used for Reusable code in TS
  
  - Create functions that accept arguments that are typed with interfaces
  - Objects/classes can decide to implement a given interface to work with a function