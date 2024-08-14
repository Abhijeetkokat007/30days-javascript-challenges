function knapsack(weights, values, capacity) {
    const n = weights.length;
    
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    const maxValue = dp[n][capacity];
    console.log(`The maximum value that can be obtained is: ${maxValue}`);
    
    return maxValue;
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;
knapsack(weights, values, capacity);
