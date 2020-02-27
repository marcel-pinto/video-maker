const readline = require("readline-sync");

function start() {
  const content = {};

  content.searchTerm = askAndReturnSearchTerm();
  content.prefixIndex = asAndReturnPrefix()

  function askAndReturnSearchTerm() {
    return readline.question("Type a Wikipedia search term: ");
  };

  function asAndReturnPrefix() {
    const prefixes = ["Who is", "What is", "The history of"]
    const selectPrefixIndex = readline.keyInSelect(prefixes, "Choose one option: ")
    const selectPrefixText = prefixes[selectPrefixIndex]

    return selectPrefixText
  }

  console.log(content);
}

start();
