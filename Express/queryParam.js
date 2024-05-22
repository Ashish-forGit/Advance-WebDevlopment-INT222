const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle GET requests with user information
app.get('/user', (req, res) => {
    const { name, age, email } = req.query;

    // Create a string with user information
    const userInfo = `Name: ${name}, Age: ${age}, Email: ${email}\n`;

    // Append user information to a file named 'user_info.txt'
    fs.appendFile('user_info.txt', userInfo, (err) => {
        if (err) {
            console.error('Error saving user information:', err);
            res.status(500).send('Error saving user information');
        } else {
            console.log('User information saved successfully');
            res.send('User information saved successfully');
        }
    });
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});



