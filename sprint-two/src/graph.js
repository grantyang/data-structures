

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var newNode = new GraphNode(value);
  this.storage[value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  var storage = this.storage;
  for (var key in storage){
    if (storage[key].value === value) return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var beginningNode = this.storage[fromNode];
  var endNode = this.storage[toNode];
  if (beginningNode && endNode) {
    return beginningNode.edges[toNode] ? true : false;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var beginningNode = this.storage[fromNode];
  var endNode = this.storage[toNode];
  if (beginningNode && endNode) {
    beginningNode.edges[toNode] = true;
    endNode.edges[fromNode]=true;    
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var beginningNode = this.storage[fromNode];
  var endNode = this.storage[toNode];
    if (beginningNode && endNode) {
    beginningNode.edges[toNode] = false;
    endNode.edges[fromNode] = false;    
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var storage = this.storage
  for (var key in storage) {
    console.log(key)
    cb(key);
  }
  console.log(storage)
};




var GraphNode = function(value) {
  this.value = value;
  this.edges = {};
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


