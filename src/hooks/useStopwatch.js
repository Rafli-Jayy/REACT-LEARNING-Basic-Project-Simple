import { useState, useRef } from 'react';

export default function useStopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };


  return {
    time,
    isRunning,
    start: handleStart,
    pause: handlePause,
    reset: handleReset
  };
}