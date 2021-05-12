/*
Checking the last Bit - Division Method
Time Complexity: O(number of bits)
*/
const countSetBitsDiv = (n) => {
  let ans = 0;
  while (n) {
    if (n % 2 == 1) {
      ans++;
    }
    n = parseInt(n / 2);
  }
};

/*
Checking the last Bit - Bitwise 
Time Complexity: O(number of bits)
*/
const countSetBitsBit = (n) => {
  let ans = 0;
  while (n) {
    ans += n & 1;
    n = n >> 1;
  }
};

/* -------------------------------------------------------------------------- */
/*                       Brian and Kerningham Algorithm                       */
/* -------------------------------------------------------------------------- */
// Time Complexity: O(number of set bits)
// Operation, n = n & (n-1), resets the right most bit in n
const countSetBitsBKA = (n) {
    let ans = 0;
    while(n){
        n = n & (n-1);
        ans++;
    }
    return ans;
}