class NotFoundError {
  /* NotFoundError class is defined with a constructor that takes a message parameter. 
  It sets the message property of the NotFoundError instance to the provided message 
  value and assigns the status property to 404. */
  constructor(message) {
    this.message = message;
    this.status = 404;
  }
}

/* The NotFoundError class is then exported using exports.NotFoundError, which 
suggests that this code is intended for use in a Node.js environment. */
exports.NotFoundError = NotFoundError;
