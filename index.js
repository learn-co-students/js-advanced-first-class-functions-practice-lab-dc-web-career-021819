// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(a, b) {
    return a + b.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return drivers.reduce(function(a, b) {
    return a + b.revenue
  }, 0)/drivers.length
}
