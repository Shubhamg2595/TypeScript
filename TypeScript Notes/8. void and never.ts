// ? void and never


const logger = (message: string): void => {
    //  void describes that fn will return nothing
    console.log(message);
}


const throwError = (message:string): never => {
    //  we annotate a function with never only when we truly never expect a function to return anything
    throw new Error(message);
}