class staticA {
    static var1: number = 23;
  
    static addFn(n1: number, n2: number): number {
      return n1 + n2;
    }
  
    constructor(public msg: string) {
      console.log(this.msg);
    }
  }
  
  const ob1 = new staticA('Hello how are you...');
  
  console.log('accessing static var', staticA.var1);
  console.log('accessing static method', staticA.addFn(3,3))