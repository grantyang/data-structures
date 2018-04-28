var HashTable = function() {
  this._limit = 8;
  // this._storage = LimitedArray(this._limit);
  this.collision = [];
  this.length = 0;
};

HashTable.prototype.insert = function(k, v) {
  //insert entry into hashtable, resizing if necessary
  if (this.length >= this._limit * 0.75) {
    this._limit = this._limit * 2;
    this.resize();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.collision[index] === undefined) {
    this.collision[index] = [];
    this.collision[index].push([k, v]);
    this.length++;
  } else if (checkIfKey(this.collision[index], k)) {
    for (var tuple of this.collision[index]) {
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    }
  } else {
    this.collision[index].push([k, v]);
    this.length++;
  }
};

HashTable.prototype.retrieve = function(k) {
  //get a value from hashtable for a given key
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
  //remove entry from hashtable, resize if necessary
  if (this.length <= this._limit * 0.25) {
    this._limit = this._limit / 2;
    this.resize();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.collision[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this.length--;
    }
  }
  // this._storage.set(index, undefined);
};

HashTable.prototype.count = function() {
  //count number of entries
  var count = 0;
  for (var bucket of this.collision) {
    if (bucket) {
      count += bucket.length;
    }
  }
  return count;
};

HashTable.prototype.resize = function() {
  //reset properties and rehash all existing tuples
  let tuples = _.flatten(this.collision, true);
  this.length = 0;
  this.collision = [];
  for (var tuple of tuples) {
    if (tuple !== undefined) {
      this.insert(tuple[0], tuple[1]);
    }
  }
};

var checkIfKey = function(arr, k) {
  //check if a key exists for a given bucket
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
