// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location)
      console.log(driver.name)
  })
}

// Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver_one, driver_two) {
      return driver_one.revenue - driver_two.revenue;
  });
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

// guestList.sort(function (a, b) {
//   return a.localeCompare(b);
// });
const driversByName = function(drivers) {
  return drivers.slice().sort(function (driver_one, driver_two) {
    return driver_one.name.localeCompare(driver_two.name);
  });
}


// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.

// const stringify = function (agg, el, i, arr) {
//   let stringifiedElement = el.name + ' is $' + el.price + '. ';
//
//   if (i === arr.length - 1) {
//     stringifiedElement += 'The total price is $' + (agg.totalPrice + el.price) + '.';
//
//     return agg.string + stringifiedElement;
//   }
//
//   return {
//     string: agg.string + stringifiedElement,
//     totalPrice: agg.totalPrice + el.price
//   };
// };
//
// products.reduce(stringify, { string: '', totalPrice: 0 });
//
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
