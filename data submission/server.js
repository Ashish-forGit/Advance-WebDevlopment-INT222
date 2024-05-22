// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const path = require("path");
// const { log, Console } = require("console");

// const server = http.createServer((req, res) => {
//   let parsedURl = url.parse(req.url, true);
//   console.log(parsedURl);
//   console.log(parsedURl.query.name);

//   if (parsedURl.pathname == "/") {
//     let readableStream = fs.createReadStream("form.html");
//     readableStream.pipe(res);
//   } else if (parsedURl == "/sublit" && req.method == "GET") {
//     let writeableStream = fs.createWriteStream("forms_data.txt");
//     let query = parsedURl.query;
//     writeableStream.write(query.name + "\n");
//     writeableStream.write(query.email);
//     writeableStream.on("finish", () => {
//       console.log("form has been saved Successfully");
//     });
//     writeableStream.end();
//     res.end("Data has been saved sussessfully");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  console.log(parsedURL);

  if (parsedURL.pathname === "/") {
    let readableStream = fs.createReadStream("form.html");
    readableStream.pipe(res);
  } else if (parsedURL.pathname === "/submit" && req.method === "POST") {
    let writableStream = fs.createWriteStream("forms_data.txt", { flags: "a" });

    let formData = "";
    req.on("data", (chunk) => {
      formData += chunk.toString();
    });

    req.on("end", () => {
      let parsedFormData = new URLSearchParams(formData);
      let name = parsedFormData.get("name");
      let email = parsedFormData.get("email");

      writableStream.write(`Name: ${name}\nEmail: ${email}\n\n`);
      writableStream.end();

      writableStream.on("finish", () => {
        console.log("Form data has been saved successfully");
        res.end("Data has been saved successfully");
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

