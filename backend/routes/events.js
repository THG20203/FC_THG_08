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
    res.json({ events: events });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const event = await get(req.params.id);
    res.json({ event: event });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};

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

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the event failed due to validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "Event saved.", event: data });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const data = req.body;

  let errors = {};

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

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Updating the event failed due to validation errors.",
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: "Event updated.", event: data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: "Event deleted." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
