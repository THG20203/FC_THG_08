// Node.js imports
/* imports the fs module from node.js and specifically the fs promises submodule -> 
sub module provides a promise-based API for file system operations, making it easier 
to work with asynchoronous file operations in JavaScript */
const fs = require("node:fs/promises");

/* Function below defines an asynchronous function called readData. 
This function uses the fs.readFile method from the fs module to read the 
contents of a file named "events.json". The file is expected to be 
in UTF-8 encoding. */
async function readData() {
  /* Within the function, await is used to asynchronously wait for the 
    fs.readFile method to complete reading the events.json file contents. */
  /* The file contents are stored in the data variable. */
  const data = await fs.readFile("events.json", "utf8");
  /* The JSON.parse method is used to parse the data variable, assuming that 
    it contains valid JSON. This converts the JSON string into a JavaScript 
    object. */
  /* The parsed JSON object is returned from the readData function. */
  return JSON.parse(data);
}

/* asynchronous function called writeData. This function takes a data parameter 
and uses the fs.writeFile method from the fs module to write the data as a JSON 
string to a file named "events.json" */
async function writeData(data) {
  /* writeData function is defined as an asynchronous function using the async 
  keyword. */
  /* Data parameter is the input that you want to write to the file. It's
  assumed to be a JavaScript object. fs.writeFile method is used to write the 
  JSON string to the "events.json" file. */
  /* The await keyword is used to wait for the fs.writeFile operation to complete 
  before proceeding. */
  /* Once the write operation is complete, the writeData function will resolve 
  and any code that called this function can continue execution. */
  await fs.writeFile("events.json", JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
