/*

XOR(^) will give a set bit if both bits are different and will give 0 if both are same.
The symbol and working is same as that in C++

3 = 0011
6 = 0110

(3 ^ 6) = (0101) = 5

Some properties of XOR:
    x ^ 0 = x
    x ^ y = y ^ x
    x ^ (y ^ z) = (x ^ y) ^ z
    x ^ x = 0

*/

console.log(3 ^ 6);
