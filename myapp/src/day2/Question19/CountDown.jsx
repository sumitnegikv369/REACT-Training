import useTimer from './useTimer'
import './styles.css'

const CountDown = () => {
  const initialDuration = 180
  const { duration, isRunning, startTimer, pauseTimer, resetTimer } =
    useTimer(initialDuration)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div className="countdown">
      <h2>CountDown</h2>
      <p>Time remaining: {formatTime(duration)}</p>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default CountDown
