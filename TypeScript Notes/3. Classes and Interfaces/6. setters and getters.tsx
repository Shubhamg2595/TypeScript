class Person {
    private isAdult: boolean;
    private pinCode: number = 201005;
  
    get areaPinCode(): number {
      return this.pinCode;
    }
  
    set areaPinCode(value: number) {
      this.pinCode = value;
    }
  
    constructor(
      public name: string,
      public age: number,
      public contactNumber: string
    ) {
      this.isAdult = this.updateAdultField();
    }
  
    private updateAdultField(): boolean {
      if (this.age > 18) {
        return true;
      }
      return false;
    }
  
    public displayGeneralInfo() {
      console.log(
        `${this.name} is ${this.age} years old. and is ${
          this.isAdult ? "an adult" : "a teen"
        }.`
      );
    }
  }
  
  class Employee extends Person {
    public employeeId: number;
    private techStack: string[] = [];
    private DepartmentName: string;
  
    constructor(
      name: string,
      age: number,
      contactNumber: string,
      DepartmentName: string
    ) {
      super(name, age, contactNumber);
      this.DepartmentName = DepartmentName;
      this.employeeId = Math.random() * 10 + 20;
    }
  
    printEmployeeInfo(this: Employee) {
      console.log(
        `Employee ${this.name} having employee ID as ${this.employeeId} is working for ${this.DepartmentName} department. A`
      );
    }
  
    updateTechStack(technicalSkill: string) {
      this.techStack.push(technicalSkill);
    }
  
    showTechStack() {
      this.techStack.map((skill) => console.log(skill));
    }
  }
  
  const emp1 = new Employee("shubham", 24, "9192929139", "IT-DEV");
  
  emp1.displayGeneralInfo();
  
  console.log('emp1 Pincode',emp1.areaPinCode);
  
  console.log('updating pincode');
  emp1.areaPinCode = 201001;
  console.log('emp1 Pincode',emp1.areaPinCode);