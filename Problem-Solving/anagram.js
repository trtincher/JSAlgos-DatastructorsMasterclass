//useing object counters
//make funtion that takes two strings
//make two counter variables that are objects
//iterate through first string
//for each item add key of item and count +1
//do same for secound string
//iterate through keys of first counter object and check against the secound counter object
//values should be the same
//if value not equal then return false
//return true

function validAnagram(str1, str2) {
  // if lengths don't match cannot be anagram
  if (str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let char of str1) counter1[char] = (counter1[char] || 0) + 1;
  for (let char of str2) counter2[char] = (counter2[char] || 0) + 1;

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("textwistime", "timewistext")); //true
