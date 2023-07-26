console.log(`Hello World!`);
var catName = `pepper`;

function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log(`no match found at`, i);
    }
  }
}
letterFinder(`test`, `t`);
