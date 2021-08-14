const StreamArray = require("stream-json/streamers/StreamArray");
const fs = require("fs");

const NUM_WORDS = 58110;
const getRandomWord = () => Math.round(Math.random() * NUM_WORDS);
const wordsDB = new Array(58110);
let wordCount = 0;
const jsonStream = StreamArray.withParser();

fs.createReadStream("words.json").pipe(jsonStream.input);
jsonStream.on("data", (word) => wordsDB[wordCount++] = word.value);

jsonStream.on("end", () => {
});

function getWords() {
  return [
    wordsDB[getRandomWord()],
    wordsDB[getRandomWord()],
    wordsDB[getRandomWord()],
    wordsDB[getRandomWord()],
  ].join(" ");
}

module.exports = getWords;
