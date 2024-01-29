import { useEffect, useState } from "react";

export const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 100);

      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [state]);
  const manageTimer = (action) => {
    // when Start button is clicked
    if (action === "Start") {
      setState(true);
    }

    // when Stop button is clicked
    else if (action === "Stop") {
      clearInterval(intervalId);
      setIntervalId(null);
      setState(false);
    }
    // when reset button is clicked
    else {
      setTimer(0);
      setState(false);
    }
    // clearInterval(intervalId);
    // setIntervalId(null);
  };

  return (
    <>
      <h3>{timer}</h3>
      <button onClick={() => manageTimer("Start")}>Start</button>
      <button onClick={() => manageTimer("Stop")}>Stop</button>
      <button onClick={() => manageTimer("Restart")}>Reset</button>
    </>
  );
};
