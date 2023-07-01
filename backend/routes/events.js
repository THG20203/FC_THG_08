/* import the Express framework and assigns it to the variable express. */
const express = require("express");

/* Importing various functions from different files using relative paths. 
The functions being imported are getAll, get, add, replace, and remove 
from the file "../data/event", and isValidText, isValidDate, and 
isValidImageUrl from the file "../util/validation". */
const { getAll, get, add, replace, remove } = require("../data/event");
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require("../util/validation");

/* code creates a new instance of the Express Router by calling express.Router(), 
and assigns it to the variable router. The Router instance will be used to 
define routes and handle HTTP requests for a specific path prefix. */
const router = express.Router();

// GET REQUEST 1:
/* This code defines a GET route for the root URL ("/"). When a GET request is made to 
this URL, the provided callback function is executed. */
/* router.get("/") - This line defines a GET route for the root URL ("/"). It specifies 
that the route should be triggered when a GET request is made to the root URL. */
/* async (req, res, next) => { ... } - This is the callback function that will be executed 
when the route is triggered. It takes three parameters: req (request), res (response), 
and next. This function is marked as async, indicating that it can use await to 
handle asynchronous operations. */
router.get("/", async (req, res, next) => {
  /* try { ... } catch (error) { ... } - This code block is used to handle any errors 
  that may occur during the execution of the route's logic. If an error occurs 
  within the try block, it will be caught and passed to the catch block. */
  try {
    /* const events = await getAll(); - This line calls the getAll function 
    asynchronously. It uses the await keyword to wait for the getAll function 
    to complete before proceeding further. The getAll function is assumed to 
    be an asynchronous function that retrieves events data from a data source. */
    const events = await getAll();
    /* res.json({ events: events }); - This line sends a JSON response containing 
    the events data. The res.json() method serializes the JavaScript object into 
    JSON and sends it as the response to the client */
    res.json({ events: events });
  } catch (error) {
    /* next(error); - If an error occurs within the try block, it is passed to 
    the next function, which is used to pass control to the next error-handling 
    middleware. This is a common pattern in Express to handle errors. */
    next(error);
  }
});

// GET REQUEST 2:
/*  route handler function for a GET request to retrieve an event by its ID. */
/* The route handler is defined using the router.get() method, which 
corresponds to a GET request. */
/* The route pattern is "/:id", indicating that the route expects a parameter 
called "id" in the request URL. */
router.get("/:id", async (req, res, next) => {
  /* Inside the route handler function, there is a try-catch block to handle 
  any potential errors that may occur during the execution of the code. */
  try {
    /* The get() function is called with req.params.id as an argument. 
    It is assumed that there is a function called get() defined elsewhere,
    which retrieves the event based on the provided ID. */
    /* The result of the get() function is stored in the event variable 
    using await since it is an asynchronous operation. */
    const event = await get(req.params.id);
    /* If the retrieval is successful, the server responds with a 
    JSON object containing the event information using res.json(). */
    res.json({ event: event });
    /* In case of an error, the catch block is executed, and the error 
    is passed to the next function, which delegates the error handling
    to the next error-handling middleware or the default Express error 
    handler. */
  } catch (error) {
    next(error);
  }
});

// POST REQUEST code:
/* The code defines a POST route handler for the root path ("/"). 
When a POST request is received, the handler function is executed. */
router.post("/", async (req, res, next) => {
  /* The request body is accessed through req.body, which is assumed 
  to contain data for an event. */
  const data = req.body;

  /* An empty errors object is initialized to store validation errors. */
  let errors = {};

  /* The isValidText, isValidDate, and isValidImageUrl functions are assumed 
  to be defined elsewhere. These functions are used to validate the title,
  description, date, and image fields of the updated event data. If any of 
  these fields fail validation, an error message is added to the errors 
  object. */
  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  /* If there are any errors (i.e., the errors object is not empty), the 
  server responds with a status code of 422 (Unprocessable Entity) and 
  returns a JSON response containing the error message and the errors object. */
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the event failed due to validation errors.",
      errors,
    });
  }

  /* If there are no validation errors, the add function is assumed to be 
  defined elsewhere. It is called with the data object (containing the event details) 
  as an argument. The add function is expected to save the event. */
  try {
    await add(data);
    /* If the event is successfully saved, the server responds with a status code of 201 
    (Created) and returns a JSON response with a success message and the event data. */
    res.status(201).json({ message: "Event saved.", event: data });
  } catch (error) {
    next(error);
  }
});

// PATCH code:
/* The code defines a PATCH route handler with a parameter :id, which represents 
the ID of the event to be updated. */
/* When a PATCH request is received, the handler function is executed. */
router.patch("/:id", async (req, res, next) => {
  /* The request body is accessed through req.body, which is assumed to contain 
  the updated data for the event. */
  const data = req.body;
  /* An empty errors object is initialized to store validation errors. */
  let errors = {};

  /* The isValidText, isValidDate, and isValidImageUrl functions are assumed 
  to be defined elsewhere. These functions are used to validate the title,
  description, date, and image fields of the updated event data. If any of 
  these fields fail validation, an error message is added to the errors 
  object. */
  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  /* If there are any errors (i.e., the errors object is not empty), the 
  server responds with a status code of 422 (Unprocessable Entity) and 
  returns a JSON response containing the error message and the errors 
  object. */
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Updating the event failed due to validation errors.",
      errors,
    });
  }

  /* If there are no validation errors, the replace function is assumed 
  to be defined elsewhere. It is called with the req.params.id (the 
  ID of the event to be updated) and the data object (containing the 
  updated event details) as arguments. The replace function is expected 
  to replace the existing event with the updated data. */
  try {
    await replace(req.params.id, data);
    /* If the event is successfully updated, the server responds with a 
    JSON response containing a success message and the updated event data. */
    res.json({ message: "Event updated.", event: data });
  } catch (error) {
    /* If an error occurs during the update process, the error is 
    passed to the next error-handling middleware using the next function. */
    next(error);
  }
});

// DELETE:
/* The code defines a DELETE route handler with a parameter :id, which 
represents the ID of the event to be deleted. When a DELETE request is 
received, the handler function is executed. */
router.delete("/:id", async (req, res, next) => {
  try {
    /* The remove function is assumed to be defined elsewhere. It is 
    called with req.params.id, which represents the ID of the event 
    to be deleted. The remove function is expected to delete the event 
    with the specified ID. */
    await remove(req.params.id);
    /* If the event is successfully deleted, the server responds
    with a JSON response containing a success message. */
    res.json({ message: "Event deleted." });
  } catch (error) {
    /* If an error occurs during the deletion process, the error 
    is passed to the next error-handling middleware using the 
    next function. */
    next(error);
  }
});

/* The code module.exports = router; is used to export the router instance
so that it can be used in other files or modules. */
/* By adding module.exports = router; at the end of the file, you are
exporting the router object. This allows other modules or files that 
require this module to access and use the defined routes. */
module.exports = router;
