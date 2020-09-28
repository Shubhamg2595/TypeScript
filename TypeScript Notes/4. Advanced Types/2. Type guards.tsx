// ! Type Guards in functions : basically how to use 'in' operator
class Car {
    drive() {
      console.log("Driving a car");
    }
  }
  
  class Truck {
    drive() {
      console.log("Driving a Truck");
    }
  
    loadCargo() {
      console.log("loading cargo in the truck");
    }
  }
  
  type Vehicle = Car | Truck;
  
  const v1 = new Car();
  const v2 = new Truck();
  
  function useVehicle(vehicle: Vehicle) {
    // if ("loadCargo" in vehicle) {
        if(vehicle instanceof Truck) {
      vehicle.loadCargo();
    }
    vehicle.drive();
  }
  
  useVehicle(v1);
  useVehicle(v2);