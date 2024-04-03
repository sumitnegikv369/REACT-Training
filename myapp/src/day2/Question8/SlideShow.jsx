import { useEffect, useState } from "react";
import './styles.css'

const images = [
    "slide11.jpg",
    "slide12.jpg",
    "slide13.jpg",
    "slide14.jpg",
    "slide15.jpg",
    "slide16.jpg",
    "slide17.jpg",
]
const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let timer;
    if (play) {
      timer = setTimeout(() => {
        if(currentIndex===images.length-1){
            setCurrentIndex(1)
        }else{
            setCurrentIndex((prev) => prev + 1);
        }
      }, speed * 1000);
      return () => clearTimeout(timer);
    } 
  }, [play, currentIndex]);

  return (
    <div className="slide">
        <img src={images[currentIndex]} alt="slide" />
        <input
          type="number"
          placeholder="Time Interval"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          min={1}
          max={10}
        />
        <div>
          <button onClick={() => setPlay(true)}>Play</button>
          <button onClick={() => setPlay(false)}>Pause</button>
        </div>
    </div>
  );
};

export default SlideShow;
