const express = require("express");
const app = express();
const PORT = 3000;

function getFileData(response) {
  // fs.readFileSync() reads a file. The first parameter is the path to the file, and the second is the encoding.
  try {
    const data = fs.readFileSync("locations.json", "utf8");
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
    return;
  }
}

function setFileData(fileData, response) {
  // fs.writeFile() writes to a file. The first parameter is the path to the file, the second is the data to write,
  // and the third is a callback function that takes one parameter: error.
  fs.writeFile("locations.json", JSON.stringify(fileData), (error) => {
    if (error) {
      console.error(error);
      response.sendStatus(500);
      return;
    }

    response.sendStatus(200);
  });
}

// Creates a GET endpoint at the root URL that returns a string
app.get("/", function (request, response) {
  response.send("Hello, world!");
});

// Starts the server on port 3000
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});
