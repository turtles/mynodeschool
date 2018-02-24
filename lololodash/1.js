const _ = require('lodash');

module.exports = function(users) {
  var activeUsers = _.filter(users, {active: true});

  return activeUsers;
};
