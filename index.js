// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  let output =  {...driver}
  output[key] = value
  return output
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  output = {...driver}
  delete output[key]
  return output
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
