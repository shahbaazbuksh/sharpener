const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to my node JS project</h1></body>");
    res.write("</html>");
    res.end();
  }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>My First Page</title></head>");
  // res.write("<body><h1>Hello from my node JS server</h1></body>");
  // res.write("</html>");
  // res.end();
});

server.listen(3000);
