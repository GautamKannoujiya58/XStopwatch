import React, { useEffect, useState } from "react";
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);
  const handleStartClick = () => {
    setFlag((flag) => !flag);
  };
  const handleResetClick = () => {
    setTime((prevTime) => prevTime * 0);
  };

  useEffect(() => {
    let intevalId;
    if (flag) {
      intevalId = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else {
      clearInterval(intevalId);
    }
    console.log("IntervalID >>", intevalId);
    return () => clearInterval(intevalId);
  }, [flag, time]);
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    // Return formatted string, ensuring two digits for seconds
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  console.log("time >>>", time);
  console.log("Flag >>", flag);

  //   const mintueTime = time % 60;

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStartClick}>{flag ? "Stop" : "Start"}</button>
      <button onClick={handleResetClick}>Reset</button>
    </>
  );
}
export default Stopwatch;
