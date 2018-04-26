 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.collision = {
  };
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.collision[index] === undefined) {
    this.collision[index] = {};
    this.collision[index][k] = v;  
    this._storage.set(index, v);
  } else {
    this.collision[index][k] = v;  
    this._storage.set(index, v);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this.collision[index][k];
  // return this._storage.get(index);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this.collision[index][k];
  // this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


