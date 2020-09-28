// ! Generics

// ? with functions via generics

// function generateRandomId<T>(val: T): T {
//   return val;
// }

// // let o1= generateRandomId<number>('adsadas'); //Argument of type 'string' is not assignable to parameter of type 'number'.
// let o1= generateRandomId<number>(22)
// let o2= generateRandomId<string>('adssad')

// ? why we need generics

// function getItems(items: any[] ) : any[] {
//   return new Array().concat(items);
// }
// let myNumArr = getItems([10, 20, 30]);
// let myStrArr = getItems(["Hello", "JavaTpoint"]);
// myNumArr.push(40); // Correct
// myNumArr.push("Hello TypeScript"); // Correct
// myStrArr.push("Hello SSSIT"); // Correct
// myStrArr.push(40); // Correct

// ? * typescripting the function with generics

// function getItems<T>(items: T[]): T[] {
//   return new Array<T>().concat(items);
// }

// let arrOfNums = getItems<number>([1, 2, 3, 4]);
// console.log(typeof arrOfNums);
// arrOfNums.push(123123);
// console.log(arrOfNums);

// let arrOfStrs = getItems<string>(["adhbads", "asdas"]);
// // * arrOfStrs.push(1); //Argument of type 'number' is not assignable to parameter of type 'string'
// console.log(arrOfStrs);

// function mergeObj<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergingObj = mergeObj({ name: "shubham" }, { addr: [{ state: "UP" }] });

// console.log(mergingObj);
// console.log(mergingObj.addr[0]);

// * working with contraints

// function mergeObj<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergingObj = mergeObj({ name: "shubham" }, 30);

// console.log(mergingObj);

// No error thrown but we will need to make sure merge function works only with object....

// function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// // const mergingObj = mergeObj({ name: "shubham" }, 30);
// const mergingObj = mergeObj({ name: "shubham" }, { age: 30 });

// console.log(mergingObj);

interface ILengthy {
  length: number;
}

// function countAndDescribe<T>(element: T): [T, string] { //Property 'length' does not exist on type 'T'.
//   let description = "no elem found";
//   if (element.length > 0) {
//     description = `${element.length} elem found`;
//   }
//   return [element, description];
// }


function countAndDescribe<T extends ILengthy>(element: T): [T, string] { //Property 'length' does not exist on type 'T'.
  let description = "no elem found";
  if (element.length > 0) {
    description = `${element.length} elem found`;
  }
  return [element, description];
}

// console.log(countAndDescribe('Hello')) //[ 'Hello', '5 elem found' ]
// console.log(countAndDescribe(213123)) //Argument of type 'number' is not assignable to parameter of type 'ILengthy'

// console.log(countAndDescribe(['Hello','bwahahaha'])); //console.log(countAndDescribe(['Hello','bwahahaha']));

// console.log(countAndDescribe({arrayVal: ['ahdhsad','adas']}))
// Argument of type '{ arrayVal: string[]; }' is not assignable to parameter of type 'ILengthy'.
//   Object literal may only specify known properties, and 'arrayVal' does not exist in type 'ILengthy'.

// console.log(countAndDescribe({arrayVal: ['ahdhsad','adas'], length: 34}))
// [ { arrayVal: [ 'ahdhsad', 'adas' ], length: 34 }, '34 elem found' ]
//! Multi-type variables

// interface IName {
// firstName: string;
// middleName?: string;
// lastName: string;
// }

// interface IAddress {
//   flatNo: string;
//   city: string;
//   state: string;
//   pincode?: number;
// }

// function testing<T, U>(NameOj: T, Address: U): void {
//   console.log("Name Object: ", NameOj);
//   console.log("Address Object", Address);
// }

// const Nobj: IName = {
//   firstName: "shubham",
//   lastName: "gupta",
// };

// const Naddr: IAddress = {
//   flatNo: "B-194/S-1",
//   city: "shalimar garden",
//   state: "up",
// };

// testing<IName, IAddress>(Nobj, Naddr);

// ! Example 2

// interface IPerson {
//   name: string;
//   age: number;
// }

// interface IEmployee extends IPerson {
//   employeeId: number;
//   dept: string;
// }

// function printEmpDetails<T extends IEmployee>(empDetails: T): void {
//   console.log(`Emp Details \n Name ${empDetails.name} \n empId ${empDetails.employeeId}
//   \n Department ${empDetails.dept}`);
// }

// let softwareDeveloper : IEmployee = {
//   name: 'SHubham',
//   age: 24,
//   employeeId: 213,
//   dept: 'IT Developer'
// }

// printEmpDetails(softwareDeveloper);

//! Generics Interface as Function Type
// We can also use generics interface as function types. The following example can understand it.

// Example

// interface StudentInfo<T, U>
// {
//     (id: T, value: U): void;
// };
// function studentData(id: number, value:string):void {
//     console.log('Id = '+ id + ', \nName = ' + value)
// }
// let std: StudentInfo<number, string> = studentData;
// std(11, "Rohit Sharma");

// ! Class with Generics

// class StudentInfo<T,U>
// {
//     private Id: T;
//     private Name: U;
//     setValue(id: T, name: U): void {
//         this.Id = id;
//         this.Name = name;
//     }
//     display():void {
//         console.log(`Id = ${this.Id}, Name = ${this.Name}`);
//     }
// }
// let st = new StudentInfo<number, string>();
// st.setValue(101, "Virat");
// st.display();
// let std = new StudentInfo<string, string>();
// std.setValue("201", "Rohit");
// std.display();


// ? using 'keyof' constraint : useful with objects


// function printObjectKeyAndValues<T extends object, U extends keyof T>(objA: T, key: U) {
//   return `Value of ${key} : ${objA[key]}`
// }

// console.log(printObjectKeyAndValues({name: 'Max',age: 21},'name')) // Value of name : Max

// read about partial constraints too.