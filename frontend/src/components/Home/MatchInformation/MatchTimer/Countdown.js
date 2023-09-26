import React, { useState, useEffect } from "react";
import "./Countdown.scss";

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

    /* Check if it's already 3 PM or past 3 PM on current Saturday (Its a less or greater than
    3). Remember Saturday = 6 */
    if (currentDay === 6 && currentHour >= 15) {
      /* If past 3pm current Saturday, set the countdown to the next Saturday by calculating
      the time remaining until next Saturday at 3pm. */
      return (
        /* In seconds -> daysUntilSaturday + 7 calculates days until next Saturday. Adds 7 to 
        make sure counting days starting from next Saturday (even if today = Saturday). */
        (daysUntilSaturday + 7) * 24 * 60 * 60 -
        /* In seconds -> substracts current hour (number of hours passed in current day)  */
        currentHour * 60 * 60 -
        /* In seconds -> subtracts number of minutes (number of minutes passed in the current hour) */
        currentMinute * 60 -
        /* In seconds -> subtracts number of seconds (number of seconds passed in the current minute) */
        currentSecond
      );
    } else {
      /* If the current status is not Saturday past 3pm, calculate the remaining time until 3 PM on 
      the current Saturday */
      const hoursUntil3PM = 15 - currentHour;
      const minutesUntil3PM = 0 - currentMinute;
      const secondsUntil3PM = 0 - currentSecond;

      /* Return statement is adding all of the time remaining in seconds until 3pm on the
      current saturday  */
      return (
        /* adding the calculation of the remaining seconds in the remaining days until Saturday */
        daysUntilSaturday * 24 * 60 * 60 +
        /* adding the calculation of the remaining seconds in the hours until 3 PM. */
        hoursUntil3PM * 60 * 60 +
        /*  adding the calculation of the remaining seconds in the minutes until 3 PM.*/
        minutesUntil3PM * 60 +
        /*  adding the calculation of the remaining seconds until 3 PM.*/
        secondsUntil3PM
      );
    }
  }

  /* (24 * 60 * 60) calculates the total number of seconds in a day (24 hours * 
  60 minutes * 60 seconds) */
  /* Math.floor(timeLeft / (24 * 60 * 60)) divides timeLeft by the number
  of seconds in a day and rounds down to the nearest whole number. 
  This gives you the number of whole days in the duration. */
  const days = Math.floor(timeLeft / (24 * 60 * 60));

  /* (timeLeft % (24 * 60 * 60)) calculates the remaining seconds after 
  subtracting full days. This is done using the modulo operator %, 
  which gives you the remainder of the division. / (60 * 60) converts the 
  remaining seconds into hours (60 minutes * 60 seconds). */
  /* Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60)) 
  calculates the number of whole hours in the remaining seconds AFTER 
  removing full days. */
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));

  /* const minutes = Math.floor((timeLeft % (60 * 60)) / 60); (timeLeft % (60 * 60)) 
  calculates the remaining seconds AFTER subtracting full hours. / 60 converts the remaining 
  seconds into minutes by dividing by the number of seconds in a minute (60 seconds). */
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);

  /* timeLeft % 60 calculates the remaining seconds after subtracting full minutes. 
  This gives you the remaining seconds in the duration. */
  const seconds = timeLeft % 60;

  //FOR ABOVE:
  /* Remember -> initial value of timeLeft is set to the result of the 
  getTimeUntilNextSaturday3PM function, which calculates the time remaining until 
  the next Saturday at 3 PM. */
  /* timeLeft is the duration in seconds that you want to format. Format the time as days, 
  hours, minutes, and seconds */

  // In summary, this code sets up a timer that updates the
  // timeLeft state variable every second, counting down to the next Saturday
  // at 3 PM. When the component unmounts, it clears the timer to prevent memory leaks.

  return (
    <div className="countdown__content">
      <h3 className="heading-3 countdown__subheading">
        Countdown to next fixture:
      </h3>
      <h2 className="heading-2">
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </h2>
    </div>
  );
};

export default Countdown;
