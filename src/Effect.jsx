import React, { useEffect, useState } from 'react'
import './Effect.css'

const Effect = () => {
const [time, setTime] = useState(0)
const [isRunning, setIsRunning] = useState(false) 
const [isStop, setIsStop] = useState(true)
useEffect(() => {
  let interval = null;

  if (isRunning && isStop === false) {
      interval = setInterval(() => {
          setTime((time) =>time  + 10);
      },10);
  } else {
      clearInterval(interval);
  }
  return () => {
      clearInterval(interval);
  };
}, [isRunning, isStop]);

const handleStart = () => {
  setIsRunning(true);
  setIsStop(false);
};

const handleStop = () => {
  setIsStop(!isStop);
};

const handleReset = () => {
  setIsRunning(false);
  setTime(0);
};
  return (
    <div className='wCon'>
        <div className="watch">
            <h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
            <h1>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
            <h1> {("0" + ((time / 10) % 100)).slice(-2)}</h1>
        </div>
        <div className="Btn">
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}

export default Effect
