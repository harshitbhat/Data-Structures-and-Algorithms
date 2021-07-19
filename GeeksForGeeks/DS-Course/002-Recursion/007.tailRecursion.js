/*
Tail Recursion is when recursive call is the last call, a function has to do.
It is faster than other recursive functions, like fun1 below.
Some normal recursion functions can be converted to Tail Recursion functions (fun2)
But not all.
Quick Sort is tail recursive
Merge Sort is not.
That is why Quick Sort works faster than Merge Sort
*/

function fun1(n) {
  if (n == 0) {
    return;
  }
  fun1(n - 1);
  console.log(n);
}

//fun1(10);

function fun2(n, k) {
  if (n == 0) {
    return;
  }
  console.log(k);
  fun2(n - 1, k + 1);
}

fun2(9, 1);
