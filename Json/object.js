const fs = require("fs");
const http = require("http");

const obj = {
  name: "Ashish",
  class: "INT222",
  subjects: ["int219", "int222", "cse225"],
};

// Convert the object to a JSON string
const str = JSON.stringify(obj);

// Write the JSON data to a file named "p.json"
fs.writeFile("p.json", str, () => {
  console.log("File written");
});

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Read the JSON data from "p.json"

  if (req.url === "/") {
    fs.readFile("p.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
      } 
      else {
        res.write(fs.readFileSync("p.json"));
        res.end();
      }
    });
  }else if (req.url === "/package") {
    fs.readFile("p.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
      } 
      else {
        res.write(fs.readFileSync("package.json"));
        res.end();
      }
    });
  }
  else {
    res.writeHead(404);
    res.end("Invalid request of user");
  }
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
