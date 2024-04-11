import { useState, useEffect } from 'react'

const useTimer = (initialDuration) => {
  const [duration, setDuration] = useState(initialDuration)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId

    if (isRunning && duration > 0) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => prevDuration - 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning, duration])

  const startTimer = () => {
    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setDuration(initialDuration)
    setIsRunning(false)
  }

  return { duration, isRunning, startTimer, pauseTimer, resetTimer }
}

export default useTimer
