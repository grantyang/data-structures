var Tree = function(value) { 
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};

treeMethods.countDirectChildren = function() {
  return this.children.length;
};

treeMethods.contains = function(target) {
  for (let i = 0; i < this.countDirectChildren(); i++) {
    let child = this.children[i];
    if (child.value === target) { return true; }
    if (child.countDirectChildren() > 0) {
      if (child.contains(target)) { return true; }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  let position = this.parent.children.indexOf(this);
  this.parent.children.splice(position, 1);
  this.parent = null;
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
