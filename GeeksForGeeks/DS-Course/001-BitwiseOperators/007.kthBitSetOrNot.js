/*

Method 1 - Left Shift Operator
 - Take a number which has only kth bit as set, rest as 0
 - (&) this number with the given number
 - If result is != 0, this means that the bit in original number was set
 - else it means that the bit in original number was not set.

*/

const isKthBitSetLS = (n) => {
  return n & (1 << k) ? true : false;
};

/*
Method 2 - Right Shift Operator
 - Right shift the kth bit in the given number to right most bit
 - (&) this number with 1
 - If the result is 0, it means that the bit was not set

*/

const isKthBitSetRS = (n) => {
  return 1 & (n >> k) ? true : false;
};
