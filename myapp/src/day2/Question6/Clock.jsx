import { useEffect, useState } from "react";
import './styles.css'
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setCurrentTime(newTime); 
    }, 1000);
    return () => clearInterval(timer); 
  }, []); 

  return (
    <div className="clock">
      <p>{currentTime}</p>
    </div>
  );
};

export default Clock;
