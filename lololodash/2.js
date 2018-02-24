
var _ = require('lodash');

var worker = function(sales) {
  return  _.sortBy(sales, (o) => {
    return -o.quantity;
  });
};

module.exports = worker;
