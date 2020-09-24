class Employee {
    employeeName: string;
  
    constructor(name: string) {
      this.employeeName = name;
    }
  
    printName(this: Employee) {
      console.log("name of employee", this.employeeName);
    }
  }
  
  const emp1 = new Employee('tes1');
  
  const empObj = {
    employeeName: 'test2',
    printName: emp1.printName,
  }
  
  empObj.printName();
  