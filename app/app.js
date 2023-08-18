const express = require("express");
const app = express();
const PORT = 3000;

// Creates a GET endpoint at the root URL that returns a string
app.get("/", function (request, response) {
    response.send("Hello, world!");
});

// Starts the server on port 3000
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}!`);
});
