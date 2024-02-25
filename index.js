const http = require('node:http');
const cron = require('node-cron');
const { updateImage } = require("./utils");


const server = http.createServer();
const port = 3737;

// Updates image 06:00 each day 
cron.schedule('0 6 * * *', () => {
  updateImage();
});

server.listen(port, () => console.log(`Listening on port ${port}`));