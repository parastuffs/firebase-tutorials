const express = require('express'); // Import the express module
const app = express(); // Create an express app
const { readFile } = require('fs').promises; // Async and non-blocking. readFile returns a promise when called.

// '/' is the URL the user navigates to, then we have the callback.
// 'Request' is the user's incoming data. We don't do anything with it in this example.
// 'Response' is our outgoing data
app.get('/', async (request, response) => {

    response.send( await readFile('./index.html', 'utf8') );

});

// We tell the app to listen to requests.
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))