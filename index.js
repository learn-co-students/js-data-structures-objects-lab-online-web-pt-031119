const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
  //   const newDriver = { ...driver };
  //   newDriver[key] = value;
  //   return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let driverCopy = Object.assign({}, driver);
  delete driverCopy[key];
  return driverCopy;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
