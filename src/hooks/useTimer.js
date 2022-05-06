import { useState, useEffect } from 'react';

const useTimer = (time, isTimerRunning) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const setTimerTimeoutId = setTimeout(() => {
      if (isTimerRunning && timer) {
        setTimer(prevTimer => prevTimer - 1000);
      }
    }, 1000);

    if (!isTimerRunning) {
      setTimer(time);
    }

    return () => clearTimeout(setTimerTimeoutId);

  }, [time, isTimerRunning, timer]);

  return timer;
};

export default useTimer;
