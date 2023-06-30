/* isValidText(value): This function checks whether the
provided value is a non-empty string after trimming 
leading and trailing whitespace. It returns true 
if the value is a non-empty string and false otherwise. */
function isValidText(value) {
  return value && value.trim().length > 0;
}

/* isValidDate(value): This function attempts to create a 
Date object from the provided value using the Date 
constructor. If the resulting date is not "Invalid Date," 
it means the provided value is a valid date string. 
The function returns true in that case, indicating 
that the date is valid. Otherwise, if the resulting 
date is "Invalid Date" or if the value is falsy 
(such as an empty string or null), the function 
returns false. */
function isValidDate(value) {
  const date = new Date(value);
  return value && date !== "Invalid Date";
}

/* isValidImageUrl(value): This function checks whether 
the provided value is a non-empty string and starts 
with "http". If both conditions are true, it implies 
that the value represents a valid URL for an image. 
The function returns true in this case, indicating 
that the image URL is valid. Otherwise, if the 
value is falsy or doesn't start with "http", the 
function returns false. */
function isValidImageUrl(value) {
  return value && value.startsWith("http");
}

exports.isValidText = isValidText;
exports.isValidDate = isValidDate;
exports.isValidImageUrl = isValidImageUrl;
