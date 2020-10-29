//O(n^2)
function naiveStringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveStringSearch("omglolomghahalfao", "omg")); //2
console.log(naiveStringSearch("omglolomghahalfao", "lol")); //1
