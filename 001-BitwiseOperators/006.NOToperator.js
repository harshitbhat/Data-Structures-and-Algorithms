/*

The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). Numbers with more than 32 bits get their most significant bits discarded

Bitwise NOTing any number x yields -(x + 1). For example, ~-5 yields 4.

Note that due to using 32-bit representation for numbers both ~-1 and ~4294967295 (232-1) results in 0.

*/

for (let i = -6; i <= 6; i++) {
  console.log(`~${i} = ${~i}`);
}
