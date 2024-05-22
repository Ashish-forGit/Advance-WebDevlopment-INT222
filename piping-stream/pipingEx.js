const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const writeStream = fs.createWriteStream("example1.txt");
    const abc = "hello i am in example 1";

    writeStream.write(abc);
    writeStream.end(); // End the write stream

    writeStream.on("finish", () => {
      const readStream = fs.createReadStream("example1.txt", "utf-8");
      const writeStream2 = fs.createWriteStream("example2.txt");

      readStream.pipe(writeStream2);

      readStream.on("end", () => {
        fs.readFile("example2.txt", "utf-8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            return;
          }
          const message =
            "File content has been piped from example1.txt to example2.txt and data piped is: ";
          const responseData = message + data;
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(responseData);
        });
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
