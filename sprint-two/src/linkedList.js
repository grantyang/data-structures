var LinkedList = function() { 
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
      
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    if (oldHead.next) {
      oldHead.next.prev = null;
      list.head = oldHead.next;
    } else {
      list.head = null;
      list.tail = null;
    }
    return oldHead.value;
  };
  
  list.removeTail = function() {
    var oldTail = list.tail;
    if (oldTail.prev) {
      oldTail.prev.next = null;
      list.tail = oldTail.prev;
    } else {
      list.head = null;
      list.tail = null;
    }
    return oldTail.value;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
