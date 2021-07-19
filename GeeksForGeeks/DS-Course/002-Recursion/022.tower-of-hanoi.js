function towerOfHanoi(n, fromm, to, aux) {
  if (n === 1) {
    console.log(`move disk ${n} from rod ${fromm} to rod ${to}`);
    return;
  }
  towerOfHanoi(n - 1, fromm, aux, to);
  console.log(`move disk ${n} from rod ${fromm} to rod ${to}`);
  towerOfHanoi(n - 1, aux, to, fromm);
}

console.log(towerOfHanoi(3, 'A', 'C', 'B'));
