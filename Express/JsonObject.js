const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  // Sends a JSON response
  res.json({
    id: 1,
    name: "ashish",
  });
});

app.get("/array", (req, res) => {
    // Sends a JSON response with an array of objects
    res.json([
      { id: 1, name: "ashish" },
      { id: 2, name: "akash" },
      { id: 3, name: "Sohan" }
    ]);
  });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
