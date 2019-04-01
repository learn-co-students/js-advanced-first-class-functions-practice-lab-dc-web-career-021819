// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)})
}
// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
const logDriversByHometown = function(drivers, location){
  logDriverNames(drivers.filter(driver=> driver.hometown === location))
}

// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
const driversByRevenue = function(drivers){
  let newDrivers = drivers.slice()
  return newDrivers.sort(function(a, b){
    return a.revenue - b.revenue;
  })
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
const driversByName = function(drivers){
  let newDrivers = drivers.slice()
  return newDrivers.sort(function(a,b){
    return a.name.localeCompare(b.name)
  });
}

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
const totalRevenue = function(drivers){
  return drivers.reduce(function(total, driver){
    return total += driver.revenue
  }, 0)
}


// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}
