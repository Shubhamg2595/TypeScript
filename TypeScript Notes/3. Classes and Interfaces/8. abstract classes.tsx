abstract class Animal {
    abstract name: string;
    abstract speaks(): void;
  
    public runs() {
      console.log(`${this.name} is running`);
    }
  }
  
  class Dog extends Animal {
      name: string = "wuffy";
      speaks(): void {
          console.log('woof woof')
      }
  }
  
  let d1 = new Dog();
  console.log(d1.name);
  console.log(d1.runs());
  console.log(d1.speaks());
  

  // singleTon and p  rivate COnstructors left