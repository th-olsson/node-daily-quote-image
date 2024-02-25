const fs = require('fs');
const textToImage = require('text-to-image');
const quotes = require("./quotes.json");

const height = 480;
const width = 800;
const path = './image.png'

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/** Updates image with a random quote  */
function updateImage() {
  const quote = getRandomQuote()
  const { text, author } = quote;

  const dataUri = textToImage.generateSync(`${text} \n \n ${author}`,
    // Image options
    {
      customHeight: height,
      maxWidth: width,
      bgColor: 'transparent',
      textColor: '#000000',
      fontSize: 40,
      lineHeight: 50,
      fontWeight: 600,
      margin: 16,
      textAlign: 'center',
      verticalAlign: 'center',
    });

  fs.writeFileSync(path, Buffer.from(dataUri.split(',')[1], 'base64'));
}

module.exports = {
  updateImage,
};