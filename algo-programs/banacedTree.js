funtcion binaryTreeNode(data,left,right){
  this.data = data;
  this.left=left;
  this.right=right;
}

function minDepth(node){
  if(typeof(node) === undefined) return node;
  return Math.min(minDepth(node.left),minDepth(node.right))
}

function maxDepth(node){
  if(typeof(node) === undefined) return node
    return Math.max(maxDepth(node.left),maxDepth(node.right))
}

function isBinaryTreeBalanced(root) {
  if (typeof root === 'undefined') {
    return undefined;
  }
  return maxDepth(root) - minDepth(root) <= 1;
}
