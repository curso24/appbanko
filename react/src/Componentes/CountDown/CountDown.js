import React, { useState, useEffect } from 'react';
import "./CountDown.css";
const CountdownTimer = () => {
  const initialTime = 300; // 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [vibrating, setVibrating] = useState(false);
  const convertToMinutesAndSeconds = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return { minutes, seconds };
  };
  const resetTimer = () => {
    setTimeLeft(initialTime);
    setVibrating(false); // Reset vibrating state
  };
  const countdown = () => {
    setTimeLeft(prevTimeLeft => {
      if (prevTimeLeft === 30) {
        if (!vibrating && navigator.vibrate) {
          navigator.vibrate([1000, 500, 1000, 500, 1000]);
          setVibrating(true);
        }
      }
      return prevTimeLeft - 1;
    });
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(countdown, 1000);
      return () => clearInterval(timerId);
    } else {
      window.location.reload();
    }
  }, [timeLeft, vibrating]);
  const { minutes, seconds } = convertToMinutesAndSeconds(timeLeft);
  return (
    <div>
      <h3 className='timer'>You will be logged out in: {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h3>
      <button className='back' onClick={resetTimer}>Reset Time</button>
    </div>
  );
};
export default CountdownTimer;