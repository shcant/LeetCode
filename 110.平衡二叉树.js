/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const dfs = root => {
        let depth = 0;
        depth = 1 + dfs(root.left);
        return depth;
    };
};
