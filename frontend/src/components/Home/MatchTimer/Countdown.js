import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextSaturday3PM());

  // Function to update the timer
  const updateTimer = () => {
    setTimeLeft(getTimeUntilNextSaturday3PM());
  };

  // Use useEffect to start the timer and clear it when timeLeft reaches 0
  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);

    // Clear the timer when timeLeft is 0
    return () => clearInterval(timer);
  }, []);

  // Calculate the time remaining until the next Saturday at 3 PM
  function getTimeUntilNextSaturday3PM() {
    const now = new Date();
    const daysUntilSaturday = 6 - now.getDay(); // 6 is Saturday
    const hoursUntil3PM = 15 - now.getHours(); // 15 is 3 PM
    const minutesUntil3PM = 0 - now.getMinutes(); // 0 is the minute value for 3 PM
    const secondsUntil3PM = 0 - now.getSeconds(); // 0 is the second value for 3 PM

    return (
      daysUntilSaturday * 24 * 60 * 60 +
      hoursUntil3PM * 60 * 60 +
      minutesUntil3PM * 60 +
      secondsUntil3PM
    );
  }

  // Format the time as days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <p>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </p>
    </div>
  );
};

export default Countdown;
