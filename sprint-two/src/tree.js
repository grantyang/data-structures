var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let children = this.children;
  for (let i = 0; i <children.length; i++) {
    let child = children[i]
    if(child.value === target) return true
    if (child.children.length > 0){
      if (child.contains(target)) return true;
    }
  }
  return false;
  
};









/*
 * Complexity: What is the time complexity of the above functions?
 */
