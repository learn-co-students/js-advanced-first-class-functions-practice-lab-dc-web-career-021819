// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(element, index, array) { console.log(element.name) });
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(element, index, array) {
    if(element.hometown === location){
     console.log(element.name)
    }
  });
}

function driversByRevenue(drivers){
  return [...drivers].sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers){
  return [...drivers].sort( (a, b) => a.name.localeCompare(b.name) )
}

function totalRevenue(drivers){
  return [...drivers].reduce( ((totalRev, driver) => totalRev + driver.revenue), 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
