// ! Intersection Types

type RAM = {
    processor: string;
    ramType: string;
  };
  
  type Monitor = {
    size: string;
    isLed: boolean;
  };
  
  type Keyboard = {
    keyboardType: string;
  };
  
  type Mouse = {
    isWired?: boolean;
    isBlueTooth?: boolean;
  };
  
  type PC = RAM & Monitor & Keyboard & Mouse;
  
  const samsungPC: PC = {
    processor: "nvidia",
    ramType: "dynamic",
    size: "22inch",
    isLed: true,
    keyboardType: "chiclet",
    isWired: true,
  };
  
  // ------------------------------------
  
  type One = string | number;
  type Two = number | boolean;
  
  type intersected = One & Two; //type intersected = number
  