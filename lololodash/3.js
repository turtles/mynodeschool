var _ = require('lodash');

var worker = function(cities) {
  return _.forEach(cities, (city) => {
    city.size = getCitySize(city.population);
  })
}

var getCitySize = function(population) {
  if (population > 1) return 'big';
  else if (population > 0.5) return 'med';
  return 'small';
}

module.exports = worker;
