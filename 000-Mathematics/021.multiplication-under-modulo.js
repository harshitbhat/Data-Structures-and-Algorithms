const multiplicationUnderModulo = (a, b) => {
  const MOD = 10 ** 9 + 7;
  return (((a % MOD) * b) % MOD) % MOD;
};
