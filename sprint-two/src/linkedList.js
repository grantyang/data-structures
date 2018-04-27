var LinkedList = function() { 
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.tail.next = newNode;
      list.tail = newNode;
      
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.head) {
      newNode.next = list.head;
      list.head = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current.value !== target) {
      if (current === list.tail) {
        return false;
      }
      current = current.next;
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
