// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const objectNew = {...driver}
  objectNew[key] = value
  return objectNew
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const objectNew = {...driver}
  delete objectNew[key]
  return objectNew
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
