const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Files will be saved in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename to avoid overwriting
  }
});
const upload = multer({ storage: storage });

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
