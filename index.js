const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) { return Object.assign({}, driver, { [key]: value }); }
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) { driver[key] = value; return driver }
function deleteFromDriverByKey(driver, key) { return delete driver.key }
function destructivelyDeleteFromDriverByKey(driver, key) { return delete driver[key] }
