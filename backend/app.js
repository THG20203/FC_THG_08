/* It imports the necessary dependencies: body-parser and express. */
const bodyParser = require("body-parser");
const express = require("express");

/* It imports the route handler for the /events endpoint from the 
./routes/events file. */
const eventRoutes = require("./routes/events");
const authRoutes = require("./routes/auth");

/*  initializes the Express application by calling express(), 
which creates an instance of the Express application. */
const app = express();

/* It adds middleware to parse JSON requests using body-parser.json(). 
This middleware allows you to access the request body as req.body 
for JSON payloads. */
app.use(bodyParser.json());

/* It adds a middleware to handle CORS (Cross-Origin Resource Sharing) headers. 
This middleware sets the necessary response headers to allow requests from any 
origin (*), with methods GET, POST, PATCH, and DELETE, and allows the 
Content-Type header. */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(authRoutes);

/* It registers the /events route handler using app.use("/events", eventRoutes). 
This means that any requests to the /events endpoint will be handled by the 
eventRoutes router. */
app.use("/events", eventRoutes);

/* It adds an error handling middleware using app.use((error, req, res, next) => { ... }). 
This middleware will be called whenever there is an error passed to the next function 
in any previous middleware or route handler. It sets the response status based on the 
error status (defaulting to 500 if not provided) and sends a JSON response with the 
error message. */
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

/* It starts the server and listens on port 8080 by calling app.listen(8080). */
app.listen(8080);
