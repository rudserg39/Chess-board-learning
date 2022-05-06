import { useState, useEffect } from 'react';

const useCountdown = isGameStarted => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownTimeoutId = setTimeout(() => {
      if (isGameStarted && countdown) {
        setCountdown(prevCountdown => prevCountdown - 1);
      }
    }, 1000);

    if (!isGameStarted) {
      setCountdown(3);
    }

    return () => clearTimeout(countdownTimeoutId);

  }, [isGameStarted, countdown]);

  return countdown;
};

export default useCountdown;
