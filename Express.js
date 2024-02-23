// Import required modules
const express = require('express'); // Import Express.js framework
const bodyParser = require('body-parser'); // Import Body-Parser middleware

// Create an Express application
const app = express();
const port = 3000; // Define the port number on which the server will listen

// Middleware to handle data from HTTP forms
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the main page
app.get('/', (req, res) => {
    res.send('Hello World!'); // Send "Hello World!" as the response when accessing the root URL
});

// Route to handle data from a POST form
app.post('/submit', (req, res) => {
    const name = req.body.name; // Extract the value of the 'name' field from the POST request body
    const email = req.body.email; // Extract the value of the 'email' field from the POST request body
    res.send(`Received form data: Name - ${name}, Email - ${email}`); // Send a response with the received form data
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`); // Display a message indicating that the server is running
});
