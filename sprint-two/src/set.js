var Set = function() { 
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};


setPrototype.count = function() {
  return Object.keys(this._storage).length;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
