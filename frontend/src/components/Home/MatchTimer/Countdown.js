import React, { useState, useEffect } from "react";

const Countdown = () => {
  /* useState hook is being used create a state variable timeLeft and a function setTimeLeft
  to update its value. */
  /*  The initial value of timeLeft is set to the result of the 
  getTimeUntilNextSaturday3PM function, which calculates the time remaining until 
  the next Saturday at 3 PM. */
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextSaturday3PM());

  //UPDATE THE TIMER
  /* Function to update the timer. updateTimer is defined as a function that 
  sets the timeLeft state variable by calling the getTimeUntilNextSaturday3PM
  function. */
  /* This function will be used to update the timer every 1000 milliseconds, because
  as shown below this is what the setInterval function is set to. updateTimer is being 
  passed into the useEffect function. */
  const updateTimer = () => {
    setTimeLeft(getTimeUntilNextSaturday3PM());
  };

  //SETTING WHEN TO UPDATE THE TIMER
  /* This block of code uses the useEffect hook to manage the timer. It starts by
  setting up a timer using setInterval that calls the updateTimer function every
  1000 milliseconds (1 second). 1 second is the smallest denomination of time I'm 
  recording for, hence update. */
  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);

    /* The useEffect hook also returns a cleanup function, which is used to clear
    the timer when the component unmounts or when the dependencies change. In this case,
    there are no dependencies specified (empty dependency array []), so the cleanup
    function will be called when the component unmounts. */
    return () => clearInterval(timer);
  }, []);

  // CALCULATE TIMER
  /* Calculate the time remaining until the next Saturday at 3 PM */
  function getTimeUntilNextSaturday3PM() {
    /* This is a function getTimeUntilNextSaturday3PM that calculates the time remaining 
    until the next Saturday at 3 PM. It uses the Date object to get the current date and time. */
    const now = new Date();
    /* remember -> days are 0 indexed But, 0 is sunday, so 6 would still be saturday */
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    /* calculate days till saturday */
    /* if currentDay is less than or equal to 6 (includes Sunday at 0), then 
    do 6 - the current day. So Sunday would be 6 - 0 = 6, Monday 6 - 5 = 5 */
    /* Sunday 0, Mon 1, Tues 2, Wed 3, Thurd 4, Friday 5, Sat 6 so can't be anything
    other than less than or equal to 6, but '6' completes ternary operator */
    const daysUntilSaturday = currentDay <= 6 ? 6 - currentDay : 6;

    /* Check if it's already past 3 PM on current Saturday. Remember Saturday = 6 */
    if (currentDay === 6 && currentHour >= 15) {
      /* If past 3pm current Saturday, set the countdown to the next Saturday */
      return (
        (daysUntilSaturday + 7) * 24 * 60 * 60 -
        currentHour * 60 * 60 -
        currentMinute * 60 -
        currentSecond
      );
    } else {
      /* Otherwise, calculate the remaining time until 3 PM on the current Saturday */
      const hoursUntil3PM = 15 - currentHour;
      const minutesUntil3PM = 0 - currentMinute;
      const secondsUntil3PM = 0 - currentSecond;

      return (
        daysUntilSaturday * 24 * 60 * 60 +
        hoursUntil3PM * 60 * 60 +
        minutesUntil3PM * 60 +
        secondsUntil3PM
      );
    }
  }

  // Format the time as days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  // In summary, this code sets up a timer that updates the
  // timeLeft state variable every second, counting down to the next Saturday
  // at 3 PM. When the component unmounts, it clears the timer to prevent memory leaks.

  return (
    <div>
      <p>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </p>
    </div>
  );
};

export default Countdown;
