/* 注意使用动态规划优化 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let mt = [1, 1];
    for (let i = 2; i <= n; i++) {
        mt[i] = 0;
        for (let j = 1; j <= i; j++) {
            mt[i] += mt[i - j] * mt[j - 1];
        }
    }
    return mt[n];
};
