// ! Discrimated union : cases where we add unique property to each and every interface
interface Car {
    type: "car";
    drivingSpeed: number;
  }
  
  interface Plane {
    type: "plane";
    flyingSpeed: number;
  }
  
  type Vehicle = Car | Plane;
  
  function moveVehicle(vehicle: Vehicle) {
    let speed;
    switch (vehicle.type) {
      case "car":
        speed = vehicle.drivingSpeed;
        break;
      case "plane":
        speed = vehicle.flyingSpeed;
        break;
      default:
        break;
    }
    console.log('moving at speed of',speed,'km/h')
  }
  
  moveVehicle({type:'car',drivingSpeed:45})