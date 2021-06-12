// Naive Solution
function maxProfit1(prices, start, end) {
  if (end <= start) {
    return 0;
  }
  let profit = 0;

  for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (prices[j] > prices[i]) {
        let curProfit =
          prices[j] -
          prices[i] +
          maxProfit1(prices, start, i - 1) +
          maxProfit1(prices, j + 1, end);
        profit = Math.max(profit, curProfit);
      }
    }
  }
  return profit;
}

// Better Solution - We know prices in advance
function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

const arr1 = [1, 5, 3, 8, 12];
const arr2 = [30, 20, 10];
const arr3 = [10, 20, 30];
const arr4 = [1, 5, 3, 1, 2, 8];

console.log(maxProfit(arr1, 0, arr1.length - 1));
console.log(maxProfit(arr2, 0, arr2.length - 1));
console.log(maxProfit(arr3, 0, arr3.length - 1));
console.log(maxProfit(arr4, 0, arr4.length - 1));
