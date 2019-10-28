function updateDriverWithKeyAndValue(obj,key,value)  {
return Object.assign({} , obj, {[key]: value });
}
const driver = {nationality : "indian"};

const newDriver = updateDriverWithKeyAndValue(driver,'nationality','colombian');




function destructivelyUpdateDriverWithKeyAndValue(obj,key,value) {
  return Object.assign( obj, {[key]: value });
}


function deleteFromDriverByKey(obj,key){
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}



function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
