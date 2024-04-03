import { useState } from "react";
import './styles.css'

const RandomNumberGenerator = () => {
    const random = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomNumber] = useState(random);
  return (
    <>
      <p className="random-number">{randomNumber}</p>
      <button 
      className="random-btn"
        onClick={() => setRandomNumber(random)}
      >
        generate random number
      </button>
    </>
  );
};

export default RandomNumberGenerator;
