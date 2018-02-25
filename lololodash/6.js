var _ = require('lodash');

module.exports = function(comments) {
  // Group comments by username
  comments = _.groupBy(comments, 'username');

  // Get size of each
  comments= _.map(comments, (comment) => {
    var size = _.size(comment);
    return {
      username: comment[0].username,
      comment_count: size};
  });

  // Order by comment count descending
  comments = _.sortBy(comments, o=>-o.comment_count);

  return comments;
};
