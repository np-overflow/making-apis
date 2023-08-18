const express = require("express");
const app = express();
const PORT = 3000;

// Creates a GET endpoint at the root URL that returns a string
// () => {} is the alternative to function() {}; it's called an arrow function!
app.get("/", (request, response) => {
    response.send("Hello, world!");
});

// Starts the server on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
