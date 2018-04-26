var BinarySearchTree = function(value) {
  var root = {};
  root.value = value;
  root.left;
  root.right;
  
  
  root.insert = function(value) {
    if (value > this.value && this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else if (value > this.value && this.right !== undefined) {
      this.right.insert(value);
    } else if (value < this.value && this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else if (value < this.value && this.left !== undefined) {
      this.left.insert(value);
    }
  };
  
  root.contains = function(value) {
    if (value === this.value) {
      return true;
    } else if (value > this.value && this.right !== undefined) {
      return this.right.contains(value);
    } else if (value < this.value && this.left !== undefined) {
      return this.left.contains(value);
    } else {
      return false;
    }
  };
  
  root.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== undefined) { 
      this.left.depthFirstLog(cb);
    }    
    if (this.right !== undefined) { 
      this.right.depthFirstLog(cb);    
    }
  };
  return root;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
