var _ = require('lodash');

var worker = function(words)
{
  if (_.isEmpty(words)) return [];

  var result =
    _.chain(words)
      .sortBy()
      .map(o=>o.toUpperCase().concat('CHAINED'))
      .value();
  
  return result;
}

module.exports = worker;
