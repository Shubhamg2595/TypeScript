// ! Classes -  Blueprint to create an object with some fields (properties and methods) to represent a thing.

//   class Vehicle {
//       drive(): void {
//           console.log('vroom vroom')
//       }

//       honk(): void {
//           console.log('horn horn')
//       }

//   }

//   const veh1 = new Vehicle();
//   veh1.drive();
//   veh1.honk();

// ? inheritance

// class Car extends Vehicle {
//     drive() :void {
//         console.log('vRRRRRRRRRRRoOOOOoooooM')
//     }
// }

// const car1 = new Car();

// car1.honk(); //honk honk
// car1.drive(); //vRRRRRRRRRRRoOOOOoooooM

// ! class method modifiers : First differnce between es2015 classes and typescript classes

// ? the goal of these modifiers is to restrict access to different functions or different variables.

// - public : This method can be called anywhere,anytime
// - private : This method can only be called by other methods in this class
// - protected : this method can be called by any other methods in this class, or by other methods in child classes.

// by default every method in class is public, unless access is modified explicitly.

// ? private and public
// class Vehicle {
//     // public drive(): void {
//     //     console.log('vroom vroom')
//     // }

//     public honk(): void {
//         console.log('horn horn')
//     }

// }

// class Car extends Vehicle {
//     // below defined private method is now only accessible inside this class definition and not anywhere else.
//     // also, when overRiding method of parent class, if we try to update modifier in child class, it will throw an error. Solution is to either remove method from parent class or keep the same access modifier in both parent and child classes.

//   private drive() :void {
// //   public drive() :void {
//       console.log('vRRRRRRRRRRRoOOOOoooooM')
//   }

//   startDrivingProcess() {
//       this.drive();
//       console.log('Drivviiiiiinnnnnngggggggggggggggggggg')
//   }

// }

// const car1 = new Car();

// car1.honk(); //honk honk
// car1.drive(); // not accessible

// car1.startDrivingProcess();

// ? public

//* private methods of parent class are not accessible to any methods of child class.

//  class Vehicle {
//     protected honk(): void {
//         console.log('horn horn')
//     }

// }

// class Car extends Vehicle {

//   private drive() :void {
//       console.log('vRRRRRRRRRRRoOOOOoooooM')
//   }

//   startDrivingProcess() {
//       this.drive();
//       this.honk();// protected method is accessible here (child class)
//       console.log('Drivviiiiiinnnnnngggggggggggggggggggg')
//   }

// }

// const veh1 = new Vehicle();
// // veh1.honk(); //Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.

// const car1 = new Car();

// // car1.honk(); // protected method is not accessible here
// // car1.drive(); // not accessible
// car1.startDrivingProcess();

//  TODO ---------------------------------------------------------------

// ? fields in classes

// class Vehicle {
//   color: string;

//   constructor(color: string) {
//     this.color = color;
//   }

//   protected honk(): void {
//     console.log("horn horn");
//   }
// }

// const veh1 = new Vehicle('red');
// console.log(veh1.color);

//* public access mod

class Vehicle {
    // public access modifier to make variable 'color' accessible
    constructor(public color: string) {}
  
    protected honk(): void {
      console.log("horn horn");
    }
  }
  
  const veh1 = new Vehicle("red");
  console.log(veh1.color);
  
  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      //   reason i did not use any modifier with color parameter is because it belong to parent classs, if we add a new modifier to it, it will create a new variable in Car class.
      super(color);
    }
  
    private drive(): void {
      console.log("vroooOOOOOOoooom");
    }
  
    startDriving(): void {
      console.log("car starts....");
      this.drive();
    }
  }
  
  const car1 = new Car(4,'orange');
  console.log(car1.color)
  console.log(car1.wheels)
   