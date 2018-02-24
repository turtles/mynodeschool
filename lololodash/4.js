var _ = require('lodash');

var worker = function(towns)
{
  var results = {
    hot: [],
    warm: []
  };
  _.forOwn(towns, (temps, town)=> {
    if (_.every(temps, (temp) => {return temp > 19;})) {
      results.hot.push(town);
    }
    else if (_.some(temps, (temp)=>{ return temp > 19; })) {
      results.warm.push(town);
    }
  });

  return results;
}

module.exports = worker;
