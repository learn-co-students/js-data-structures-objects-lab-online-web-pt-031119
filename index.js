// Write your solution in this file!
// let driver = {oldMan: "jeremy",smarOne: "james", shortOne: "richard"}
let  driver = {};

function updateDriverWithKeyAndValue(driver,key,value) {
//   const newDriver = {...driver};
//   newDriver[quiteOne] = "stig";
//   return newDriver;

return Object.assign({}, driver, { [key]: value });

  // return Object.assign(driver, { quiteOne:"stig"} ); //this is distructive 
  // return Object.assign({}, driver, { quiteOne:"stig"} );  this is non-distructive 
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key, value) {
  // driver[oldMan] = "joe";
  // return driver
  driver[key] = value;
  return driver;

}


// function deleteFromDriverBykey(driver, key)  {
//   // const newDriver = Object.assign({}, driver);
//   // delete newDriver[oldMan];
//   // return newDriver;
//   const newObj = Object.assign({}, driver);
//   delete newObj[key];
//   return newObj;
// }

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // delete driver[oldMan];
  // return driver;
 delete driver[key];
  return driver;
  
}




