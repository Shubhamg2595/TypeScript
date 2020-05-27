// Annotation around Objects

const profile = {
    name2: "Shubham",
    age: 20,
    coords: {
      lat: 0,
      lng: 15,
    },
  
    setAge(age: number): void {
      this.age = age;
    },
  };
  
  // const { age }: { age: number } = profile;
  const { age, name2 }: { age: number; name2: string } = profile;
  
  const {
    coords: { lat, lng },
  }: { coords: { lat: number; lng: number } } = profile;
  