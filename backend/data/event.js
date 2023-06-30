// Node.js imports
/* imports the fs module from node.js and specifically the fs promises submodule -> 
sub module provides a promise-based API for file system operations, making it easier 
to work with asynchoronous file operations in JavaScript */
const fs = require("node:fs/promises");

// UUID IMPORTS
/* imports the v4 function from the uuid package and assigns it to the varialbes 
generateId. The uuid package is commonly used for generating universally unique 
identifiers (UUID's) */
const { v4: generateId } = require("uuid");

// CLASS IMPORT FROM ERRORS.JS
/* imports the NotFoundError class from a file located at ../util/errors relative 
to the current module. */
const { NotFoundError } = require("../util/errors");

// FUNCTION 1:
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

// FUNCTION 2:
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

//FUNCTION 3:

async function getAll() {
  const storedData = await readData();
  if (!storedData.events) {
    throw new NotFoundError("Could not find any events.");
  }
  return storedData.events;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  const event = storedData.events.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError("Could not find event for id " + id);
  }

  return event;
}

async function add(data) {
  const storedData = await readData();
  storedData.events.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  const index = storedData.events.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError("Could not find event for id " + id);
  }

  storedData.events[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.events.filter((ev) => ev.id !== id);
  await writeData({ events: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
