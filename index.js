const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Shahbaaz");
});

server.listen(4000);
