 

var HashTable = function() {
  this._limit = 8;
  // this._storage = LimitedArray(this._limit);
  this.collision = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.collision[index] === undefined) {
    this.collision[index] = [];
    this.collision[index].push([k, v]);  
  } else if (checkIfKey(this.collision[index], k)) {
    for (var tuple of this.collision[index]) {
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    }
  } else {
    this.collision[index].push([k, v]);  
  } 
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.collision[index];
  for (var tuple of bucket) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  // return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.collision[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  // this._storage.set(index, undefined);
};

HashTable.prototype.count = function() {
  var count = 0;
  console.log(this.collision);
  for (var bucket of this.collision) {
    if (bucket) {
      count += bucket.length;
    }
  }
  return count;
};

var checkIfKey = function (arr, k) {
  let position = false;
  arr.forEach(function(tuple) {
    if (tuple[0] === k) {
      position = true;
    }
  });
  return position;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */