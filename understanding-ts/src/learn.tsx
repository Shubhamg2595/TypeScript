// interface person {
//   name: string;
//   motto(msg: string): void;
// }

// let sam: person = {
//   name: "sam",
//   motto(msg) {
//     console.log(`${this.name}'s motto is ${msg}`);
//   },
// };

// sam.motto('YOLO');

// ! with classes

// interface ICoords {
//   coords: {
//     lat: number;
//     lang: number;
//     pincode: number;
//   };
// }

// interface ILocation {
//   city: string;
//   state: string;
//   loc: ICoords;
// }

// class Address implements ILocation {
//   city: string;
//   state: string;
//   loc: ICoords;

//   constructor(city: string, state: string, loc: ICoords) {
//     this.city = city;
//     this.state = state;
//     this.loc = loc;
//   }
// }

// let coordinates: ICoords = {
//   coords: { lat: 44.23, lang: 44.54, pincode: 201005 },
// };

// let myAddrs = new Address("sahibabad", "ghaziabad", coordinates);

// ! with read-only properties

// interface INamed {
//   readonly name: string;
//   printName(): void;
// }

// class Person implements INamed {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   printName() {
//     console.log("name is", this.name);
//   }
// }

// let user1: INamed;
// user1 = new Person("SHubham");
// user1.printName();

// user1.name = "swaahaaa"; //Cannot assign to 'name' because it is a read-only property.

// ! extending interfaces with optional properties

interface INamed {
  readonly name: string;
  initials?: string; // optional property
}

interface IMotto extends INamed {
  printMotto(msg: string): void;
}

class Person implements IMotto {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  printMotto(motto: string) {
    console.log(`${this.name}'s motto is ${motto}`);
  }
}

let user1: IMotto;
user1 = new Person("SHubham");
user1.printMotto("YOLO");
