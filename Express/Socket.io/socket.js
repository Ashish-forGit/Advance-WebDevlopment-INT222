const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const { log } = require("console");

const app = express();
const port = 3000;

// server variable holds the instance returned by calling server
const server = app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

//  it creats a socket.io instance attached to the Express
//  server and serves static files(like html ,css, js ) located in 'public' dir
const io = socketIO(server);

app.use(express.static(path.join(__dirname, "public")));
// console.log(__dirname);
io.on("connection", (socket) => {
  console.log("A user connected");
  // listens for 'chat message' events from clients
  socket.on("chat message", (msg) => {
    //broadcast the messsage to all clients in the same rooom

    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
