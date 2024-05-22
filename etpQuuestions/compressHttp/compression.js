const connect = require('connect');
const compression = require('compression');

// Create a Connect app
const app = connect();

// Use compression middleware
app.use(compression());

// Define middleware functions
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

function helloWorld(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
}

// Use middleware functions in the app
app.use(logger);
app.use(helloWorld);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
