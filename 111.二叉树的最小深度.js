/*
这道题翻车了，去看了一下 LeetCode 的评论区，发现果然是题意没细看，藏了一点东西：如果一个节点没有左子树或者右子树，那么那个位置不能算0。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    return root.left || root.right
        ? Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
        : 1;
};
