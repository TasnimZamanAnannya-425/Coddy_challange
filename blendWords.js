
function blendWords(word1, word2) {
  // If both words are empty
  if (!word1 && !word2) return "";

  // If only one word is empty
  if (!word1) return word2;
  if (!word2) return word1;

  // If the last letter of word1 and first letter of word2 are the same
  if (word1[word1.length - 1] === word2[0]) {
    return word1 + word2.slice(1);
  }

  // Otherwise, concatenate both normally
  return word1 + word2;
}
