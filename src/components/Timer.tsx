import React, { useState, useRef, useContext, useEffect } from 'react';
import audio from '../assets/sounds/sonido.mp3'
import './Timer.css'

const Timer = () => {
  const [timer, setTimer] = useState(300)
  const [show, setShow] = useState('')
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const increment = useRef(null)
Notification.requestPermission()

const sonido = new Audio(audio)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  useEffect(() => {
    let interval: number = 0;
    formatTime()
    if( isActive && isPaused == false) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 1000)
    }
    else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval);
    };
    
  }, [isActive, isPaused, timer])
  
  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2)
    const minutes = Math.floor(timer / 60)
    const getMinutes = `0${minutes % 60}`.slice(-2)
    setShow(` ${getMinutes} : ${getSeconds}`)
  }

  if(timer==0){
    sonido.play()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value
  }

  const handlePlus = () => {
    setTimer(timer => timer + 60)
  }

  const handleSubs = () => {
    setTimer(timer => timer - 60)
  }
  const handlePause = () => {
    setIsPaused(true)
    setIsActive(false)
  }

  return (
    <div>
      <div className="app">
        <div className='stopwatch-card'>
          <input type="text" value={show} onChange={(e) => handleChange(e)} />
          <button onClick={() => handlePlus()} disabled={isActive}>+</button>
          <button onClick={() => handleSubs()} disabled={isActive}>-</button>
          <button onClick={() => handleStart()} disabled={isActive}>Start</button>
          <button onClick={() => handlePause()} disabled={!isActive}>Pause</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
