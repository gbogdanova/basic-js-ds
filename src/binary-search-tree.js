const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.treeRoot = null;
    this.foundNode = null;
  }
  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);

    if(!this.treeRoot) {
      this.treeRoot = node;
    } else {
      let compareNode = this.treeRoot;

      while(compareNode){
        if(data > compareNode.data){
          if(!compareNode.right){
            compareNode.right = node;
            break;
          } else {
            compareNode = compareNode.right;
          }
        }
        if(data < compareNode.data){
          if(!compareNode.left){
            compareNode.left = node;
            break;
          } else {
            compareNode = compareNode.left;
          }
        }
      }
      
    }
  }

  has(data) {
    let compareNode = this.treeRoot;
    
    while(compareNode){
      if(compareNode.data === data){
        this.foundNode = compareNode;
        return true;
      }
      if(compareNode.data > data){
        if(!compareNode.left){return false}
        compareNode = compareNode.left;
      }
      if(compareNode.data < data){
        if(!compareNode.right){return false}
        compareNode = compareNode.right;
      }
    }
    return false;
  }

  find(data) {
    this.has(data);
    return this.foundNode;
  }

  remove(data) {
    this.has(data);

    if(this.foundNode){
      if(!this.foundNode.left && this.foundNode.right){
        
      }
    }
    return false;
  }

  min() {
    let minNode = this.treeRoot;
    
    while(minNode.left){
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    let maxNode = this.treeRoot;
    
    while(maxNode.right){
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};