const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key] : value });
}    

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key] : value });
}

function deleteFromDriverByKey(driver, key) {
    const driverMinusKey = { ...driver };
    delete driverMinusKey[key];
    return driverMinusKey;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}