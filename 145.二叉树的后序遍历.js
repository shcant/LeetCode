/* 
后序遍历的难点在于意识到打印根和打印右节点是衔接的，这样可以解决根节点放回时难以区分的问题。
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let btStack = []; // backtracking
  let res = [];
  let lastNode = null;
  let value;
  while (root != null || btStack.length > 0) {
    if (root != null) {
      btStack.push(root);
      root = root.left;
    } else {
      root = btStack.pop();
      // avoid corner case
      while (
        root !== undefined &&
        (root.right === null || root.right === lastNode)
      ) {
        res.push(root.val);
        lastNode = root;
        root = btStack.pop();
      }
      // root replacement
      if (root !== undefined) {
        btStack.push(root);
        root = root.right;
      }
    }
  }
  return res;
};
