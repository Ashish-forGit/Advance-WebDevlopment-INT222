const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  if (req.url === "/file1.html") {
    // Read the content of file1.html
    fs.readFile("file1.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found!");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        // console.log(req.url);
      }
    });
  } else if (req.url === "/file2.html") {
    fs.readFile("file2.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found!");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/file3.html") {
    res.write(fs.readFileSync("./file3.html"));

    res.end();
  } else if (req.url === "/form") {
    res.write(fs.readFileSync("./formValid.html"));
    res.end();
  } else {
    res.writeHead(404);
    res.end("Invalid request of user");
  }
});

server.listen(2000, () => {
  console.log("Server is running on port 2000");
});
