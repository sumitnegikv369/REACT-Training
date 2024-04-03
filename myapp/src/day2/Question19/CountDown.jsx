import useTimer from './useTimer';
import './styles.css'

const CountDown = () => {
    const initialDuration = 180; 
  const { duration, isRunning, startTimer, pauseTimer, resetTimer } = useTimer(initialDuration);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h2>CountDown</h2>
      <p>Time remaining: {formatTime(duration)}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountDown;

