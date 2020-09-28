//  index properties : useFul when we want to create a interface , but we are not aware of the exact properties that we may encounter

interface ErrorContainer {
    // here we assume that all the properties that we will be receiving will have string values
    [prop: string]: string;
  }
  
  const errorObj1: ErrorContainer = {
    errorType: "NULL EXCEPTION",
    errorID: "8123h12381233_NULL",
    // someProp: 21312, // throws as error because we only have support for string values
  }
  