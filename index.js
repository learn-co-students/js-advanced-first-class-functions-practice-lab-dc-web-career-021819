// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(element => {
    console.log(element.name);
  });
};

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(element => {
    if (element.hometown === town) {
      console.log(element.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  sorted_drivers = [...drivers];
  sorted_drivers.sort((low, high) => {
    return low.revenue - high.revenue;
  });
  return sorted_drivers;
};

const driversByName = function(drivers) {
  sorted_drivers = [...drivers];
  sorted_drivers.sort((low, high) => {
    return low.name.localeCompare(high.name);
  });
  return sorted_drivers;
};

const buildRevenue = function(agg, el) {
  return agg + el.revenue;
};
const totalRevenue = function(drivers) {
  sum = drivers.reduce(buildRevenue, 0);
  return sum;
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
