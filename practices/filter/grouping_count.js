'use strict';

function grouping_count(collection) {
  let result = {};
  collection.forEach(element => {
    result[element] = result[element] ? result[element]+1 : 1;
  });
  return result;
  //implement here
}

module.exports = grouping_count;
