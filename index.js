// Write your solution in this file!


const driver = new Object

let updateDriverWithKeyAndValue = (driver, key, value) => {
    
    return Object.assign({},driver,{ [key]: value });
}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

let deleteFromDriverByKey = (driver, key) => {
   const newItem = Object.assign({}, driver) 
   delete newItem[key]

   return newItem

}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}
