import React, { useState, useEffect } from "react";

const Countdown = () => {
  /* useState hook to create a state variable timeLeft and a function setTimeLeft to 
  update its value. The initial value of timeLeft is set to the result of the 
  getTimeUntilNextSaturday3PM function, which calculates the time remaining until 
  the next Saturday at 3 PM. */
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextSaturday3PM());

  /* Function to update the timer. updateTimer is defined as a function 
  that sets the timeLeft state variable by calling the getTimeUntilNextSaturday3PM
  function. This function will be used to update the timer periodically. */
  const updateTimer = () => {
    setTimeLeft(getTimeUntilNextSaturday3PM());
  };

  /* This block of code uses the useEffect hook to manage the timer. It starts by 
  setting up a timer using setInterval that calls the updateTimer function every 
  1000 milliseconds (1 second). */
  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);

    /* The useEffect hook also returns a cleanup function, which is used to clear
    the timer when the component unmounts or when the dependencies change. In this case,
    there are no dependencies specified (empty dependency array []), so the cleanup 
    function will be called when the component unmounts. */
    return () => clearInterval(timer);
  }, []);

  // Calculate the time remaining until the next Saturday at 3 PM
  function getTimeUntilNextSaturday3PM() {
    /* This is a function getTimeUntilNextSaturday3PM that calculates the time remaining until the next Saturday at 3 PM.
    It uses the Date object to get the current date and time. It calculates the number of days, hours, 
    minutes, and seconds remaining until the next Saturday at 3 PM by subtracting the current values
    from the target values (6 for Saturday, 15 for 3 PM, 0 for minutes, and 0 for seconds). */
    const now = new Date();
    const daysUntilSaturday = 6 - now.getDay(); // 6 is Saturday
    const hoursUntil3PM = 15 - now.getHours(); // 15 is 3 PM
    const minutesUntil3PM = 0 - now.getMinutes(); // 0 is the minute value for 3 PM
    const secondsUntil3PM = 0 - now.getSeconds(); // 0 is the second value for 3 PM

    return (
      /* 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute */
      daysUntilSaturday * 24 * 60 * 60 +
      hoursUntil3PM * 60 * 60 +
      minutesUntil3PM * 60 +
      secondsUntil3PM
    );
  }

  /* Format the time as days, hours, minutes, and seconds */
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  /* In summary, this code sets up a timer that updates the
  timeLeft state variable every second, counting down to the next Saturday
  at 3 PM. When the component unmounts, it clears the timer to prevent memory leaks. */

  return (
    <div>
      <p>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </p>
    </div>
  );
};

export default Countdown;
