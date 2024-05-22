const express = require('express');
const app = express();

// Middleware function for logging requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} : ${req.method} ${req.url}`);
    next();
});

// Middleware function to set a custom response header
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'Hello from my custom middleware');
    next();
});

// app.use((req, res, next) => {
//     res.send(`${new Date().toISOString()} : ${req.method} ${req.url}`)
//     next();
// });

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
