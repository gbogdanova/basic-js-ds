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
    this.parentNode = null;
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
        this.parentNode = compareNode;
        compareNode = compareNode.left;
      }
      if(compareNode.data < data){
        if(!compareNode.right){return false}
        this.parentNode = compareNode;
        compareNode = compareNode.right;
      }
    }
  }

  find(data) {
    this.has(data);
    return this.foundNode;
  }

  remove(data) {
    this.has(data);
    
    if(this.foundNode){
      let countChildren = (this.foundNode.left ? 1:0) + (this.foundNode.right ? 1:0) 

      if(countChildren === 0){
        if(!this.parentNode){
          this.treeRoot = null;
        } else {
          if(this.parentNode.right === this.foundNode){
            this.parentNode.right = null;
          } else {
            this.parentNode.left = null;
          }
        }
      }

      if(countChildren === 1){
        if(!this.parentNode){
          this.treeRoot = this.foundNode;
        } else {
          if(this.parentNode.right  === this.foundNode){
            this.parentNode.right = this.foundNode.right || this.foundNode.left;
          } else{
            this.parentNode.left = this.foundNode.right || this.foundNode.left;
          }
        }
      }

      if(countChildren === 2){
        let targetNode = this.foundNode.right;
        let targetParent = this.foundNode;

        while(targetNode.left !== null){
          targetNode = targetNode.left;
          targetParent = targetNode;
        }

        this.foundNode.data = targetNode.data;
        if (targetParent.right === targetNode) {
          targetParent.right = targetNode.right;
        } else {
          targetParent.left = targetNode.right;
        }
        
      }
    }
   
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