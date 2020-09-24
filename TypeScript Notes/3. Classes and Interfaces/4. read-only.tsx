// shorthand initialization

class Employee {
    private techStack: string[] = [];
    constructor(private readonly employeeId: number, public name: string) {}
  
    udpateEmployee() {
      this.employeeId = 2; //Cannot assign to 'employeeId' because it is a read-only property
    }
  }
  
  const emp1 = new Employee(1, "tes1");
  