// ! The 'Any' Type

// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);

// console.log(coordinates); //{x:10,y:10}

//  when typescript displays type of any variable as 'any' it means it has no idea what type of value is being returned.

// it is better to avoid any variable with 'any' type.

// ? fixing the any type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); //{x:10,y:10}
