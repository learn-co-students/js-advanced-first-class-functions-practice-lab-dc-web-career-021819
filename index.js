// Code your solution in this file!
const logDriverNames = function(arr){
  arr.forEach(function(n){console.log(n.name);});
}

const logDriversByHometown = function(arr, target){
  logDriverNames(arr.filter(function(n){
    return n.hometown === target;
  }))
}

// const logDriversByHometown = function (drivers, hometown) {
//   drivers.forEach(function (driver) {
//     if (driver.hometown === hometown) {
//       console.log(driver.name);
//     }
//   });
// };

// const driversByRevenue = function(arr){
//   let newArr = [...arr]
//   return newArr.sort((a, b) => (a.revenue > b.revenue) ? 1 : ((b.revenue > a.revenue) ? -1 : 0));
// }

const driversByRevenue = function(arr){
  let newArr = [...arr]
  return newArr.sort((a, b) => a.revenue - b.revenue);
}

// const driversByRevenue = function (drivers) {
//   return drivers.slice().sort(function (driverOne, driverTwo) {
//     return driverOne.revenue - driverTwo.revenue;
//   });
// };

const driversByName = function(arr){
  let newArr = [...arr]
  return newArr.sort((a, b) => a.name.localeCompare(b.name));
}

// const driversByName = function(drivers){
//   return drivers.slice().sort(function(driverOne, driverTwo){
//     return driverOne.name.localeCompare(driverTwo.name);
//   });
// };

const totalRevenue = function(arr){
  return arr.reduce(((a, b) => a + b.revenue), 0)
}

const averageRevenue = function(arr){
  return totalRevenue(arr)/arr.length
}
