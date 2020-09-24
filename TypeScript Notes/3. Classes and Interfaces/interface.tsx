// ! Go to Basics section to understand the interfaces

interface person {
  name: string;
  motto(msg: string): void;
}

let sam: person = {
  name: "sam",
  motto(msg) {
    console.log(`${name}'s motto is ${msg}`);
  },
};


sam.motto('YOLO');