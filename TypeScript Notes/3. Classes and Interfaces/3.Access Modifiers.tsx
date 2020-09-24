class Employee {
  public employeeName: string;
  private techStack: string[] = [];
  constructor(name: string) {
    this.employeeName = name;
  }

  printName(this: Employee) {
    console.log("name of employee", this.employeeName);
  }

  updateTechStack(technicalSkill: string) {
    this.techStack.push(technicalSkill);
  }

  showTechStack() {
    this.techStack.map((skill) => console.log(skill));
  }
}

const emp1 = new Employee("tes1");

emp1.updateTechStack("JS");
emp1.updateTechStack("TS");
// emp1.techStack[2] = 'python'; //Property 'techStack' is private and only accessible within class 'Employee'.

emp1.showTechStack();

/* shorthand initialization
//  */
// class Employee {
//   private techStack: string[] = [];
//   constructor(private employeeId: number, public name: string) {}
// }

// const emp1 = new Employee(1, "tes1");
