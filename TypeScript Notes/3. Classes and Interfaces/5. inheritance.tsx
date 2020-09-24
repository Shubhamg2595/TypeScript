class Person {
  private isAdult: boolean;
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
      }`
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
      `Employee ${this.name} having employee ID as ${this.employeeId} is working for ${this.DepartmentName} department`
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

emp1.updateTechStack("JS");
emp1.updateTechStack("TS");
// emp1.techStack[2] = 'python'; //Property 'techStack' is private and only accessible within class 'Employee'.
emp1.displayGeneralInfo();
emp1.printEmployeeInfo();
emp1.showTechStack();
