const deepmerge = require("deepmerge");

function merge(...objects) {
  return objects.reduce((merged, current) => {
    return mergeTwo(merged, current);
  }, {})
}

function mergeTwo(object1, object2) {
  return deepmerge(object1, object2)
}

module.exports = {
  merge,
  mergeTwo
}