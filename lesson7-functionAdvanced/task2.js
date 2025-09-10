function countNumber(num) {
  if (num <= 0) {
    console.log(num);
    countNumber(++num);
  }
}
countNumber(-10);
