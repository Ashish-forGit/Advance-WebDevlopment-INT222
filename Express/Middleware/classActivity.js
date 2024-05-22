const express = require('express');
const fs = require('fs');
const app = express();

// Middleware function for logging requests to a file
app.use((req, res, next) => {
    const logEntry = `${new Date().toISOString()} : ${req.method} ${req.url}\n`;
    fs.appendFile('requestLog.txt', logEntry, (err) => {
        if (err) {
            console.error('Error appending to request log file:', err);
        }
    });
    console.log(logEntry);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
