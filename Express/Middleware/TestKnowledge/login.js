const express = require("express");
const app = express();
const fs = require("fs");

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Sample hardcoded database for user authentication
const users = [
  { email: "user1@example.com", password: "1234", name: "User One" },
  { email: "user2@example.com", password: "password2", name: "User Two" },
  // Add more users as needed
];

// Authentication middleware function
const authenticateUser = (req, res, next) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    req.user = user; // Attach the user object to the request for later use
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).send("Unauthorized"); // Send 401 Unauthorized status if authentication fails
  }
};

// Middleware to log form data
const logFormData = (req, res, next) => {
  const formData = req.body;
  fs.appendFile('formData.json', JSON.stringify(formData) + '\n', (err) => {
    if (err) {
      console.error('Error saving form data:', err);
      res.status(500).send('Error saving form data');
    } else {
      console.log('Form data saved successfully');
      next();
    }
  });
};

app.get("/", (req, res) => {
  console.log('homepage');
  res.send("Welcome to home page");
});

// Serving the HTML login form
app.get("/login", (req, res) => {
  console.log("this is login page");
  res.sendFile(__dirname + "/login.html");
});

// Handling form submissions and authentication
app.post("/profile", authenticateUser, logFormData, (req, res) => {
  console.log(req.body);
  const { name } = req.user;

  res.send(`Welcome, ${name}! `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
