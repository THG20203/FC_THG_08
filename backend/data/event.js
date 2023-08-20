const { readData, writeData } = require("./util");

// UUID IMPORTS
/* imports the v4 function from the uuid package and assigns it to the varialbes 
generateId. The uuid package is commonly used for generating universally unique 
identifiers (UUID's) */
const { v4: generateId } = require("uuid");

// CLASS IMPORT FROM ERRORS.JS
/* imports the NotFoundError class from a file located at ../util/errors relative 
to the current module. */
const { NotFoundError } = require("../util/errors");

/* getAll function is defined as an asynchronous function using the 
async keyword */
async function getAll() {
  /* awaits the readData function to retrieve data from a file. The result 
  of readData() is stored in the storedData variable.*/
  const storedData = await readData();
  /* It checks if the storedData object has an events property using 
  storedData.events. */
  if (!storedData.events) {
    /* If the events property does not exist or is falsy, it throws a 
    NotFoundError with an appropriate error message. NotFoundError imported
    from "../util/errors" "Could not find any events." */
    throw new NotFoundError("Could not find any events.");
  }
  /* If the events property exists and is truthy, it returns the value 
  of storedData.events. */
  return storedData.events;
}

/* defines an asynchronous function called get. This function 
takes an id parameter and uses the readData function to read 
data from a file. */
/* Then performs checks to find the event with the specified id 
within the storedData. If the event is not found, it throws a 
NotFoundError with an appropriate error message. Otherwise, it 
returns the found event. */
/* id represents the ID of the evnet you want to retrieve */
async function get(id) {
  /* awaits the readData function to retrieve data from a file. The result 
  of readData() is stored in the storedData variable.*/
  const storedData = await readData();
  /* It checks if storedData.events does not exist or has a length of zero. 
  If so, it throws a NotFoundError with an appropriate error message. */
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  /* Function  uses the Array.prototype.find method to search for an 
  event within storedData.events that matches the specified id. */
  const event = storedData.events.find((ev) => ev.id === id);
  if (!event) {
    /* If no event is found, it throws a NotFoundError with an 
    appropriate error message. */
    throw new NotFoundError("Could not find event for id " + id);
  }

  /* If an event is found, it is stored in the event variable. */
  return event;
}

/* asynchronous function called add. This function takes a data parameter. */
async function add(data) {
  /* awaits the readData function to retrieve data from a file. The result 
  of readData() is stored in the storedData variable.*/
  const storedData = await readData();
  /* It adds a new event to the beginning of the storedData.events array. 
  The new event is created by spreading the data object and adding an id 
  property generated using the generateId function */
  storedData.events.unshift({ ...data, id: generateId() });
  /* After modifying the storedData, it uses the writeData function to 
  write the updated data back to the file and awaits the operation to 
  complete. */
  await writeData(storedData);
}

/* The given code snippet shows an asynchronous function called 
replace, which takes an id and data as parameters. */
async function replace(id, data) {
  /* awaits the readData function to retrieve data from a file. The result 
  of readData() is stored in the storedData variable.*/
  const storedData = await readData();
  /* If the retrieved storedData does not have an events property or if 
  the events array is empty, it throws a NotFoundError with the message 
  "Could not find any events." */
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  /* If there are events in the storedData, it searches for an event 
  with a matching id in the events array using the findIndex method. */
  const index = storedData.events.findIndex((ev) => ev.id === id);
  /* If the index is less than 0, it means that no event was found with the 
  given id. */
  if (index < 0) {
    /* In this case, it throws a NotFoundError with the message 
    "Could not find event for id " concatenated with the id. */
    throw new NotFoundError("Could not find event for id " + id);
  }

  /* If an event with the given id is found, it replaces the event at 
  that index in the events array with a new object that combines the 
  existing event's id with the properties from the data parameter. 
  This is achieved by spreading data into a new object and explicitly 
  setting the id property. */
  storedData.events[index] = { ...data, id };

  /* Finally, the modified storedData is asynchronously written back 
  using the writeData function, which likely updates the stored data 
  in the database or any other relevant storage. */
  await writeData(storedData);
}

/* Asynchronous function called remove, which takes an id as a 
parameter. */
async function remove(id) {
  /* awaits the readData function to retrieve data from a file. The result 
  of readData() is stored in the storedData variable.*/
  const storedData = await readData();
  /* It then filters the events array in storedData using the filter method. 
  It keeps only the events whose id does not match the provided id. */
  /* The filtered events are stored in the updatedData constant. */
  const updatedData = storedData.events.filter((ev) => ev.id !== id);
  /* Finally, it asynchronously writes the updated data by calling the
   writeData function with an object containing the events property 
   set to the updatedData. */
  await writeData({ events: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
