/* 
二叉树的先序和后序、中序最大的区别在于，先序只是不断的推进，而不需要回溯。但是后序和中序的回溯和推进交叉在一起，这就增加了复杂度。
唯一的难点在于，不是同时入栈根和右子节点，而只入栈根。这一点对于后序也是同理。

*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let btStack = []; // backtracking
  let res = [];
  let value;
  while (root !== null || btStack.length > 0) {
    if (root !== null) {
      btStack.push(root);
      root = root.left;
    } else {
      ({ val: value, right: root } = btStack.pop());
      res.push(value);
    }
  }
  return res;
};
