// **Group anagrams**

// Given an array of strings `strs`, group the anagrams together. *You can return the answer in any order.*

// An anagram is a word or phrase formed by rearranging the letters
// of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// Highlight each index then compare it the other indexes in the array,
// if they match put it into a new array
// split

function anagram() {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const firstIndex = strs[0];
  const newArray = [];
  for (let i = 0; i < strs.length; i++) {
    if (firstIndex === strs[i]) {
      newArray.push(strs[i]);
    }
  }
  console.log(newArray);
}