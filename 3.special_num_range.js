function countSpecialNumbers(start, end) {
  let count = 0;
  for (let num = start; num <= end; num++) {
    if (num % 3 !== 0 && num % 5 !== 0) {
      continue;
    }
    if (num.toString().includes('7')) {
      continue;
    }
    count++;
  }
  return count;
}
