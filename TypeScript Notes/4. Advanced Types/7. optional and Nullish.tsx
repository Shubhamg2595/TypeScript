// ! optional Chaining  '?'  
// ! NUllish Coalescing '??


const userObj = {
    name: "shubham",
    address: {
      city: "SG",
      pincode:"201005"
    },
    contactNum: null,
  }
  
  console.log(userObj?.address?.city);
  const contactNumber = userObj.contactNum ?? '00000000';
  console.log(contactNumber)
  