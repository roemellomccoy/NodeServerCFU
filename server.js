const http = require("http");

// YOUR NODE SERVER CODE GOES HERE
const server = http.createServer((request, response) => {
  response.end("Hello Galvanize")
});

const HOST = 3000;
const PORT = "127.0.0.1";

  server.listen(3000, "127.0.0.1", () => {
    console.log(`Server running at ${HOST}:${PORT}`);
  });
