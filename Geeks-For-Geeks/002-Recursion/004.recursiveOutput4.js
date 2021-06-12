// Function prints the binary representation of a number

function fun(n) {
  if (n == 0) {
    return;
  }
  fun(parseInt(n / 2));
  console.log(n % 2);
}

fun(4);
