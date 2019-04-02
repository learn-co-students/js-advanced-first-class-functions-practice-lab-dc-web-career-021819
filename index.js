// Code your solution in this file!
function logDriverNames(driversArray){
  driversArray.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(driversArray, location){
  driversArray.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(driversArray){
  let newDriversArray = [...driversArray]
    newDriversArray.sort(function(a, b){

      if (a.revenue > b.revenue){
        return 1
      }
      if (a.revenue < b.revenue) {
        return -1
      }
      return 0
    })
    return newDriversArray
}

function driversByName(driversArray){
  let newDriversArray = [...driversArray]
  return newDriversArray.sort(function (a, b){
     return a.name.localeCompare(b.name)
  })
}

function totalRevenue(driver){
  let reducer = (a, b) => a + b.revenue
  return driver.reduce(reducer, 0)
}

const averageRevenue = function (driver){
  return totalRevenue(driver)/driver.length
}
