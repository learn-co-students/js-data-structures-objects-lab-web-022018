// Write your solution in this file!
let driver = {}


//
// updateDriverWithKeyAndValue()- this function should take in a driver object,
//   a key and a value.
//   The function should not mutate the driver parameter and
//   return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value})
}
// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same
//  as updateDriverWithKeyAndValue() but
//   it should mutate the driver parameter passed in.

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  return Object.assign(driver,{[key]:value})
}
// deleteFromDriverByKey() - this function should
//   take in a driver object and a key.
//   It should delete the key/value pair for the key that was passed in
//     from the driver object.
//     This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver,key){
  // let newObj = driver
  // delete newObj[key]     //this modify original
  let newObj = {}
  Object.assign(newObj,driver)
  delete newObj[key]
  return newObj
}

// destructivelyDeleteFromDriverByKey() - this function should work the same
//   as deleteFromDriverByKey() but it should mutate the driver passed in.


function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
