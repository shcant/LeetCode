/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
  let res = [];
  const dfs = node => {
    if (node === null) {
      return;
    }
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res;
}
